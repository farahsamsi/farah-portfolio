const Education = () => {
  return (
    <div id="education" className="">
      <h2 className="bg-primary text-white text-2xl lg:text-4xl py-4 lg:py-7 px-4 md:px-16 uppercase font-light">
        Education
      </h2>
      <div className="p-4 lg:p-16 ">
        <div className="card bg-base-100 shadow-lg border border-gray-200 p-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-teal-600 flex items-center gap-2">
            KHULNA UNIVERSITY OF ENGINEERING AND TECHNOLOGY
          </h2>
          <p className="text-gray-600">Khulna, Bangladesh</p>

          <div className="mt-4">
            <p className="font-semibold">
              <span className="font-bold">Degree:</span> Bachelor of Science in
              Materials Science and Engineering
            </p>
            <p className="font-semibold">
              <span className="font-bold">CGPA:</span> 3.56/4.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
