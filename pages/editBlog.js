import dbConnect from "@/lib/db_config";
import { ObjectId } from "mongodb";
import { useRouter } from "next/router";
import { useState } from "react";

const editBlog = ({post}) => {
  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [content, setContent] = useState(post.content);
  const [loading, setLoading] = useState(false);


  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const UpdatedPost = { title, author, content };
    // console.log(UpdatedPost);

   try{
    const res = await fetch(`/api/blogs?id=${post._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(UpdatedPost)
    })
    const data = await res.json();
    console.log(data);
    if(data.acknowledged === true) {
        router.push('/blog')
    }

   }
   catch(err) {
    console.log(err);
   }
   finally {
    setLoading(false);
   }
  };
  return (
    <div>
        <h1 className="flex justify-center text-2xl font-medium my-2">Edit Your Blog</h1>
      <div className="flex items-center justify-center text-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-lg p-12 border rounded-xl shadow-lg"
        >
          <label className="self-start text-xs font-semibold">Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            value={title}
            className="border flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri focus:ri"
          />

          <label className="self-start mt-3 text-xs font-semibold">
            Author
          </label>
          <input
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            name="author"
            value={author}
            className="border flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri focus:ri"
          />

          <label className="self-start mt-3 text-xs font-semibold">
            Content
          </label>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            name="content"
            value={content}
            className="border w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
            spellcheck="false"
          ></textarea>

          <button
            type="submit"
            disabled = {loading === true}
            className="flex bg-green-500 w-full items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded"
          >
            {loading? 'Loading...' : 'Update Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default editBlog;




export const getServerSideProps = async(ctx) => {

    const id = ctx.query.id;
    console.log(id);


    const client = await dbConnect();
    const db = client.db("Next_Hello");

    const blogCollection = db.collection("blogs");


    const result = await blogCollection.findOne({_id: new ObjectId(id)});

    const blog = JSON.parse(JSON.stringify(result));

    return {
        props : {post : blog},
    }

}
