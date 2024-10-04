import React, { useContext } from "react";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // Replace this URL with the actual iCloud share link of your resume
  const resumeUrl =
    "https://drive.google.com/file/d/1Rh67Yh7P5UpVkLSbg77LMye44R2r0M-q/view?usp=drive_link";

  return (
    <>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            : { backgroundImage: `url('${cloudDark}')`, backgroundSize: "cover" }
        }
        className="h-screen flex items-center justify-center" // Center content vertically and horizontally
      >
        <main className="flex flex-col items-center text-center">
          <h1 className="text-4xl tracking-tight sm:text-5xl md:text-6xl mb-8 font-sans">
            <motion.span
              className={`block ${darkMode ? "text-black" : "text-white"} mb-4`}
              style={{ 
                fontFamily: "'Poppins', sans-serif", 
                fontWeight: 400, 
                color: '#6082B6' 
              }}
            >
              Hi, I am Varshitha
            </motion.span>
            <span className="block text-[#a6d5cf] text-xxl font-sans">
              <Typical
                steps={[
                  "A Data Engineer",
                  1000,
                  "A Data Analyst",
                  1000,
                  "A BI Developer",
                  1000,
                  "A Designer",
                  1000,
                  "An Idea Builder",
                  1000,
                  "A Problem Solver",
                  1000,
                  "A Developer",
                  1000,
                  "A Programmer",
                  1000,
                  "A Curious Technologist",
                  1000,
                  "A Tech Enthusiast",
                  1000,
                  "A Lifelong Learner",
                  1000,
                ]}
                loop={Infinity}
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 300 }} // Lighter weight for the roles
              />
            </span>
          </h1>

          <div className="flex justify-center mb-8">
            {contactLinks.map((el) => (
              <a
                href={el.link}
                className="mr-5 cursor-pointer hover:scale-125"
                key={el.name}
              >
                <img alt={el.name} src={el.url} />
                {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
              </a>
            ))}
          </div>

          <div className="mt-5">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-pink-200 hover:bg-pink-100 md:py-4 md:text-lg md:px-10"
            >
              Resume
            </a>
          </div>

        </main>
      </div>
    </>
  );
};

export default Home;
