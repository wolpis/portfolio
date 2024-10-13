import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import 'swiper/css';
import styles from './style.module.css';

export const ListComponent = () => {
    const ListDate = [
        "Project",
        "Career Feed",
        "Specialty Skill",
        "Education",
        "Activity",
        "Certificate"
    ];

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
                    ListDate.map((item, i) => (
                        <SwiperSlide key={i} className={styles.swiperSlide}>
                            {item} {i}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};
