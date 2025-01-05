import htmlImg from "../assets/html5.png";
import cssImg from "../assets/CSS3.png";
import jsImg from "../assets/js.png";
import reactImg from "../assets/reactJs.png";
import tailwindImg from "../assets/tailwindCSS.png";
import daisyUiImg from "../assets/daisyUI.png";
import figmaImg from "../assets/figma.png";
import pixsoImg from "../assets/pixso.png";
import nodeImg from "../assets/nodeJs.png";
import expressImg from "../assets/express.png";
import mongoImg from "../assets/mongoDB.png";
import restAPIImg from "../assets/restAPI.png";
import gitImg from "../assets/git.png";
import npmImg from "../assets/npm.png";
import viteImg from "../assets/vite.png";
import firebaseImg from "../assets/firebase.png";

const Skills = () => {
  return (
    <div id="skills" className="">
      <h1 className="bg-primary text-white text-2xl lg:text-4xl py-4 lg:py-7 px-4 md:px-16 uppercase font-light">
        Skills
      </h1>
      <div className="p-4 lg:p-16 grid lg:grid-cols-2 gap-4">
        {/* frontend */}
        <div className="py-4 lg:py-7 px-4 lg:px-5 border shadow-md mb-3 lg:mb-10">
          <h2 className="text-xl lg:text-3xl font-semibold">
            Frontend Development
          </h2>
          <div className="divider"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              data-aos="flip-left"
              className="flex flex-col items-center gap-3"
            >
              <img src={htmlImg} alt="" />
              <p className="md:text-xl">HTML 5</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src={cssImg} alt="" />
              <p className="md:text-xl">CSS 3</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src={jsImg} alt="" />
              <p className="md:text-xl">JavaScript</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src={reactImg} alt="" />
              <p className="md:text-xl">React JS</p>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="py-4 lg:py-7 px-4 lg:px-5 border shadow-md mb-3 lg:mb-10">
          <h2 className="text-xl lg:text-3xl font-semibold">
            Frameworks and UI Design
          </h2>
          <div className="divider"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center gap-3">
              <img src={tailwindImg} alt="" />
              <p className="md:text-xl">Tailwind CSS</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src={daisyUiImg} alt="" />
              <p className="md:text-xl">daisyUI</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src={figmaImg} alt="" />
              <p className="md:text-xl">Figma</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src={pixsoImg} alt="" />
              <p className="md:text-xl">Pixso</p>
            </div>
          </div>
        </div>

        {/* Backend Basics */}
        <div className="py-4 lg:py-7 px-4 lg:px-5 border shadow-md mb-3 lg:mb-10">
          <h2 className="text-xl lg:text-3xl font-semibold">Backend Basics</h2>
          <div className="divider"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center gap-3">
              <img src={nodeImg} alt="" />
              <p className="md:text-xl">Node JS</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src={expressImg} alt="" />
              <p className="md:text-xl">Express JS</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src={mongoImg} alt="" />
              <p className="md:text-xl">MongoDB </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src={restAPIImg} alt="" />
              <p className="md:text-xl">Rest APIs</p>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="py-4 lg:py-7 px-4 lg:px-5 border shadow-md mb-3 lg:mb-10">
          <h2 className="text-xl lg:text-3xl font-semibold">
            Tools & Technologies
          </h2>
          <div className="divider"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center gap-3">
              <img src={gitImg} alt="" />
              <p className="md:text-xl">Git</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src={npmImg} alt="" />
              <p className="md:text-xl">NPM</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src={viteImg} alt="" />
              <p className="md:text-xl">VITE</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src={firebaseImg} alt="" />
              <p className="md:text-xl">Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
