import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import NoiseBackground from "../components/ui/NoiseBackground";
import CursorFollower from "../components/common/CursorFollower";

const MainLayout = () => {
  return (
    <>
      <NoiseBackground />
      <CursorFollower />

      <Navbar />

      <main className="pt-20">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
