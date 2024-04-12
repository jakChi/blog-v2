import BlogCard from "@/components/Blog-card";
export const BLOG_API =
  "https://660e6f836ddfa2943b36c78e.mockapi.io/api/v2/blogs";
export const USER_API =
  "https://660e6f836ddfa2943b36c78e.mockapi.io/api/v2/users";

const getBlogs = async () => {
  try {
    const response = await fetch(BLOG_API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <section>
      <h1>Most Popular Blogs</h1>
      <div className="flex">
        {blogs.map((blog, idx) => (
          <BlogCard blog={blog} key={idx} />
        ))}
      </div>
    </section>
  );
}
