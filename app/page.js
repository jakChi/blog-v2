"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const API = "https://660e6f836ddfa2943b36c78e.mockapi.io/api/v2/blogs";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <main className="mt-24">
      <div id="blog-card" className="flex flex-row flex-wrap w-full">
        {blogs.map((blog, idx) => (
          <Link href="/blog" key={idx} className="w-1/3 border">
            <Image
              src="https://celebmafia.com/wp-content/uploads/2021/08/sydney-sweeney-photoshoot-august-2021-9.jpg"
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
    </main>
  );
}
