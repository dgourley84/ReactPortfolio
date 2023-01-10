import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
// import {ProjectOne, ProjectTwo} from "../components/ProjectListing";
import Project from "../components/ProjectListing"

//images import
import TextEditorProjectImage from "../assets/TextEditorProject.png"
import SocialMediaNetwork from "../assets/SocialMediaNetwork.png"
import ProfileGenerator from "../assets/ProfileGenerator.png"
import NoteTaker from "../assets/NoteTaker.png"
import QuizApp from "../assets/QuizApp.png"
import HotOrNot from "../assets/HotOrNot.png"
import DailyPlanner from "../assets/DailyPlanner.png"

//project listing
const projectTest = [
  {key:1, img:TextEditorProjectImage, alt:"TextEditorProject", description:"This app is an online text editor that allows programmers to write code snippets in the browser and store them for later.", title:"Text Editor"},
  {key:2, img:SocialMediaNetwork, alt:"SocialMediaNetwork", description:"Designed to emulate a social media api that allows a user to have friends, comments and reactions to comments.", title:"Social Network"},
  {key:3, img:ProfileGenerator, alt:"ProfileGenerator", description:"A command-line application incorporating Object-Orientated-Programing to take user input and build a team profile", title:"Team Profile Generator"},
  {key:4, img:NoteTaker, alt:"NoteTaker", description:"An application that can be used to write, save, and delete notes. Using an express backend and saves and retrieves note data from a JSON file.", title:"Note Taker"},
  {key:5, img:QuizApp, alt:"Quiz", description:"Quiz App with timer using HTML, CSS and JS This application uses JavaScript WebAPI's, CSS and HTML to create a quiz application.", title:"Coding Quiz"},
  {key:6, img:HotOrNot, alt:"WeatherApp", description:"Provide users with clothing suggestions based on the weather in a location that they search for.", title:"Weather App"},
  {key:7, img:DailyPlanner, alt:"DailyPlanner", description:"Create a daily planner that allows user to input their activities. Using a colour coding system allowing users to quickly assess the hour and activity relevent at that particular time of the day.", title:"Daily Planner"},
]


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          A selection of projects highlighting my skills in both front and back end development
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER INTERFACES
          </div>
            {projectTest.map(project=>(
              <Project key={project.id} title={project.title} img={project.img} description={project.description} alt={project.alt}/>
            ))}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            EFFICIENT FUNCTIONALITY
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;