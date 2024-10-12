import { Profile } from './components';
import style from './style.module.css'

const MainPage = () => {
    return (
        <div className={style.container}>
            <Profile />
        </div>
    )
}

export default MainPage;