import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_l0j6ipg", "template_m77k2b4", form.current, {
        publicKey: "j7_dWHSJsCz38VX9L",
      })
      .then(
        () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message has been sent.",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contactMe" className="">
      <h1 className="bg-primary text-white text-2xl lg:text-4xl py-4 lg:py-7 px-4 md:px-16 uppercase font-light">
        Contact me
      </h1>
      <div className="p-4 lg:p-16 grid lg:grid-cols-2 gap-4 ">
        {/* contact info */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col space-y-4">
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="bg-gray-300 rounded-full p-3">
                <FaPhone className="text-primary text-lg" />
              </div>
              <a
                href="tel:+8801717731747"
                target="blank"
                className="text-gray-800 hover:underline"
              >
                +8801717731747
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="bg-gray-300 rounded-full p-3">
                <FaEnvelope className="text-primary text-lg" />
              </div>
              <a
                href="mailto:samsiprome1@gmail.com"
                target="blank"
                className="text-gray-800 hover:underline"
              >
                samsiprome1@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-4">
              <div className="bg-gray-300 rounded-full p-3">
                <FaMapMarkerAlt className="text-primary text-lg" />
              </div>
              <a
                href=""
                target="blank"
                className="text-gray-800 hover:underline"
              >
                Dhaka, Bangladesh
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center space-x-4">
              <div className="bg-gray-300 rounded-full p-3">
                <FaGithub className="text-primary text-lg" />
              </div>
              <a
                href="https://github.com/farahsamsi"
                target="blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:underline"
              >
                https://github.com/farahsamsi
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-4">
              <div className="bg-gray-300 rounded-full p-3">
                <FaLinkedin className="text-primary text-lg" />
              </div>
              <a
                href="https://www.linkedin.com/in/farah-samsi/"
                target="blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:underline"
              >
                www.linkedin.com/in/farah-samsi
              </a>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" shadow-md p-6 rounded-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Send Me a Message</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="from_name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="reply_to"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="4"
                name="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <input
              type="submit"
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition cursor-pointer"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
