import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Blog = ({ posts }) => {
    const router = useRouter()



    const handleDeleteBlog = async(data) => {

        const id = data._id
        try{
            const res = await fetch(`/api/blogs?id=${id}`, {
                method: 'Delete',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(id)
            })
            const data = await res.json();
            console.log(data);
            
           }
           catch(err) {
            console.log(err);
           }
           finally {
            // setLoading(false);
           }
    }
    return (
    <div>
        <h1 className="text-center font-semibold text-2xl">Blog Page</h1>

        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">

            <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                <p className="font-serif text-sm dark:text-gray-400">
                Qualisque erroribus usu at, duo te agam soluta mucius.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, idx) => (
                <div
                    key={idx}
                    className="flex flex-col dark:bg-gray-900 bg-gray-100"
                >
                    <div className=" flex justify-end">
                            <button onClick={() => router.push(`/editBlog?id=${post._id}`)} className="mx-3 text-blue-500">
                                edit
                            </button>
                            <button onClick={()=> handleDeleteBlog(post)} className="mx-3 text-red-500">
                                Delete
                            </button>
                        </div>
                    <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src="https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
                    />
                    <div className="flex flex-col flex-1 p-6">
                    <Link
                        href={`/blog/${post?._id}`}
                        className="flex-1 py-2 text-lg font-semibold leading-snug"
                    >
                        
                    {post?.title}
                    </Link>
                    <p>{post?.content}</p>
                    {/* <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                        <span>June 1, 2020</span>
                        <span>2.1K views</span>
                    </div> */}
                    </div>
                </div>
                ))}
            </div>

            </div>
        </section>
    </div>
  );
};

export default Blog;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/blogs");
  const posts = await res.json();

  return { props: { posts } };
}
