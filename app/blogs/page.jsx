"use client";

import { useState, useEffect } from "react";

import { BLOG_API } from "../page";

import BlogCard from "@/components/Blog-card";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);

  async function fetchData() {
    // console.log("Fetching blogs data...");
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    await fetch(BLOG_API, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="blog-card" className="mt-24 w-full">
      {/* <section className="m-10 underline">
        <Link href="/blogs/create-new">Create new Blog</Link>
      </section> */}
      <section>
        <h1>Blogs</h1>
        <div className="flex flex-row flex-wrap">
          {blogs.map((blog, idx) => (
            <BlogCard blog={blog} key={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
