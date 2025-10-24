import { useState } from "react";
import ThemeToggle from "../components/common/ThemeToggle";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About Us" },
    { href: "#solutions", label: "Solutions" },
    { href: "#pricing", label: "Pricing" },
    { href: "#resources", label: "Resources" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container px-4 lg:px-20 pt-4 pb-0 lg:py-6">
      <div className="rounded-[20px] pl-6 pr-2 py-2 lg:p-6 bg-white dark:bg-white/5 flex justify-between items-center max-w-[1000px] mx-auto">
        <div className="flex items-center gap-9">
          <a
            href="#"
            className="w-20 h-9 text-slate-950 dark:text-white font-bold text-3xl"
            aria-label="Home"
          >
            weeb
          </a>
          <div className="hidden lg:flex">
            <nav aria-label="Main navigation">
              <ul className="flex gap-8 px-2 py-3 text-slate-950 dark:text-white font-medium text-base tracking-wide flex-wrap">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="relative hover:text-purple-400 transition-colors duration-200 after:content-[''] after:absolute after:left-1/2 after:-bottom-[2px] after:w-0 after:h-[2px] after:bg-purple-400 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="hidden lg:flex gap-4 items-center">
          <ThemeToggle />
          <a
            href="#login"
            className="rounded-lg text-center text-base font-medium tracking-wide text-slate-950 dark:text-white py-3 px-6 hover:ring-1 hover:ring-slate-950 dark:hover:ring-white transition-all duration-300 ease-in-out"
          >
            Log In
          </a>
          <a
            href="#signup"
            className="rounded-lg bg-purple-600 text-center text-white font-medium text-base py-3 px-7 tracking-wide hover:bg-purple-400 transition-colors duration-300 ease-in-out"
          >
            Join Now
          </a>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            className="lg:hidden z-50 text-slate-950 dark:text-white px-[10px] py-[14px] hover:bg-slate-300 dark:hover:bg-white/20 rounded-lg transition-colors duration-300"
          >
            <div className="w-7 h-5 flex flex-col justify-between">
              <span
                className={`h-1 bg-slate-950 dark:bg-white rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-2 w-full" : "w-4"}`}
              />
              <span
                className={`h-1 w-full bg-slate-950 dark:bg-white rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
              />

              <span
                className={`h-1 bg-slate-950 dark:bg-white rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-2 w-full" : "w-4 ml-auto"}`}
              />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <>
            <div
              onClick={toggleMenu}
              className="fixed inset-0 bg-white/50 dark:bg-black/50 z-40 lg:hidden"
            >
              <div className="fixed top-0 right-0 h-full w-72 bg-gray-200 dark:bg-gray-900 z-40 lg:hidden shadow-xl">
                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-col p-6 mt-20"
                >
                  <ul className="flex flex-col gap-6 font-extrabold text-2xl tracking-wide mb-8">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="relative hover:text-black/30 dark:hover:text-white/50 transition-colors duration-200 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-1 after:bg-black/30 dark:after:bg-white/50 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3 border-t border-white/90 dark:border-white/10 pt-6">
                    <a
                      href="#login"
                      className="rounded-lg text-center text-base font-medium tracking-wide text-slate-950 dark:text-white py-3 px-6 hover:ring-1 hover:ring-slate-950 dark:hover:ring-white transition-all duration-300 ease-in-out"
                    >
                      Log In
                    </a>
                    <a
                      href="#signup"
                      className="rounded-lg bg-purple-600 text-center text-white font-medium text-base py-3 px-7 tracking-wide hover:bg-purple-400 transition-colors duration-300 ease-in-out"
                    >
                      Join Now
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
