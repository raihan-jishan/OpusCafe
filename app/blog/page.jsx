import { BlogCard } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-8 sm:p-10 md:p-16">
      <Heading label={"#Blog"} />
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-12">
       <BlogCard /> 
       <BlogCard /> 
       <BlogCard /> 
      </div>
    </div>
  );
};

export default Blog;
