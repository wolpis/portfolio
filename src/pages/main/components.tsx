import { useNavigate } from 'react-router-dom'
import style from './style.module.css'

export const Profile = () => {
    const navi = useNavigate();
    return (
        <div className={style.profile}>
            <div className={style.img} onClick={() => navi("/list")}>
                <div className={style.about}><div>About Me?</div></div>
                <img src='./profile.png' />
            </div>
            <div className={style.desc}>
                <h1>Kim Suyun</h1>
                <p>FE Developer, Data Engineer</p>
            </div>
        </div>
    )
}