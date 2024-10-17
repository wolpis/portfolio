import { useNavigate } from 'react-router-dom'
import style from './style.module.css'
import { ReactTyped } from 'react-typed';
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaDiscord } from "react-icons/fa";

export const Profile = () => {
    const navi = useNavigate();
    const jops = ["FE Developer", "Security Engineer", "Data Engineer"]
    return (
        <div className={style.profile}>
            <div className={style.img_box} onClick={() => navi("/list")}>
                <div className={style.content}>
                    <h2>About ME?</h2>
                    <p style={{ marginTop: "10px" }}>Click!</p>
                </div>
                <div className={style.img} >
                    <img src='./profile.png' />
                </div>

            </div>

            <div className={style.desc}>
                <h1>Kim Suyun</h1>
                <p>I'm <ReactTyped strings={jops} typeSpeed={50} backSpeed={25} loop={true} backDelay={2500}></ReactTyped></p>
            </div>

            <div className={style.icons}>
                <h1><FaGithub /></h1>
                <h1><FaInstagram /></h1>
                <h1><FaDiscord /></h1>
                <h1><MdEmail /></h1>
            </div>
        </div>
    )
}