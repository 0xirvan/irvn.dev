import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link className="text-3xl font-semibold tracking-tight" href="/">
            irvn.dev
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          <Link
            className="text-base transition-all hover:text-neutral-700 dark:hover:text-neutral-200 flex align-middle relative"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-base transition-all hover:text-neutral-700 dark:hover:text-neutral-200 flex align-middle relative"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-base transition-all hover:text-neutral-700 dark:hover:text-neutral-200 flex align-middle relative"
            href="/stats"
          >
            Stats
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
