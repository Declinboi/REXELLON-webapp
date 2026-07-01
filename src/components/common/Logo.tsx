import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link to="/" aria-label="Rexellon Home">
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="flex items-center gap-3"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-[#1E40AF] via-[#3B82F6] to-[#06B6D4] font-bold text-white shadow-lg">
          R
        </div>

        <div>
          <h1 className="text-xl font-extrabold tracking-tight text-white">
            Rexellon
          </h1>

          <p className="text-xs text-slate-400">Technologies</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default Logo;
