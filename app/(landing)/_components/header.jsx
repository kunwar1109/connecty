import { ThemeToggle } from "@/components/set-theme";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="h-20 flex justify-between items-center px-4">
      <div>Logo</div>
      <div className="flex gap-x-2 items-center justify-center">
        <Link href="/sign-in">
          <Button variant="outline" size="nav">
            Login
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button variant="outline" size="nav">
            Sign Up
          </Button>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};
