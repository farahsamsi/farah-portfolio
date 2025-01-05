import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { LiaConnectdevelop } from "react-icons/lia";
import discount1 from "../assets/discount1.png";

const DiscountPro = () => {
  return (
    <div className="">
      <h2 className="bg-primary text-white text-2xl lg:text-4xl py-4 lg:py-7 px-4 md:px-16 uppercase font-light">
        Discount Pro
      </h2>
      <div className="p-4 lg:p-16 grid grid-cols-1 lg:grid-cols-6 gap-4">
        <div className="lg:col-span-4">
          <div>
            <h1 className="text-2xl mb-4">About Discount Pro</h1>
            <p className="mb-6">
              Discount PRO is a single-page web application that allows users to
              easily find and use discount coupons for popular e-commerce stores
              in Bangladesh. The platform gathers discount offers from various
              brands, making it simple for users to save money while shopping
              online. The application includes user authentication, brand and
              coupon management, and interactive features like copying coupon
              codes and redirection to store pages.
            </p>
          </div>
          <img src={discount1} alt="" />
        </div>
        <div className="lg:col-span-2 ">
          <div className="flex gap-4 justify-center my-4 md:my-7">
            <div className="avatar">
              <a
                href="https://github.com/farahsamsi/Discount-Pro-client"
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
              <a href="https://discount-pro-9e7a5.web.app" target="blank">
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
    </div>
  );
};

export default DiscountPro;
