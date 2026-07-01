import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import Container from "../ui/Container";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-slate-200 bg-slate-950 text-white">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-4">
          {/* Brand */}

          <div className="space-y-5">
            <Logo />

            <p className="text-sm leading-7 text-slate-400">
              Building modern digital products that help startups and businesses
              scale with confidence.
            </p>
          </div>

          {/* Company */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">Company</h3>

            <div className="flex flex-col gap-3 text-slate-400">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/projects">Projects</Link>
            </div>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">Resources</h3>

            <div className="flex flex-col gap-3 text-slate-400">
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">Connect</h3>

            <div className="flex gap-4">
              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

              <a href="#">
                <Mail />
              </a>
              <a href="#">
                <FaXTwitter  />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Rexellon Technologies. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
