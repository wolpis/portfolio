import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import 'swiper/css';
import styles from './style.module.css';

import { FaGraduationCap } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { AiFillPicture } from "react-icons/ai";
import { SiEducative } from "react-icons/si";
import { FaAward } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ListData = [
    {
        title: ["Project", "프로젝트"],
        color: ["#C07F65", "#865947"],
        icon: <GoProjectRoadmap />
    },
    {
        title: ["Career Feed", "활동 사진"],
        color: ["#CFAF71", "#6B5B3B"],
        icon: <AiFillPicture />
    },
    {
        title: ["Specialty\nSkill", "보유 스킬"],
        color: ["#7862CC", "#54448E"],
        icon: <SiEducative />
    },
    {
        title: ["Education", "교육 활동"],
        color: ["#6A73CC", "#4A508E"],
        icon: <FaGraduationCap />

    },
    {
        title: ["Activity", "대외 활동"],
        color: ["#8AD0B8", "#609180"],
        icon: <FaAward />
    },
    {
        title: ["Certificate", "자격증"],
        color: ["#313131", "#222222"],
        icon: <FaAddressCard />
    }
]


export const ListComponent = () => {
    const navi = useNavigate();
    return (
        <div className={styles.container}>
            <Swiper
                modules={[EffectCoverflow]}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 50,
                    stretch: -100,
                    depth: 300,
                    modifier: 1,
                    slideShadows: false
                }}
                direction={"horizontal"}
                loop={true}
                centeredSlides={true}
                spaceBetween={0}
                slidesPerView={3}
            >
                {
                    ListData.map((item, i) => (
                        <SwiperSlide key={i} className={styles.swiperSlide} style={{ backgroundColor: item.color[0] }} onClick={() => navi(`/${item.title[0].toLocaleLowerCase()}`)}>
                            <div className={styles.inner}>
                                <div style={{ position: "absolute" }}>
                                    <span className={styles.sub_text} style={{ backgroundColor: item.color[1] }}>{item.title[1]}</span>
                                    <h1 style={{ marginTop: "10px", whiteSpace: "pre-wrap", lineHeight: "1.3em" }}>{item.title[0]}</h1>
                                </div>
                                <div className={styles.icon} style={{ marginLeft: "auto" }}>
                                    {item.icon}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export const MobileListComponent = () => {
    const navi = useNavigate();
    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "10px", alignItems: "" }}>
            {
                ListData.map((item, i) => (
                    <div onClick={() => navi(`/${item.title[0].toLocaleLowerCase().replace(" ", "_")}`)} key={i} style={{ backgroundColor: item.color[0], color: "white", padding: "10px", display: "flex", alignItems: "center", borderRadius: "0.5em", marginBottom: "10px" }}>
                        <div style={{ marginRight: "auto" }}>
                            <span>{item.title[1]}</span>
                            <h1>{item.title[0]}</h1>
                        </div>
                        <div style={{ fontSize: "4em", display: "flex", alignItems: "center" }}>
                            {item.icon}
                        </div>
                    </div>
                ))
            }
            <p style={{ fontSize: "0.85em", textAlign: "center", color: "#A4A4A4" }}>PC로 접속하시면 인터랙티브 웹을 체험하실 수 있습니다.</p>
        </div>
    )
}