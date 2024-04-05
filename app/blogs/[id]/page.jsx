import Image from "next/image";
const sydPic =
  "https://celebmafia.com/wp-content/uploads/2021/08/sydney-sweeney-photoshoot-august-2021-9.jpg";

async function getBlog(blogId) {
  const res = await fetch(
    `https://660e6f836ddfa2943b36c78e.mockapi.io/api/v2/blogs/${blogId}`
  );

  const data = res.json();
  return data;
}

export default async function BlogPage({ params }) {
  const blog = await getBlog(params.id);
  console.log("blog");

  return (
    <div className="mt-24">
      <Image src={blog.avatar} width={200} height={200} alt="sydney sweeney" />
      <h1>
        <span>{blog.id}. </span>
        {blog.name}
      </h1>
      <p>{blog.content}</p>
      <p>{blog.createdAt}</p>
    </div>
  );
}
