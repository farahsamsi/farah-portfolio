import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const AboutMe = () => {
  return (
    <div id="aboutMe" className="">
      <h2 className="bg-primary text-white text-2xl lg:text-4xl py-4 lg:py-7 px-4 md:px-16 uppercase font-light">
        About Me
      </h2>
      <div className="p-4 lg:p-16 grid grid-cols-1 lg:grid-cols-6">
        <p className="text-2xl leading-relaxed lg:col-span-4">
          Hey there! I’m Farah, a frontend web developer who loves creating
          beautiful and functional websites. I’m all about crafting
          user-friendly designs and writing clean, efficient code that brings
          ideas to life. When I’m not coding, you’ll probably find me with a
          sketchbook in hand, lost in drawing or painting. It’s my way of
          staying creative and relaxed! <br />
          Beyond coding, I find joy in exploring new ideas, immersing myself in
          books, and dreaming of living inside a library! Let&apos;s connect and
          collaborate to create something extraordinary.
        </p>
        <div className="col-span-2 hidden lg:flex">
          <div className="w-2/3 mx-auto">
            <Carousel autoPlay="true" infiniteLoop="true">
              <div>
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/100/external-programmer-digital-nomad-tulpahn-outline-color-tulpahn.png"
                  alt="external-programmer-digital-nomad-tulpahn-outline-color-tulpahn"
                />
              </div>
              <div>
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/doodle/100/books.png"
                  alt="books"
                />
              </div>
              <div>
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/color/100/microsoft-paint.png"
                  alt="microsoft-paint"
                />
              </div>
              <div>
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/100/external-web-design-digital-nomad-tulpahn-outline-color-tulpahn.png"
                  alt="external-web-design-digital-nomad-tulpahn-outline-color-tulpahn"
                />
              </div>
              <div>
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/external-microdots-premium-microdot-graphic/100/external-calligraphy-chinese-new-year-microdots-premium-microdot-graphic.png"
                  alt="external-calligraphy-chinese-new-year-microdots-premium-microdot-graphic"
                />
              </div>
              <div>
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/clouds/100/book-shelf.png"
                  alt="book-shelf"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
