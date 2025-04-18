import { IoEllipsisVertical } from "react-icons/io5";
import chillGamerAni from "../../public/chillGamer.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import rideMateAni from "../../public/RideMate.json";
import trackAni from "../../public/trackSmart.json";
// import discountProAni from "../../public/discountPro.json";

const Projects = () => {
  return (
    <div id="projects" className="">
      <h1 className="bg-primary text-white text-2xl lg:text-4xl py-4 lg:py-7 px-4 md:px-16 uppercase font-light">
        Projects
      </h1>
      <div className="p-4 lg:p-16 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/trackSmart">
          <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition ease-in-out h-full">
            <figure className="h-48">
              <Lottie animationData={trackAni} />
            </figure>
            <div className="card-body">
              <h2 className="card-title w-full flex justify-between text-2xl text-accent ">
                <h1>TrackSmart</h1>
                <p className="w-fit flex justify-end">
                  <IoEllipsisVertical />
                </p>
              </h2>
              <p className="leading-relaxed">
                TrackSmart is a MERN stack web application built to help
                businesses efficiently manage their assets and products.
              </p>
              <button className="btn bg-primary text-white hover:bg-primary hover:scale-105 transition ease-in-out">
                View More
              </button>
            </div>
          </div>
        </Link>

        <Link to="/chillGamer">
          <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition ease-in-out h-full">
            <figure className="h-48">
              <Lottie animationData={chillGamerAni} />
            </figure>
            <div className="card-body">
              <h2 className="card-title w-full flex justify-between text-2xl text-accent ">
                <h1>Chill Gamer</h1>
                <p className="w-fit flex justify-end">
                  <IoEllipsisVertical />
                </p>
              </h2>
              <p className="leading-relaxed">
                Chill Gamer is a user-friendly platform for gamers to explore
                and share reviews of their favorite games.
              </p>
              <button className="btn bg-primary text-white hover:bg-primary hover:scale-105 transition ease-in-out">
                View More
              </button>
            </div>
          </div>
        </Link>

        <Link to="/rideMate">
          <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition ease-in-out h-full">
            <figure className="h-48">
              <Lottie animationData={rideMateAni} />
            </figure>
            <div className="card-body">
              <h2 className="card-title w-full flex justify-between text-2xl text-accent ">
                <h1>RideMate</h1>
                <p className="w-fit flex justify-end">
                  <IoEllipsisVertical />
                </p>
              </h2>
              <p className="leading-relaxed">
                RideMate is a user-centric platform designed to facilitate
                seamless car bookings and efficient car inventory management.
              </p>
              <button className="btn bg-primary text-white hover:bg-primary hover:scale-105 transition ease-in-out">
                View More
              </button>
            </div>
          </div>
        </Link>

        {/* <Link to="/discountPro">
          <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition ease-in-out">
            <figure className="h-48">
              <Lottie animationData={discountProAni} />
            </figure>
            <div className="card-body">
              <h2 className="card-title w-full flex justify-between text-2xl text-accent ">
                <h1>Discount Pro</h1>
                <p className="w-fit flex justify-end">
                  <IoEllipsisVertical />
                </p>
              </h2>
              <p className="leading-relaxed">
                Discount PRO is a single-page web application that allows users
                to easily find and use discount coupons.
              </p>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Projects;
