import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Navbar from "./scenes/Navbar";
import MySkills from "./scenes/MySkills";
import Technologies from "./scenes/Languages";
import Contact from "./scenes/Contact"

function App (){
    const [selectedPage, setSelectedPage] = useState("home");
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    useEffect (()=>{
        const handleScroll = ()=>{
            if (window.scrollY ===0) setIsTopOfPage(true); //if page is scrolled away from top of window set navbar colour to red
            if (window.scrollY !==0) setIsTopOfPage(false); //if page hasnt scrolled then keep orginal background colour
        }
        window.addEventListener("scroll",handleScroll); //listen for scroll on page
        return () => window.removeEventListener("scroll",handleScroll);
    },[]);

    return (
        <div className="app bg-deep-blue">
            <Navbar 
            isTopOfPage ={isTopOfPage} 
            selectedPage ={selectedPage} 
            setSelectedPage={setSelectedPage}
            />
            <div className="w-5/6 mx-auto md:h-full">
                {isAboveMediumScreens && (
                    <DotGroup
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                )}
                <Landing setSelectedPage={setSelectedPage}/>
            </div>
            <LineGradient/>
            <div className="w-5/6 mx-auto md:h-full">
                <MySkills/>
            </div>
            <LineGradient/>
            <div className="w-5/6 mx-auto">
                <Projects/>
            </div>
            <LineGradient/>
            <div className="w-5/6 mx-auto md:h-full">
                <Technologies/>
            </div>    
            <LineGradient/>
            <div className="w-5/6 mx-auto md:h-full">
                <Contact/>
            </div>         
        </div>
    );
}

export default App;