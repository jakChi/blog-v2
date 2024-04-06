"use client"

import Image from "next/image";

import { API } from "../page";
import { useEffect, useState } from "react";
import BlogCard from "@/components/Blog-card";

export default function UserProfile() {
  const [userBlogs, setUserBlogs] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => data.filter((blog, idx) => blog.name == "Jules85")) // it should be checking current user
      .then((filtered) => setUserBlogs(filtered));
  }, []);

  return (
    <div className="mt-24">
      <section>
        <h1 className="text-2xl">profile details</h1>
      {/* <Image src={user.photoUrl} alt="user" width={200} height={200}/> */}
        <p>userName: bla bla</p>
        <p>email: bla@bla.com</p>

      </section>
      <section>
        <h1 className="text-2xl">Your Blogs</h1>
        <div className="w-full flex flex-wrap">
          {userBlogs.map((blog, idx) => (
            <BlogCard blog={blog} key={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
