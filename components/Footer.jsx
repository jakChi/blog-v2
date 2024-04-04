import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-end border">
      source code:{" "}
      <Link href="https://github.com/jakChi/blog-v2">Click here</Link>
    </div>
  );
}
