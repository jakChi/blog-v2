"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const currentPath = usePathname();

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 fixed top-0 left-0 w-screen h-16 sm:h-20 flex justify-between">
      <div className="w-3/4 flex">
        <header className="px-5 py-4">
          <Link
            href="/"
            rel="noreferrer"
            className={`text-xl sm:text-5xl font-bold`}
          >
            NIKUSHA BLOG
          </Link>
        </header>
        <Link
          href="/"
          className={`text-xl font-mono m-6 underline ${
            currentPath == "/" ? "text-blue-600" : null
          }`}
        >
          Home
        </Link>
        <Link
          href="/blogs"
          className={`text-xl font-mono m-6 underline ${
            currentPath.includes("/blogs") ? "text-blue-600" : null
          }`}
        >
          Blogs
        </Link>
      </div>
      <div className="group w-1/4 flex justify-end">
        <Link href="/profile">
          <Image
            width={100}
            height={100}
            className="cursor-pointer h-16 w-16 m-2 border-2 border-black rounded-full object-cover"
            src={
              "https://celebmafia.com/wp-content/uploads/2021/08/sydney-sweeney-photoshoot-august-2021-9.jpg"
            }
            alt="პროფილის ფოტო"
          />
        </Link>

        {/* telefonistvis aseti ragac sheileba  
        <div className="bg-gray-200 dark:bg-gray-800 absolute -right-full group-hover:right-0 top-0 w-60 h-screen transition-all duration-300 sm:delay-300">
          <UserInfo user={user} auth={auth} setUser={setUser} />
          userInfo must be here
        </div> */}
      </div>
    </nav>
  );
}
