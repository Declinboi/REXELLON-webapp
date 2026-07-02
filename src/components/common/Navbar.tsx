import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import Container from "../ui/Container";
import GlowButton from "../ui/GlowButton";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((window.scrollY / total) * 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress */}

      <motion.div
        className="fixed left-0 top-0 z-[100] h-[3px] bg-cyan-500"
        style={{
          width: `${progress}%`,
        }}
      />

      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="fixed left-0 top-0 z-50 w-full border-b border-cyan-500/10 bg-[#0F172A] shadow-[0_10px_40px_rgba(0,0,0,.35)] backdrop-blur-2xl"
      >
        <Container>
          <div className="mx-auto flex h-20 items-center justify-between ">
            <Logo />

            {/* Desktop */}

            <nav className="ml-16 hidden lg:flex items-center gap-10">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  className="relative text-sm font-medium"
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`transition duration-300 ${
                          isActive
                            ? "text-cyan-400"
                            : "text-white hover:text-cyan-400"
                        }`}
                      >
                        {link.name}
                      </span>

                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-cyan-400 shadow-[0_0_15px_#06B6D4]"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right */}

            <div className="hidden lg:block ">
              <Link to="/contact">
                <GlowButton >Book Consultation</GlowButton>
              </Link>
            </div>

            {/* Mobile */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-white transition hover:text-cyan-400 lg:hidden"
            >
              {mobileMenu ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </Container>

        {/* Mobile Menu */}

        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{
                opacity: 0,
                y: -30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -30,
              }}
              className="border-t border-slate-800 bg-[#0F172A]/95 backdrop-blur-2xl lg:hidden"
            >
              <Container>
                <div className="flex flex-col py-8">
                  {links.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      end={link.path === "/"}
                      onClick={() => setMobileMenu(false)}
                      className={({ isActive }) =>
                        `rounded-xl px-4 py-4 transition ${
                          isActive
                            ? "bg-cyan-500/10 text-cyan-400"
                            : "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}

                  <Link
                    to="/contact"
                    onClick={() => setMobileMenu(false)}
                    className="mt-6"
                  >
                    <GlowButton className="w-full">
                      Book Consultation
                    </GlowButton>
                  </Link>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;
