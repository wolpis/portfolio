import { useEffect, useState } from "react";
import { ListComponent, MobileListComponent } from "./components";
import style from "./style.module.css"
import { isMobile } from 'react-device-detect';

const ListPage = () => {
    const [fade, SetFade] = useState('');

    // useEffect(() => {
    //     setInterval(() => SetFade(style.end), 100)
    //     return () => {
    //         SetFade("");
    //     };
    // }, [])

    return (
        <div className={" " + fade}>
            {
                isMobile ? <MobileListComponent /> : <ListComponent />
            }
        </div>
    )
}

export default ListPage;