import PageTransition from "../components/common/PageTransition";
import BlogPreview from "../components/sections/Blogpreview";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";

const Blog = () => {
  return (
    <div>
      <PageTransition>
        <BlogPreview />
        <Testimonials />
        <Process />
      </PageTransition>
    </div>
  );
};

export default Blog;
