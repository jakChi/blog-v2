import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="my-24">
      <div id="blog-container">
        <Image
          src="https://i.pinimg.com/564x/12/b6/5f/12b65f8666b9fe5483944c06536927b9.jpg"
          width={500}
          height={100}
          alt="cover"
        />
        <h2 id="blog-name" className="">
          name
        </h2>
        <div id="blog-content" className="">
          <div dangerouslySetInnerHTML={{ __html: <div>bla</div> }} />
          {/*ეს არის სპეციალური ფორმატერისთვის ჩვენი ჩაწერილი ტექსტი პირდაპირ html-ის ელემენტებად რო ჩასვას */}
        </div>
        <div id="blog-details" className="">
          <h5 className="">{Date.now()}</h5>
          <h5 className="">
            ავტორი: <span>author</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
