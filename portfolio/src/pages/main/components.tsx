import style from './style.module.css'

export const Profile = () => {
    return (
        <div className={style.profile}>
            <div className={style.img}>
                <img src='./profile.png' />
            </div>
            <div className={style.desc}>
                <h1>Kim Suyun</h1>
                <p>FullStack, Data Engineer</p>
            </div>
        </div>
    )
}