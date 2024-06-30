import express from "express";
import jsonServer from "json-server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cors from "cors";

const server = express();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const JWT_SECRET = "your_jwt_secret";

server.use(middlewares);
server.use(express.json());
server.use(cors());

server.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: Date.now(),
    username,
    password: hashedPassword,
    isSubscribed: false,
  };

  router.db.get("users").push(user).write();
  res.send("User registered");
});

server.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = router.db.get("users").find({ username }).value();

  if (!user) return res.status(400).send("User not found");
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).send("Invalid credentials");

  const token = jwt.sign(
    { userId: user.id, isSubscribed: user.isSubscribed },
    JWT_SECRET,
  );
  res.json({ token });
});

server.post("/subscribe", (req, res) => {
  const { token } = req.body;

  try {
    const { userId } = jwt.verify(token, JWT_SECRET);
    router.db
      .get("users")
      .find({ id: userId })
      .assign({ isSubscribed: true })
      .write();
    res.send("Subscribed successfully");
  } catch (err) {
    res.status(400).send("Invalid token");
  }
});

server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running on port 5000");
});
