import BlogCard from "@/components/Blog-card";
import { BLOG_API } from "../page";

const getBlogs = async () => {
  try {
    const response = await fetch(BLOG_API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};

export default async function BlogsPage() {
  const blogs = await getBlogs();
  console.log("blogs: ", blogs)

  return (
    <div>
      <h1>Blogs</h1>
      {blogs.map((blog, idx) => (
        <BlogCard blog={blog} key={idx} />
      ))}
    </div>
  );
}
