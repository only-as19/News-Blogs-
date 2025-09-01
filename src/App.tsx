import { News , Blogs } from "./components"
import { useState } from "react"

interface Blog {
  title: string;
  image?: string;
  content?:string;
}
type BlogWithIndex = Blog & { index: number };

const App:React.FC  = ()=> {
  const[showNews,setShowNews] = useState<boolean>(true)
  const[showBlogs,setShowBlogs] = useState<boolean>(false)
  const[blogs,setBlogs] = useState<Blog[]>([])
 const [editingBlog, setEditingBlog] = useState<BlogWithIndex | null>(null);

  const updateBlog = (editingBlog:Blog,i:number)=>{
    setBlogs(prevBlogs =>
      prevBlogs.map((blog,index)=>
        i===index ? editingBlog: blog
      )
    )
  }
  const addNewBlogs = (newBlog:Blog)=>{
    setBlogs(prevBlogs => [...prevBlogs, newBlog])
  }

  const handleShowNews = ()=>{
    setShowNews(true)
    setShowBlogs(false)
  }

  const handleEditing = (blog: Blog, index: number) => {
  setEditingBlog({ ...blog, index }); // ✅ CORRECT
  setShowNews(false);
  setShowBlogs(true);
};

  const clearEditPost = ()=>{
    setEditingBlog(null)
  }

  const handleShowBlogs = ()=>{
    setShowNews(false)
    setShowBlogs(true)
  }

  const removePost = (post:Blog)=>{
    setBlogs(prevposts => {
      const filtered = prevposts.filter(prevpost => prevpost.title !== post.title)
      return filtered
    })
  }

  return (
    <div className="main-bg w-full h-screen grid place-items-center text-white">
      <div className=" w-[95vw] h-[95vmin] bg-main-bg rounded-xl shadows">
        {showNews && <News onShowBlogs={handleShowBlogs} blogs={blogs} onRemovePost={removePost} onUpdatePost={handleEditing}/>}
        {showBlogs && <Blogs onShowNews={handleShowNews} setBlogs={addNewBlogs} onUpdateBlog={updateBlog} editingBlog={editingBlog} onClearBlog={clearEditPost} />}
      </div>
    </div>
  )
}

export default App
