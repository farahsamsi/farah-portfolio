import AboutMe from "../Sections/AboutMe";
import Banner from "../Sections/Banner";
import Projects from "../Sections/Projects";
import Skills from "../Sections/Skills";

const MainLayout = () => {
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* About me */}
      <AboutMe></AboutMe>
      {/* Skills */}
      <Skills></Skills>
      {/* Education */}
      {/* Projects */}
      <Projects></Projects>
      {/* Contact me */}
    </div>
  );
};

export default MainLayout;
