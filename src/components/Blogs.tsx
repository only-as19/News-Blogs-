import userImage from "../assets/images/user.jpg";
import bgImage from "../assets/images/bg.jpg";
import noImage from "../assets/images/no-img.png";

import { useState } from "react";
const Blogs = ({ onShowNews, setBlogs }) => {
  const [showPostForm, setShowForm] = useState(false);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      image: image || noImage,
      title,
      content,
    };
    setBlogs(newBlog);
    setImage(null);
    setTitle("");
    setContent("");
    setShowForm(false);
  };

  return (
    <div className="flex w-full h-full">
      <div
        className={`w-1/2 h-full')] bg-cover bg-no-repeat bg-main rounded-l-2xl relative `}
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <img
          src={userImage}
          alt="Asad Latif"
          className="aspect-square w-52 object-cover rounded-full absolute top-1/2 -translate-y-1/2 -right-22 border-4 border-[#b88efc]"
        />
      </div>
      <div className="w-1/2 h-full flex justify-center items-center relative">
        {showPostForm ? (
          <div className="flex items-center gap-y-20 flex-col">
            <h1
              className="uppercase main-bg text-5xl bg-clip-text text-transparent"
              style={{ fontSize: "clamp(2rem,5cqi,6rem)" }}
            >
              New Post
            </h1>
            <form className="flex flex-col gap-y-12" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="file-upload"
                  className="flex items-center gap-x-4 text-white text-[2rem]"
                >
                  <i className="bxr  bx-folder-up-arrow text-5xl cursor-pointer"></i>{" "}
                  Upload image
                </label>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
              <input
                type="text"
                placeholder="Add Title ( Max 60 characters)"
                style={{ width: "clamp(15rem,25cqi,45rem)" }}
                className="border-b-2 border-b-[#b88cfe] py-8 text-3xl text-highlight outline-none placeholder:text-2xl placeholder:text-[#b88efc] placeholder:opacity-50 focus:placeholder:opacity-0"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Add Text"
                style={{ width: "clamp(15rem,25cqi,45rem)" }}
                className="border-b-2 border-b-[#b88cfe] py-8 text-xl text-highlight outline-none
            placeholder:text-xl placeholder:text-[#b88efc] placeholder:opacity-50 focus:placeholder:opacity-0 resize-none"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="h-18 text-2xl text-shadow-2xs uppercase tracking-wide font-bold main-bg rounded-[5rem] cursor-pointer active:translate-y-2"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <button
            className="main-bg aspect-4/1 text-3xl rounded-[5rem] font-bold cursor-pointer uppercase text-shadow-2xs active:translate-y-1"
            style={{ width: "clamp(15rem,16cqi,30rem)" }}
            onClick={() => setShowForm(true)}
          >
            Create a new Post
          </button>
        )}

        <button
          className="absolute top-12 right-10 flex justify-center items-center text-5xl cursor-pointer"
          onClick={onShowNews}
        >
          <span>Back</span>
          <span className="flex items-center">
            <i className="bx bx-chevron-right text-6xl"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Blogs;
