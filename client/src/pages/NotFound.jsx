import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function NotFound() {
  return (
    <div className="flex h-dvh w-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-primary text-3xl font-bold underline">
          Page Not Found
        </h1>
        <Button asChild>
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
