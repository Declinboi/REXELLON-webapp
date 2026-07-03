import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import Container from "../ui/Container";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white flex justify-center">
      <Container>
        <div className="rex-footer-main grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-16">
          {/* Brand */}

          <div className="max-w-sm space-y-5">
            <Logo />

            <p className="text-sm leading-7 text-slate-400">
              Building modern digital products that help startups and businesses
              scale with confidence.
            </p>
          </div>

          {/* Company */}

          <div>
            <h3 className="mb-5 text-base font-semibold">Company</h3>

            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <Link className="transition hover:text-cyan-300" to="/">Home</Link>
              <Link className="transition hover:text-cyan-300" to="/about">About</Link>
              <Link className="transition hover:text-cyan-300" to="/services">Services</Link>
              <Link className="transition hover:text-cyan-300" to="/projects">Projects</Link>
            </div>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-5 text-base font-semibold">Resources</h3>

            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <Link className="transition hover:text-cyan-300" to="/blog">Blog</Link>
              <Link className="transition hover:text-cyan-300" to="/contact">Contact</Link>
            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-5 text-base font-semibold">Connect</h3>

            <div className="flex flex-wrap gap-3">
              <a className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200" href="#" aria-label="GitHub">
                <FaGithub size={18} />
              </a>

              <a className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200" href="#" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>

              <a className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200" href="#" aria-label="Email">
                <Mail size={18} />
              </a>

              <a className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200" href="#" aria-label="X">
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Rexellon Technologies. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
