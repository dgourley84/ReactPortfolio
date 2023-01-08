import { motion } from "framer-motion";
import TextEditorProjectImage from "../assets/TextEditorProject.png"

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

const ProjectOne = ({ title }) => {

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">Text Editor Project</p>
        <p className="mt-7">
            This app is an online text editor that allows programmers to write code snippets in the browser and store them for later.
        </p>
      </div>
      <img src={TextEditorProjectImage} alt="TextEditorProject" />
    </motion.div>
  );
};

const ProjectTwo = ({ title }) => {
  
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">Text Editor Project</p>
        <p className="mt-7">
            This app is an online text editor that allows programmers to write code snippets in the browser and store them for later.
        </p>
      </div>
      <img src={TextEditorProjectImage} alt="TextEditorProject" />
    </motion.div>
  );
};

export {ProjectOne, ProjectTwo};
