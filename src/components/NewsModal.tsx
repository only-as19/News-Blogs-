import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import demoImage from "../assets/images/demo.jpg";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NewsModal: React.FC = ({show,article,onClose}) => {
    if(!show){
        return null
    }
  return (
    <div className="fixed z-50 inset-0 flex justify-center items-center bg-black/60">
      <div className="p-16 shadow-lg w-[90%] max-w-[50rem] h-auto max-h-full relative bg-bg-black-2 rounded-2xl">
        <span className="absolute top-6 right-8 text-2xl text-gray-200 cursor-pointer">
          <FontAwesomeIcon icon={faXmark} onClick={onClose}/>
        </span>
        
        <img src={demoImage} alt="" className="w-full object-cover h-auto max-h-[30rem] border-1 rounded-2xl"/>
        <h2 className="text-[2rem] font-bold mt-8">Title: Lorem ipsum dolor sit amet.</h2>
        <p className="text-xl text-gray-400 mt-4">Source: Asad</p>
        <p className="text-xl text-gray-400 mt-4">Date: 12 Aug 2025</p>
        <p className="text-2xl leading-11 mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          laboriosam. Dolor possimus laudantium impedit rerum iste repudiandae,
          tempore libero quae quos doloremque adipisci minus eos!
        </p>
        <a href="#" className="inline-block px-8 py-4 main-bg text-2xl mt-4 rounded-[5rem] text-center font-semibold w-[15rem] cursor-pointer uppercase active:translate-y-0.5" >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsModal;
