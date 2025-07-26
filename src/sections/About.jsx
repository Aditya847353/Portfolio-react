import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";
import { AnimatePresence, motion } from "motion/react";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Aditya Kumar</p>
            <p className="subtext">
              Currently pursuing my B.Tech in Information Technology at NIT Jalandhar.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              BUILD WITH PURPOSE
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Efficiency"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="MODULAR"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/node-js-svgrepo-com.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in India, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />

            {/* ✅ Download Resume Button */}
            <motion.a
              href="/assets/Aditya_Resume.pdf"
              download
              whileHover={{ y: -5 }}
              whileTap={{ scale: 1.05 }}
              className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden flex items-center justify-center gap-2"
            >
              <img src="assets/arrow-right.svg" className="w-5 rotate-90" alt="download icon" />
              Download Resume
            </motion.a>
          </div>
        </div>
        {/* Grid 5 */}
          <div className="grid-default-color grid-5 relative z-0">
            <div className="z-10 md:w-[50%]">
              <p className="headText mb-3 md:mb-4 text-xl">Skills</p>
              <ul className=" z-20 list-disc list-inside text-gray-300 space-y-1 text-xs w-full md:text-sm ">
                <li><strong>Languages:</strong> C, C++, JavaScript, HTML, CSS, SQL</li>
                <li><strong>Frontend:</strong> React.js, Tailwind CSS</li>
                <li><strong>Backend:</strong> Node.js, Express.js, REST APIs</li>
                <li><strong>Database:</strong> MongoDB</li>
                <li><strong>Tools:</strong> Git, GitHub, Postman, VS Code, NPM, Render</li>
                <li><strong>Data Structures and Algorithms</strong></li>
                <li><strong>Other Skills:</strong> Deployment, Debugging</li>

              </ul>
            </div>

          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 -z-1">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
