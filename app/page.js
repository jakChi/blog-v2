"use client";

import { useEffect, useState } from "react";

export const API = "https://660e6f836ddfa2943b36c78e.mockapi.io/api/v2/blogs";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) =>
        data.filter((blog, idx) => {
          blog.id == 5 || blog.id == 6 ? setBlogs(blog) : console.log(blog);
        })
      );
  });

  return (
    <main className="mt-24">
      <section>
        <h2>most popular blogs</h2>
        {blogs[0]}
      </section>
    </main>
  );
}
