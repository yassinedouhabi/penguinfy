import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Downloads from "./pages/Downloads";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import HeaderLayout from "./layout/HeaderLayout";

function App() {
  return (
    <Router>
      <div className="container mx-auto mb-24 px-4 md:mb-0">
        <Routes>
          {/* Routes with Header */}
          <Route element={<HeaderLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          {/* Routes without Header */}
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
