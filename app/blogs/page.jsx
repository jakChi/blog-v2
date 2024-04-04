"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export const API = "https://660e6f836ddfa2943b36c78e.mockapi.io/api/v2/blogs";
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
    <div id="blog-card" className="mt-24 flex flex-row flex-wrap w-full">
      {blogs.map((blog, idx) => (
        <Link
          href={`/blogs/${blog.id}`}
          key={idx}
          data={sydPic}
          className="w-1/3 border"
        >
          <Image
            src={sydPic}
            alt="blog preview"
            width={200}
            height={200}
            className="w-64 h-44 object-cover m-auto"
          />

          <div id="details">
            <h2 id="blog-name">sydeny sweeney</h2>
            <p id="blog-content">{blog.content}</p>
            <p id="blog-date">{blog.createdAt}</p>
            <p id="blog-author">{blog.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
