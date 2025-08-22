import {faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import demoImage from '../assets/images/demo.jpg'
const Bookmarks = ({show,onClose,Bookmark,DeleteBookmark}) => {
  if(!show){
    return null
  }
  return (
    
       <div className="fixed z-50 inset-0 flex justify-center items-center bg-black/60">
            <div className="p-16 shadow-lg w-[90%] max-w-[50rem] h-auto max-h-full relative bg-bg-black-2 rounded-2xl">
              <span className="absolute top-6 right-8 text-2xl text-gray-200 cursor-pointer"
              onClick={onClose}>
                <FontAwesomeIcon icon={faXmark} />
              </span>
                <h2 className="text-6xl font-bold  mb-8 text-gray-200">Bookmarked News</h2>
              {if()}
              
            </div>
          </div>
  )
}

export default Bookmarks
