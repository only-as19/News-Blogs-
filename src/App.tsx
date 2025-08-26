import { News , Blogs } from "./components"
import { useState } from "react"

const App:React.FC  = ()=> {
  const[showNews,setShowNews] = useState(true)
  const[showBlogs,setShowBlogs] = useState(true)

  const handleShowNews = ()=>{
    setShowNews(true)
    setShowBlogs(false)
  }
  const handleShowBlogs = ()=>{
    setShowNews(false)
    setShowBlogs(true)
  }

  return (
    <div className="main-bg w-full h-screen grid place-items-center text-white">
      <div className=" w-[95vw] h-[95vmin] bg-main-bg rounded-xl shadows">
        {showNews && <News onShowBlogs={handleShowBlogs} />}
        {showBlogs && <Blogs onShowNews={handleShowNews} />}
      </div>
    </div>
  )
}

export default App
