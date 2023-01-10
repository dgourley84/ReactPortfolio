import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";


const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
const Technologies = () => {
    return (
        <section id="technologies" className="pt-32 pb-16"> 
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        ></link>
            {/* {heading} */}
            <motion.div
                    className="md:w-1/3 text-center md:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">TECH STACK</span>
                    </p>
                    <LineGradient width="mx-auto w-2/4"/>
                    <p className="mt-10">
                        My tech-stack includes knowledge in the following:
                    </p>
            </motion.div>
            {/* {TechStack} */}
            <div className="flex justify-center">
                <motion.div
                className="sm:grid sm:grid-cols-4"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                >
                {/* ROW 1 */}
                <i className ="devicon-javascript-plain font-semibold text-8xl p-10"></i>
                <i className ="devicon-express-original-wordmark font-semibold text-8xl p-10"></i>
                <i className ="devicon-react-original-wordmark font-semibold text-8xl p-10"></i>
                <i className ="devicon-nodejs-plain-wordmark font-semibold text-8xl p-10"></i>
                <i className ="devicon-mongodb-plain-wordmark font-semibold text-8xl p-10"></i>
                <i className ="devicon-mysql-plain-wordmark font-semibold text-8xl p-10"></i>
                <i className ="devicon-git-plain-wordmark font-semibold text-8xl p-10"></i>
                <i className ="devicon-html5-plain-wordmark font-semibold text-8xl p-10"></i>
                <i className ="devicon-css3-plain-wordmark font-semibold text-8xl p-10"></i>
                <i className ="devicon-github-original-wordmark font-semibold text-8xl p-10"></i>
                <i className ="devicon-npm-original-wordmark font-semibold text-8xl p-10"></i>
                <i className ="devicon-sequelize-plain-wordmark font-semibold text-8xl p-10"></i>
                </motion.div>
            </div>
        </section>
    )
}

export default Technologies;