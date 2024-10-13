import style from './style.module.css'

export const Profile = () => {
    return (
        <div className={style.profile}>
            <div className={style.img}>
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