import PageTransition from "../components/common/PageTransition";
import FeaturedProjects from "../components/sections/Featuredprojects";

const Projects = () => {
  return (
    <div>
      <PageTransition>
        <FeaturedProjects/>
      </PageTransition>
    </div>
  );
};

export default Projects;
