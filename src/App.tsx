import { News , Blogs } from "./components"
import { useState } from "react"

const App:React.FC  = ()=> {
  const[showNews,setShowNews] = useState(true)
  const[showBlogs,setShowBlogs] = useState(false)
  const[blogs,setBlogs] = useState([])

  const updateBlog = (editingBlog,i)=>{
    setBlogs(prevBlogs =>{
      prevBlogs.map((blog,index)=>{
        i===index ? editingBlog: blog
      })
    })
  }
  const addNewBlogs = (newBlog)=>{
    setBlogs(prevBlogs => [...prevBlogs, newBlog])
  }

  const handleShowNews = ()=>{
    setShowNews(true)
    setShowBlogs(false)
  }
  const handleShowBlogs = ()=>{
    setShowNews(false)
    setShowBlogs(true)
  }

  const removePost = (post)=>{
    setBlogs(prevposts => {
      const filtered = prevposts.filter(prevpost => prevpost.title !== post.title)
      return filtered
    })
  }

  return (
    <div className="main-bg w-full h-screen grid place-items-center text-white">
      <div className=" w-[95vw] h-[95vmin] bg-main-bg rounded-xl shadows">
        {showNews && <News onShowBlogs={handleShowBlogs} blogs={blogs} onRemovePost={removePost} onupdatePost={(blogs,index)=>{
          handleShowBlogs()
        }}/>}
        {showBlogs && <Blogs onShowNews={handleShowNews} setBlogs={addNewBlogs} onUpdateBlog={updateBlog} />}
      </div>
    </div>
  )
}

export default App
