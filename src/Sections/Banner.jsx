import githubImg from "../assets/icons8-github-64.png";
import linkedinImg from "../assets/icons8-linkedin-64.png";
const Banner = () => {
  return (
    <div className=" bg-accent">
      <div className="p-4 md:p-16 text-white">
        <h1 className="text-3xl lg:text-6xl">
          Hi, I&apos;m <span className="bg-primary"> Farah Samsi Prome </span>
        </h1>
        <p className="mt-5 lg:mt-10 mb-5 text-2xl lg:text-4xl">
          Frontend Web Developer
        </p>
        <p className="mt-10 mb-5 text-xl lg:text-3xl">Type Writer</p>
        <p className="lg:text-2xl font-light drop-shadow-xl mb-6">
          Passionate about creating user-friendly, visually stunning, and
          responsive websites. I specialize in translating ideas into digital
          experiences with clean code and modern design principles. Let&apos;s
          build something amazing together!
        </p>
        <div className="flex gap-4">
          <div className="avatar">
            <a href="https://github.com/farahsamsi" target="blank">
              <div className="w-14 p-2 hover:bg-white/50 hover:scale-105 transition ease-in-out bg-white rounded-full">
                <img src={githubImg} />
              </div>
            </a>
          </div>
          <div className="avatar">
            <a href="https://github.com/farahsamsi" target="blank">
              <div className="w-14 p-2 hover:bg-white/50 hover:scale-105 transition ease-in-out bg-white rounded-full">
                <img src={linkedinImg} />
              </div>
            </a>
          </div>
        </div>
        <div className="mt-8 flex gap-5">
          <button className="btn btn-outline border-none bg-white text-primary  hover:scale-105 transition ease-in-out">
            Download Resume
          </button>
          <button className="btn btn-outline text-white hover:scale-105 transition ease-in-out">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
