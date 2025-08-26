import userImage from "../assets/images/user.jpg";
import bgImage from "../assets/images/bg.jpg";
const Blogs = () => {
  return (
    <div>
      <div
       
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <img
          src={userImage}
          alt="Asad Latif"
          
        />
      </div>
      <div >
        <button >Create a new Post</button>
        <button >
          <span>Back</span>
          <span >
            <i className="bx bx-chevron-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Blogs;
