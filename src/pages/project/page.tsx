import { useLocation } from "react-router-dom";
import { Banner, MainContainer } from "./components";
import { useEffect } from "react";
import gsap from "gsap";

const ProjectPage = () => {
    let local = useLocation();
    useEffect(() => {
        gsap.fromTo(".project", { opacity: 0, y: -200 }, { opacity: 1, y: 0 })
    }, [local])
    return (
        <div className="project">
            <Banner />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <MainContainer />
            </div>

        </div>
    )
}

export default ProjectPage;