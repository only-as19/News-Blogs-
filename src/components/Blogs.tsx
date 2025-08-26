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
        {/* <button className="main-bg aspect-4/1 text-3xl rounded-[5rem] font-bold cursor-pointer uppercase text-shadow-2xs active:translate-y-1" style={{width:'clamp(15rem,16cqi,30rem)'}}>Create a new Post</button> */}
        <div className="flex items-center gap-y-20 flex-col">
          <h1 className="uppercase main-bg text-5xl bg-clip-text text-transparent" 
          style={{fontSize: 'clamp(2rem,5cqi,6rem)'}}>New Post</h1>
          <form className="flex flex-col gap-y-12">
            <div>
              <label htmlFor="file-upload"
               className="flex items-center gap-x-4 text-white text-[2rem]">
                <i className="bxr  bx-folder-up-arrow text-5xl"></i> Upload image
              </label>
              <input type="file" id="file-upload" className="hidden" />
            </div>
            <input type="text" placeholder="Add Title ( Max 60 characters)" 
            style={{width:'clamp(15rem,25cqi,45rem)'}}
            className="border-b-2 border-b-[#b88cfe] py-8 text-3xl text-highlight outline-none placeholder:text-2xl placeholder:text-[#b88efc] placeholder:opacity-50 focus:placeholder:opacity-0"/>
            <textarea rows={10} placeholder="Add Text"
            style={{width:'clamp(15rem,25cqi,45rem)'}}
            className="border-b-2 border-b-[#b88cfe] py-8 text-xl text-highlight outline-none
            placeholder:text-xl placeholder:text-[#b88efc] placeholder:opacity-50 focus:placeholder:opacity-0 resize-none"></textarea>
            <button type="submit" className="h-18 text-2xl text-shadow-2xs uppercase tracking-wide font-bold main-bg rounded-[5rem] cursor-pointer active:translate-y-2">Submit</button>
          </form>
        </div>
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
