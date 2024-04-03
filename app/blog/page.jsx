import Link from "next/link";

export default function Blog() {
  return (
    <div className="my-24 text-lg">
      <Link href={"/"}>go to home page</Link>
      <div
        id="blog-container"
        className="bg-gray-900 text-white shadow-xl rounded-lg p-4 container group transition-all duration-400"
      >
        <h2 id="blog-name" className="text-lg font-extrabold mb-4">
          name bla bla bla
        </h2>
        <div className="text-sm mb-4 line-clamp-2 group-hover:line-clamp-none">
          <div dangerouslySetInnerHTML={{ __html: <div>bla</div> }} />
        </div>
        <div className="flex justify-between items-end">
          <h5 className="text-xs text-gray-400">date</h5>
          <h5 className="text-xs text-gray-400">
            ავტორი: <span>author</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
