import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { LiaConnectdevelop } from "react-icons/lia";
import trackImg from "../assets/trackSmart.png";

const TrackSmart = () => {
  return (
    <div className="">
      <h2 className="bg-primary text-white text-2xl lg:text-4xl py-4 lg:py-7 px-4 md:px-16 uppercase font-light">
        TrackSmart
      </h2>
      <div className="p-4 lg:p-16 grid grid-cols-1 lg:grid-cols-6 gap-4">
        <div className="lg:col-span-4">
          <div>
            <h1 className="text-2xl mb-4">About TrackSmart</h1>
            <p className="mb-6">
              This project is a MERN stack web application built to help
              businesses efficiently manage their assets and products. The
              system is designed to enable HR Managers and employees to track
              and manage company assets, ensuring smooth operations and better
              asset utilization.
            </p>
          </div>
          <img src={trackImg} alt="" />
        </div>
        <div className="lg:col-span-2 ">
          <div className="flex gap-4 justify-center my-4 md:my-7">
            <div className="avatar">
              <a
                href="https://github.com/farahsamsi/TrackSmart-Client"
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
              <a href="https://tracksmart-466af.web.app" target="blank">
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
            <li>JWT Authentication Implementation</li>
            <li>Role-Based Access Control</li>
            <li>Data Visualization with Chart.js</li>
            <li>Stripe Payment Integration</li>
            <li>Responsive UI with Tailwind CSS and DaisyUI</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">
            Potential Improvements & Future Plans
          </h3>
          <p className="text-gray-700">
            To enhance the system further, the following improvements are
            planned:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Real-time Notifications with WebSockets</li>
            <li>Advanced Search with Elasticsearch</li>
            <li>More Interactive Data Visualization</li>
            <li>Automated Testing with Jest & Cypress</li>
            <li>Performance Optimization and Caching</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrackSmart;
