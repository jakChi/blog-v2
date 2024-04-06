"use client";

import { useState, useEffect } from "react";

import { API } from "../page";
import BlogCard from "@/components/Blog-card";

const sydPic =
  "https://celebmafia.com/wp-content/uploads/2021/08/sydney-sweeney-photoshoot-august-2021-9.jpg";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  async function fetchData() {
    // console.log("Fetching blogs data...");
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    await fetch(API, { cache: "no-store" })
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
      <section className="flex flex-row flex-wrap">
        {blogs.map((blog, idx) => (
          <BlogCard blog={blog} key={idx} />
        ))}
      </section>
    </div>
  );
}
