import {
  FaGoogle,
  FaInstagram,
  FaGithub,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

import qz1 from "../../../assets/qZone1.png";
import qz2 from "../../../assets/qZone2.png";
import qz3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="space-y-4 p-4">
        <h2 className="text3xl">Login With</h2>

        <button className="btn btn-outline w-full">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Github
        </button>
      </div>
      <div className=" p-4 mb-6">
        <h2 className="text3xl mb-4">Find us on</h2>
        <a className="flex items-center border p-4 rounded-t-lg" href="#">
          <FaFacebookF className="mr-2" />
          <span> Facebook</span>
        </a>
        <a className="flex items-center border-x-2  p-4 " href="#">
          <FaTwitter className="mr-2" />
          <span>Twitter</span>
        </a>
        <a className="flex items-center border p-4 rounded-b-lg" href="#">
          <FaInstagram className="mr-2" />
          <span> Instagram</span>
        </a>
      </div>
      {/* q zone */}
      <div className="space-y-4 p-7 bg-[#F3F3F3] ">
        <h2 className="text3xl">Q-Zone</h2>
        <img src={qz1} alt="" />
        <img src={qz2} alt="" />
        <img src={qz3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
