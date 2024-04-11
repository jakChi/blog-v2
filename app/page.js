"use client";

import BlogCard from "@/components/Blog-card";
import { useEffect, useState } from "react";

export const BLOG_API = "https://660e6f836ddfa2943b36c78e.mockapi.io/api/v2/blogs";
export const USER_API = "https://660e6f836ddfa2943b36c78e.mockapi.io/api/v2/users";

export default function Home() {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch(BLOG_API)
      .then((res) => res.json())
      .then((data) => data.filter((blog, idx) => blog.id === "5" || blog.id == "6"))
      .then((filtered) => setPopularBlogs(filtered));
  }, []);

  return (
    <main className="mt-24">
      <section>
        <h1>most popular blogs</h1>
        <div className="flex">
          {popularBlogs.map((blog, idx) => (
            <BlogCard blog={blog} key={idx} />
          ))}
        </div>
      </section>
    </main>
  );
}

$("#night").on("click", function() {
  $("body").css({
    "background-color": "#000",
    "color": "white",
  });
});
