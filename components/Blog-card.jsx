import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blogs/${blog.id}`} className="w-1/3 border">
      <Image
        src={blog.avatar}
        alt="blog preview"
        width={200}
        height={200}
        className="w-64 h-44 object-cover m-auto"
      />
      <div id="details">
        <h2 id="blog-name">{blog.name + blog.createdAt}</h2>
        <p id="blog-content">{blog.content}</p>
        <p id="blog-date">{blog.createdAt}</p>
        <p id="blog-author">{blog.name}</p>
      </div>
    </Link>
  );
}
