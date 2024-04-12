"use client"

import BlogCard from "@/components/Blog-card";
import { useEffect, useState } from "react";
import $ from "jquery";
import { useState, useEffect } from "react";
export const BLOG_API =
  "https://660e6f836ddfa2943b36c78e.mockapi.io/api/v2/blogs";
export const USER_API =
  "https://660e6f836ddfa2943b36c78e.mockapi.io/api/v2/users";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(BLOG_API)
      .then((res) => res.json())
      .then((data) => data.filter((blog, idx) => blog.id === "5" || blog.id == "6"))
      .then((filtered) => setPopularBlogs(filtered));

      $("#night").on("click", function() {
        $("body").css({
          "background-color": "#000",
          "color": "red",
        });
      });
  }, []);

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


