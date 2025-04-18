import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import chill1 from "../assets/chill1.png";
import chill2 from "../assets/chill2.png";
import { LiaConnectdevelop } from "react-icons/lia";

const ChillGamer = () => {
  return (
    <div className="">
      <h2 className="bg-primary text-white text-2xl lg:text-4xl py-4 lg:py-7 px-4 md:px-16 uppercase font-light">
        Chill Gamer
      </h2>
      <div className="p-4 lg:p-16 grid grid-cols-1 lg:grid-cols-6 gap-4">
        <div className="lg:col-span-4">
          <div>
            <h1 className="text-2xl mb-4">About Chill Gamer</h1>
            <p className="mb-6">
              Chill Gamer is a user-friendly platform for gamers to explore and
              share reviews of their favorite games. With features like
              authentication, review management, and a clean, responsive design,
              it provides a seamless and enjoyable experience for all users.
              Whether you’re rating your favorite RPG or browsing reviews for
              the latest action game, Chill Gamer has you covered.
            </p>
          </div>
          <img src={chill1} alt="" />
          <img src={chill2} alt="" />
        </div>
        <div className="lg:col-span-2 ">
          <div className="flex gap-4 justify-center my-4 md:my-7">
            <div className="avatar">
              <a
                href="https://github.com/farahsamsi/Chill-Gamer-Client"
                target="blank"
              >
                <div
                  className="text-2xl lg:text-4xl p-4  hover:scale-105 transition ease-in-out bg-primary text-white rounded-full tooltip"
                  data-tip="GitHub Repository"
                >
                  <FaGithub></FaGithub>
                </div>
              </a>
            </div>
            <div className="avatar">
              <a href="https://chill-gamer-main.netlify.app" target="blank">
                <div
                  className="text-2xl lg:text-4xl p-4  hover:scale-105 transition ease-in-out bg-primary text-white rounded-full tooltip"
                  data-tip="Live URL"
                >
                  <FaExternalLinkAlt />
                </div>
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-2xl mb-4">Technologies Used</h1>
            <p className="text-xl flex gap-2 items-center mb-2">
              <LiaConnectdevelop />
              Frontend
            </p>
            <div className="px-8 mb-4">
              <ul className="list-disc">
                <li>React.js</li>
                <li>Tailwind CSS and daisyUI for styling.</li>
                <li>React Router for navigation.</li>
                <li>React-toastify and Sweet Alert for user notifications.</li>
              </ul>
            </div>
            <p className="text-xl flex gap-2 items-center mb-2">
              <LiaConnectdevelop />
              Backend
            </p>
            <div className="px-8 mb-4">
              <ul className="list-disc">
                <li>Node.js and Express.js for the server.</li>
                <li>MongoDB as the database.</li>
              </ul>
            </div>
            <p className="text-xl flex gap-2 items-center mb-2">
              <LiaConnectdevelop />
              Authentication
            </p>
            <div className="px-8 mb-4">
              <ul className="list-disc">
                <li>
                  Firebase Authentication for secure user login and registration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Project Insights
          </h2>

          <h3 className="text-lg font-semibold mt-4">Challenges Faced</h3>
          <p className="text-gray-700">
            During the development of this project, several challenges were
            encountered:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Implementing secure authentication with Firebase and OAuth.</li>
            <li>
              Managing and structuring user-generated game reviews efficiently.
            </li>
            <li>
              Creating a seamless dark/light mode toggle with theme persistence.
            </li>
            <li>
              Optimizing database queries for review filtering and sorting.
            </li>
            <li>Ensuring a fully responsive UI across all devices.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">
            Potential Improvements & Future Plans
          </h3>
          <p className="text-gray-700">
            To enhance the system further, the following improvements are
            planned:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Implementing real-time notifications for new reviews and comments.
            </li>
            <li>Adding a community discussion feature for gamers.</li>
            <li>
              Integrating a recommendation system based on user preferences.
            </li>
            <li>Enhancing security measures with role-based permissions.</li>
            <li>Implementing caching mechanisms for faster data retrieval.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// https://chill-gamer-main.netlify.app/

export default ChillGamer;
