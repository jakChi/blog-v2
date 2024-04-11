"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import $ from 'jquery';


export default function Navbar() {
  const currentPath = usePathname();

  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <div className="d-flex mx-2 bg-light my-2">
        <header className="fw-bolder ms-2 text-primary">
          <Link
            href="/"
            rel="noreferrer"
            className=""
          >
            BLOG
          </Link>
        </header>
        <Link
          href="/"
          className="mx-3"
        >
          Home
        </Link>
      </div>
      <div className="d-flex">
        <Link href="#" className="bg-success p-2 rounded-lg">Log In</Link>
        <Link href="#" className="bg-warning p-2 mx-2">Sign Up</Link>
        <div className="d-inline align-middle mt-1 ms-3 me-2"><Link id="night" href="/"><Image className="align-middle" src="https://cdn-icons-png.flaticon.com/512/5261/5261906.png" width="30" height="30" alt="Night Mode icon"></Image></Link></div>
      </div>
    </nav>
  );
}
