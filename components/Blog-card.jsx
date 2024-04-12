import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
    <div className="w-1/3 border">
      <Image
        src={blog.blogPic}
        alt="blog preview"
        width={200}
        height={200}
        className="w-64 h-44 object-cover m-auto"
      />
      <div id="details">
        <Link href={`/blogs/${blog.id}`}>
          <h2 id="blog-name">{blog.name}</h2>
        </Link>
        <p id="blog-content">{blog.content}</p>
        <p id="blog-date">{blog.createdAt}</p>
        <Link id="blog-author" href={`/users`}>
          {blog.userName}
        </Link>
      </div>
    </div>
  );
}
