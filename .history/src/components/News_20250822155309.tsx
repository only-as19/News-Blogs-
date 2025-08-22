import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Weather, Calender,Modal,BookMark } from "./index";
import { faSearch, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as BookmarkRegular } from "@fortawesome/free-regular-svg-icons";

import userImage from "../assets/images/user.jpg";
import noImage from "../assets/images/no-img.png"
import axios from "axios";
import { useState,useEffect } from "react";

const categories = ["general","world","business","technology","entertainment","sports","science","health","nation"
]

const News: React.FC = () => {
  const[headline,setHeadline] = useState(null)
  const [news, setNews] = useState([])
  const [selecetedCategory, setSelecetedCategory] = useState("general")
  const [searchInput, setSearchInput] = useState('')
  const [searchQuery, serSearchQuery] = useState('')
  const [showModal,setShowModal] = useState(false)
  const [selecetedArticle,setSelecetedArticle] = useState(null)
  const [bookmark, setBookmark] = useState([])
  const [showBookmark, setShowBookmark] = useState(false)

  useEffect(() => {
    const fetchNews = async()=>{
      let url = `https://gnews.io/api/v4/top-headlines?category=${selecetedCategory}&lang=en&apikey=61b3b5fe34ff38b97deef3de94b6590c `

      if(searchQuery){
        url = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&apikey=61b3b5fe34ff38b97deef3de94b6590c `
      }

      const response = await axios.get(url)

      const fetchedNews = response.data.articles

      fetchedNews.forEach(article => {
        if(!article.image){
          article.image = noImage
        }
      });

      setHeadline(fetchedNews[0])

      setNews(fetchedNews.slice(1,7))


      
    }

    fetchNews()
  }, [selecetedCategory,searchQuery])

  const handleCategoryClick = (e,category)=>{
    e.preventDefault()
    setSelecetedCategory(category)

  }
  
  const handleSearch = (e)=> {
    e.preventDefault()
    serSearchQuery(searchInput)
    setSearchInput("")
  }

  const handleArticleClick = (article)=>{
    setSelecetedArticle(article)
    setShowModal(true)
  }

  return (
    <div className="text-regular h-full w-full flex flex-col justify-between gap-y-8">
      <header className="w-full min-h-28 bg-bg-black-2 rounded-t-2xl flex justify-between px-16 items-center">
        <h1 className="text-[5rem] tracking-tight">NEWS & BLOGS</h1>
        <div className="relative">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search news...."
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              className="bg-[#060709] w-100 h-16 border-none rounded-[4rem] pl-8 outline-none pr-16 focus:w-140 focus:placeholder-transparent transition-all duration-500 text-gray-200"
            />
            <button type="submit" className="absolute text-3xl top-1/2 -translate-y-1/2 right-4 cursor-pointer">
              {" "}
              <FontAwesomeIcon icon={faSearch} />{" "}
            </button>
          </form>
        </div>
      </header>
      <div className="h-[calc(100%-16rem)]  flex gap-x-8 px-8">
        <div className="w-68 h-full flex flex-col gap-y-8 ">
          <div className="w-full h-1/5 bg-bg-black-2 rounded-2xl flex justify-center items-center flex-col gap-2 cursor-pointer">
            <img
              src={userImage}
              alt=""
              className="w-20 object-cover rounded-[50%] aspect-1/1"
            />
            <p className="text-xl text-gray-200">Asad's Blog</p>
          </div>
          <nav className="w-full h-[calc(80%-2rem)] bg-bg-black-2 rounded-2xl flex flex-col gap-y-8 p-6">
            <h1
              className="text-gray-200  text-4xl font-bold"
              style={{ fontSize: "clamp(1.2rem,2.2cqi,2.7rem)" }}
            >
              Categories
            </h1>
            <div className="flex flex-col gap-y-8">
              {categories.map((category,index)=>(
                <a
                href="#"
                className="text-[1rem] font-semibold uppercase tracking-[0.1rem]"
                key={index}
                onClick={(e)=>handleCategoryClick(e,category)}
              >
                {category}
              </a>
              ))}
              
              <a
                href="#"
                className="text-[1rem] font-semibold uppercase tracking-[0.1rem]"
                onClick={()=>setShowBookmark(true)}
              >
                Bookmarks
                {bookmark.length === 0 ? <FontAwesomeIcon icon={BookmarkRegular} className="text-2xl" /> : <FontAwesomeIcon icon={faBookmark} className="text-2xl" />}
              </a>
            </div>
          </nav>
        </div>
        <div
          style={{ width: "clamp(30rem, 43cqi, 40%)" }}
          className="h-full rounded-2xl"
        >
          {headline && (
            <div className="w-full h-[calc(50%-2rem)] bg-bg-black-2 rounded-2xl mb-8 relative"
            onClick={() => handleArticleClick(headline)}>
            <img
              src={headline.image || noImage}
              alt={headline.title}
              className="h-full w-full object-cover rounded-2xl opacity-40"
            />
            <h2
              style={{ fontSize: "clamp(1rem,2cqi,2.5rem)" }}
              className="absolute w-full
             left-0 bottom-0 font-bold py-4 pr-12 pl-4 bg-black/25 text-gray-200 rounded-2xl"
            >
              {headline.title}
              <FontAwesomeIcon
                icon={faBookmark}
                className="absolute bottom-3 right-3 cursor-pointer"
              />
            </h2>
          </div>
          )}
          <div className="h-1/2 w-full bg-bg-black-2 rounded-2xl grid grid-cols-3 grid-rows-2 gap-4 p-4 place-items-center">
            {news.map((article,index)=>{
              return (
                 <div key={index} className="h-full w-full min-h-60 rounded-2xl relative "
                 onClick={() => handleArticleClick(headline)}>
              <img
                src={article.image || noImage}
                alt=""
                className="h-full w-full block object-cover rounded-2xl"
              />
              <h3 className="absolute bottom-0 left-0 py-4 pr-10 pl-4 text-lg font-bold bg-black/70">
                {article.title}
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="absolute bottom-3 right-3 cursor-pointer"
                />
              </h3>
            </div>
              )
            })}
            
          </div>
        </div>
        <Modal show={showModal} article={selecetedArticle} onClose={()=> setShowModal(false)} />
          <BookMark show={showBookmark} article={selecetedArticle} onClose={()=> setShowBookmark(false)}/>
        <div
          className="h-full bg-bg-black-2 rounded-2xl"
          style={{ width: "clamp(20rem,27cqi,28%)" }}
        >
          Blogs
        </div>
        <div className="flex-1 flex flex-col gap-y-8">
          <Weather />
          <Calender />
        </div>
      </div>
      <footer className="bg-bg-black-2 min-h-20 rounded-b-2xl">Footer</footer>
    </div>
  );
};

export default News;
