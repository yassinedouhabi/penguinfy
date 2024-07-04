import { ModeToggle } from "@/components/ModeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FaBarsStaggered } from "react-icons/fa6";
import Glassmorphism from "../../styles/Glassmorphism";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className={`sticky top-0 z-50 ${Glassmorphism}`}>
      <nav className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger>
                  <Button variant="outline" size="icon">
                    <FaBarsStaggered />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <Button asChild variant="ghost">
                      <Link to="/">Home</Link>
                    </Button>
                    <Button asChild variant="ghost">
                      <Link to="search">search</Link>
                    </Button>
                    <Button asChild variant="ghost">
                      <Link to="downloads">downloads</Link>
                    </Button>
                    <Button asChild variant="ghost">
                      <Link to="settings">settings</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="flex items-center space-x-8">
              <div className="logo">
                <h1 className="text-3xl font-bold">Penguinfy</h1>
              </div>
              <div className="nav-links hidden md:inline-flex">
                <div className="flex items-center space-x-4">
                  <Button asChild variant="ghost">
                    <Link to="/">Home</Link>
                  </Button>
                  <Button asChild variant="ghost">
                    <Link to="search">search</Link>
                  </Button>
                  <Button asChild variant="ghost">
                    <Link to="downloads">downloads</Link>
                  </Button>
                  <Button asChild variant="ghost">
                    <Link to="settings">settings</Link>
                  </Button>
                </div>
              </div>
            </div>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
