import style from "./style.module.css"
import { GoProjectRoadmap } from "react-icons/go";

export const Banner = () => {
    return (
        <div className={style.banner}>
            <div style={{ position: "absolute" }}>
                <h1>Project</h1>
            </div>
            <div className={style.icon} style={{ marginLeft: "auto" }}>
                <GoProjectRoadmap />
            </div>
        </div>
    )
}   