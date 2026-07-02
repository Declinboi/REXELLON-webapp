import PageTransition from "../components/common/PageTransition";
import BlogPreview from "../components/sections/Blogpreview";
import FeaturedProjects from "../components/sections/Featuredprojects";
import Hero from "../components/sections/Hero";
import Process from "../components/sections/Process";
import Stats from "../components/sections/Stats";
import TechStack from "../components/sections/Techstack";
import About from "./About";
import Services from "./Services";

const Home = () => {
  return (
    <PageTransition >
      <div >
        <Hero />
        <Stats />
        <About />
        <Services />
        <FeaturedProjects />
        <Process />
        <TechStack  />
      </div>
    </PageTransition>
  );
};

export default Home;
