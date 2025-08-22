import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NewsModal: React.FC = ({ show, article, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="fixed z-50 inset-0 flex justify-center items-center bg-black/60">
      <div className="p-16 shadow-lg w-[90%] max-w-[50rem] h-auto max-h-full relative bg-bg-black-2 rounded-2xl">
        <span className="absolute top-6 right-8 text-2xl text-gray-200 cursor-pointer">
          <FontAwesomeIcon icon={faXmark} onClick={onClose} />
        </span>
        {article && (
          <>
            <img
              src={article.image}
              alt=""
              className="w-full object-cover h-auto max-h-[30rem] border-1 rounded-2xl"
            />
            <h2 className="text-[2rem] font-bold mt-8">
              {article.title}
            </h2>
            <p className="text-xl text-gray-400 mt-4">Source: {article
              .source.name}</p>
            <p className="text-xl text-gray-400 mt-4">{new Date(article.publishedAt).toLocaleString('en-us',{
              month:'short',
              day:'2-digit',
              year:'numeric',
              hour:'2-digit',
              minute:'2-digit'
            })}</p>
            <p className="text-2xl leading-11 mt-8">
             {article.content}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 main-bg text-2xl mt-4 rounded-[5rem] text-center font-semibold w-[15rem] cursor-pointer uppercase active:translate-y-0.5"
            >
              Read More
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsModal;
