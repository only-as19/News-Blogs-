import userImage from "../assets/images/user.jpg";
import bgImage from "../assets/images/bg.jpg";
const Blogs = () => {
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
        <button className="main-bg aspect-4/1 text-3xl rounded-[5rem] font-bold cursor-pointer uppercase text-shadow-2xs active:translate-y-1" style={{width:'clamp(15rem,16cqi,30rem)'}}>Create a new Post</button>
        <button className="absolute top-12 right-10 flex justify-center items-center text-5xl cursor-pointer">
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
