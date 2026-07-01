import { Outlet } from "react-router-dom";
import NoiseBackground from "../components/ui/NoiseBackground";

const MainLayout = () => {
  return (
    <>
      <NoiseBackground />
      {/* Navbar */}

      <main>
        <Outlet />
      </main>

      {/* Footer */}
    </>
  );
};

export default MainLayout;
