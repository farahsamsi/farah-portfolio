import { IoMail, IoMenuSharp } from "react-icons/io5";
import profileImg from "../assets/photoFarah.jpg";
import { Link, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";
import { GrProjects } from "react-icons/gr";

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <div>
          <div className="flex items-center justify-between  sticky top-0 px-7 my-4 bg-white backdrop-blur z-10 lg:hidden">
            <div className="flex-1 flex flex-col items-center">
              <h1 className="text-xl font-semibold text-primary">
                Farah Samsi Prome
              </h1>
              <p>Frontend Developer</p>
            </div>
            <label
              htmlFor="my-drawer-2"
              className=" drawer-button text-4xl  text-primary  lg:hidden"
            >
              <IoMenuSharp />
            </label>
          </div>
          <div className="">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <div className="drawer-side w-1/2 z-50">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-full p-4 ">
          {/* Sidebar content here */}
          <div className="flex items-center justify-center">
            <div className="avatar">
              <div className="ring-accent ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src={profileImg} alt="Farah" />
              </div>
            </div>
          </div>
          <div className="divider"></div>

          <Link to="/" onClick={() => handleScroll("aboutMe")}>
            <li className=" flex flex-row items-center ">
              <div className="w-full">
                <span className="text-primary text-xl mr-3">
                  <FaUser />
                </span>
                About
              </div>
            </li>
          </Link>

          <Link to="/" onClick={() => handleScroll("skills")}>
            <li className=" flex flex-row items-center">
              <div className="w-full">
                <span className="text-primary text-xl mr-3">
                  <SiHyperskill />
                </span>
                Skills
              </div>
            </li>
          </Link>

          <Link to="/" onClick={() => handleScroll("projects")}>
            <li className=" flex flex-row items-center">
              <div className="w-full">
                <span className="text-primary text-xl mr-3">
                  <GrProjects />
                </span>
                Projects
              </div>
            </li>
          </Link>

          <Link to="/" onClick={() => handleScroll("contactMe")}>
            <li className=" flex flex-row items-center">
              <div className="w-full">
                <span className="text-primary text-xl mr-3">
                  <IoMail />
                </span>
                Contact Me
              </div>
            </li>
          </Link>

          <a
            href="/Farah_Resume.pdf"
            download="Farah_Resume.pdf"
            className="btn btn-outline border-none  text-primary "
          >
            Download Resume
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
