import { useState } from "react";

const addPost = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const post = { title, author, content };
    // console.log(post);

   try{
    const res = await fetch('/api/blogs', {
        method: 'POST',
        headers : { 'content-type': 'application/json'},
        body: JSON.stringify(post)
    })
    const data = await res.json();
    console.log(data);
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
        <h1 className="flex justify-center text-2xl font-medium my-2">Write Your Blog</h1>
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
            {loading? 'Loading...' : 'Add Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default addPost;
