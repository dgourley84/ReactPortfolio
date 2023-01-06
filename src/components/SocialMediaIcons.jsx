import linkedInIcon from "../assets/linkedin.png"
import github from "../assets/github.png"



const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
            className="hover:opacity-50 transition duration-500"
            href="https://www.linkedin.com/in/dallas-gourley-brisbane4018/"
            target="_blank"
            rel="noreferrer"
            >
                <img alt="linkedin-link" src={linkedInIcon} />
            </a>
            <a
            className="hover:opacity-50 transition duration-500"
            href="https://github.com/dgourley84"
            target="_blank"
            rel="noreferrer"
            >
                <img alt="linkedin-link" src={github} width="30" height="30" />
            </a>
        </div>
    )

}

export default SocialMediaIcons