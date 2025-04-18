import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { LiaConnectdevelop } from "react-icons/lia";
import ridemate1 from "../assets/rideMate1.png";

const RideMate = () => {
  return (
    <div className="">
      <h2 className="bg-primary text-white text-2xl lg:text-4xl py-4 lg:py-7 px-4 md:px-16 uppercase font-light">
        RideMate
      </h2>
      <div className="p-4 lg:p-16 grid grid-cols-1 lg:grid-cols-6 gap-4">
        <div className="lg:col-span-4">
          <div>
            <h1 className="text-2xl mb-4">About RideMate</h1>
            <p className="mb-6">
              RideMate is a feature-rich, user-centric platform designed to
              facilitate seamless car bookings, user authentication, and
              efficient car inventory management. It provides a responsive and
              user-friendly interface for customers to rent cars effortlessly
              while ensuring secure and efficient backend operations.
            </p>
          </div>
          <img src={ridemate1} alt="" />
        </div>
        <div className="lg:col-span-2 ">
          <div className="flex gap-4 justify-center my-4 md:my-7">
            <div className="avatar">
              <a
                href="https://github.com/farahsamsi/RideMate-client"
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
              <a href="https://ride-mate.netlify.app" target="blank">
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
            <li>
              Ensuring smooth authentication using Firebase for email/password
              and Google login.
            </li>
            <li>
              Managing real-time updates for booking availability and user
              actions.
            </li>
            <li>
              Implementing responsive UI with Tailwind CSS and daisyUI for a
              seamless experience.
            </li>
            <li>
              Optimizing search and sorting functionality for car listings.
            </li>
            <li>
              Handling database operations efficiently with MongoDB to track
              bookings and updates.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">
            Potential Improvements & Future Plans
          </h3>
          <p className="text-gray-700">
            To enhance the system further, the following improvements are
            planned:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Adding real-time chat support for customer inquiries.</li>
            <li>
              Enhancing booking management with automated reminders and
              notifications.
            </li>
            <li>Introducing a loyalty program for frequent renters.</li>
            <li>Implementing AI-powered recommendations for car selections.</li>
            <li>Optimizing backend performance with caching mechanisms.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RideMate;
