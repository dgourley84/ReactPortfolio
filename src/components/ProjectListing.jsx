import { motion } from "framer-motion";

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;


const Project = (props) => {
  
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{props.title}</p>
        <p className="mt-7">
            {props.description}
        </p>
      </div>
      <img src={props.img} alt={props.alt} />
    </motion.div>
  );
}

export default Project;
