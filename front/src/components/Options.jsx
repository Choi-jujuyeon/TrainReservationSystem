import { Link } from "react-router-dom";
import styled from "styled-components";
const Options = () => {
    return (
        <>
            <Option>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/info.svg`}
                    alt="info"
                />
                <H1>나에게 맞는 할인 혜택 추천받기</H1>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/rightArrow.svg`}
                    alt="rightArrow"
                />
            </Option>

            <Option>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/alarm.svg`}
                    alt="alarm"
                />
                <H1>매진된 좌석 예비표 예약</H1>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/rightArrow.svg`}
                    alt="rightArrow"
                />
            </Option>
            <Link to="/aiVoice">
                <Option>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/recommend.svg`}
                        alt="recommend"
                    />
                    <H1>음성으로 기차표 티켓 예매하기 !</H1>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/rightArrow.svg`}
                        alt="rightArrow"
                    />
                </Option>{" "}
            </Link>
        </>
    );
};
export default Options;
const Option = styled.div`
    background-color: white;
    width: 327px;
    height: 68px;
    display: flex;
    align-items: center;
    /* padding: 0 16px; 좌우 여백 추가 */
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    box-shadow: 4px 7px 12px rgba(0, 0, 0, 0.25);
    margin-bottom: 18px;
    cursor: pointer;
    img {
        margin: 12px;
    }

    div {
        display: flex;
        flex: 1; /* 나머지 공간을 차지 */
        flex-direction: column;
        align-items: flex-start; /* 텍스트 왼쪽 정렬 */
        margin-left: 10px; /* 아이콘과 텍스트 간 여백 */
    }
`;
const H1 = styled.div`
    font-size: 15px;
    font-weight: bold;
    text-align: left;
`;
