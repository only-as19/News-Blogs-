import {faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import demoImage from '../assets/images/demo.jpg'
const Bookmarks = () => {
  return (
    
       <div className="fixed z-50 inset-0 flex justify-center items-center bg-black/60">
            <div className="p-16 shadow-lg w-[90%] max-w-[50rem] h-auto max-h-full relative bg-bg-black-2 rounded-2xl">
              <span className="absolute top-6 right-8 text-2xl text-gray-200 cursor-pointer">
                <FontAwesomeIcon icon={faXmark} />
              </span>
              <h2>Bookmarked News</h2>
              <div>
                <div>
                    <img src={demoImage} alt="" 
                    className=""/>
                    <h3>
                        Lorem ipsum dolor sit.
                    </h3>
                    <span>
                        <FontAwesomeIcon icon={faCircleXmark} className="text-[#74C0FC]"/>
                    </span>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Bookmarks
