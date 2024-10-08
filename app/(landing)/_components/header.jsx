import { ThemeToggle } from "@/components/set-theme";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <nav className="h-20 flex justify-between items-center px-4">
      <div>Logo</div>
      <div className="flex gap-x-2 items-center justify-center">
        <Button variant="outline" size="nav">
          Login
        </Button>
        <Button variant="outline" size="nav">
          Sign Up
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  );
};
