import { useState } from "react";
import style from "./style.module.css"
import { GoProjectRoadmap } from "react-icons/go";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// Dummy Data
const DummyData = [
    {
        "year": 2024,
        "activities": [
            {
                title: "HackSeuol 2024",
                sub_text: "Gourment",
                start_date: "2024.08",
                end_date: "2024.08",
                text: "HackSeoul 2024 프로젝트\n외국인들도 쉽게 배달 서비스를 이용할 수 있게 제작한 웹 애플리케이션입니다."
            },
            {
                title: "JUNCTION 2024",
                sub_text: "ALL Blue",
                start_date: "2024.08",
                end_date: "2024.08",
                text: "JUNCTION 2024 프로젝트\n사회 취준생을 도와줄 수 있는 미니 해커톤 서비스 입니다.\n실제 업무의 로직을 해커톤으로 구현하여, 보다 쉽게 직장에 적응할 수 있게 도움을 줍니다."
            },
            {
                title: "개인",
                sub_text: "OrangeStar",
                start_date: "2024.08",
                end_date: "2024.08",
                text: "영어듣기평가를 연습할 수 있는 웹사이트 입니다.\nWeb Audio API를 사용하여 현장감 있는 응시환경을 체험 가능합니다."
            },
        ]
    }
]

type ActivitiesType = {
    title: string,
    sub_text: string,
    start_date: string,
    end_date: string,
    text: string
}
type DummyDataType = {
    year: number,
    activities: ActivitiesType[]
}
// Dummy Data

export const Banner = () => {
    const navi = useNavigate();
    return (
        <div>
            <div className={style.back} onClick={() => navi("/list")}>
                <IoMdArrowRoundBack />
            </div>
            <div className={style.banner}>
                <div style={{ position: "absolute" }}>
                    <h1>Project</h1>
                    {/* <p>다양한 활동에서 제작한 프로젝트들 입니다.</p> */}
                </div>
                <div className={style.icon} style={{ marginLeft: "auto" }}>
                    <GoProjectRoadmap />
                </div>
            </div>

        </div>
    )
}

export const MainContainer = () => {
    const year = [2022, 2023, 2024]
    const [cursor, Setcursor] = useState(0);

    return (
        <div className={style.main_container}>
            {
                DummyData.map((item, i) => {
                    return (
                        <ListComponent data={item} />
                    )
                })
            }
        </div>
    )
}

const ListComponent = ({ data }: { data: DummyDataType }) => {
    return (
        <div className={String(data.year)} style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}>
            <h3>{data.year}년</h3>
            {
                data.activities.map((item, i) => {
                    return (
                        <ol style={i === 0 ? { marginTop: "30px" } : {}}>
                            <li>
                                <div className={style.title}>{item.title}</div>
                                <div className={style.sub_text}><span style={{ wordBreak: "break-word" }}>{item.sub_text}</span></div>
                                <div className={style.date}>{item.start_date} ~ {item.end_date}</div>
                                <div className={style.text_wrap}>
                                    <p className={style.text}>{item.text.split("\n").map(line => { return (<>{line}<br /></>) })}</p>
                                </div>
                            </li>
                        </ol>
                    )
                })
            }
        </div>
    )

}