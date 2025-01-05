import AboutMe from "../Sections/AboutMe";
import Banner from "../Sections/Banner";
import ContactMe from "../Sections/ContactMe";
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
      <ContactMe></ContactMe>
    </div>
  );
};

export default MainLayout;
