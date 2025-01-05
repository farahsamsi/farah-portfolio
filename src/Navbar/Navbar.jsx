import { IoMenuSharp } from "react-icons/io5";
import profileImg from "../assets/photoFarah.jpg";
import { Link, Outlet } from "react-router-dom";

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

          <li>
            <Link to="/" onClick={() => handleScroll("aboutMe")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleScroll("skills")}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleScroll("projects")}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleScroll("contactMe")}>
              Contact Me
            </Link>
          </li>

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
