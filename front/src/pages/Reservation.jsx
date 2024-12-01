import styled from "styled-components";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Reservation = () => {
    return (
        <Container>
            <TitleDiv>
                <Link to="/selectReservation">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/back.svg`}
                        alt="alarm"
                    />
                </Link>
                <div>STEP</div>
            </TitleDiv>
            <Process>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/step01.svg`}
                    alt="alarm"
                />
                {/* <div></div> */}
            </Process>
            <Detail>
                <BoldText>2024년 11월 22일 (금)</BoldText>
                <RegularText>[KTX] 서울 007열차 (6:00)</RegularText>
                <RegularText>어른 2명</RegularText>
                <BoldText alignRight>결제 금액: 112,400원</BoldText>

                <M>
                    <RegularText>총 금액 : </RegularText>
                    <BoldText>112,400 원</BoldText>
                </M>
                <StyledLoginButton>
                    <StyledLinkButton to="/paymentmethod">
                        결제하기
                    </StyledLinkButton>
                </StyledLoginButton>
            </Detail>
            <Navigation />
        </Container>
    );
};
export default Reservation;
const M = styled.div`
    margin-top: 200px;
    /* display: flex; */
`;
const StyledLoginButton = styled.div`
    margin-top: 10px;
    margin-bottom: 18px;

    button {
        width: 300px;
        height: 600px;
        font-size: 16px;
        border: none;
        cursor: pointer;
    }
`;

const StyledLinkButton = styled(Link)`
    display: flex;
    width: 300px;
    height: 55px;
    justify-content: center;
    align-items: center;
    background-color: #006ffd;
    color: white;
    text-decoration: none;
    text-align: center;
    border-radius: 12px;
    font-weight: 800;
    margin-bottom: 50px;

    &:hover {
        background-color: #0056cc;
    }
`;

const BoldText = styled.div`
    margin-top: 10px;
    width: 295px;
    /* background-color: red; */
    font-size: 14px;
    font-weight: 800;
    text-align: ${({ alignRight }) => (alignRight ? "right" : "left")};
    position: relative;
    border-bottom: 2px solid #d4d6dd; /* 아래쪽 라인 추가 */
    padding-bottom: 8px; /* 텍스트와 라인의 간격 */
`;

const RegularText = styled.div`
    width: 295px;
`;
const Container = styled.div`
    background-color: #f9f7f7;
    /* width: 100%; */
    width: 375px;
    height: 812px;
    /* height: 100%; */
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const TitleDiv = styled.div`
    width: 327px;
    height: 37px;
    /* background-color: red; */
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 113px;

    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
`;
const Process = styled.div`
    width: 327px;
    height: 83px;
    border-radius: 107px;
    display: flex;
`;
const Detail = styled.div`
    width: 100%;
    height: 537px;
    background-color: #ffffff;
    margin-top: 44px;
    border-radius: 33px 33px 0 0;
    /* padding: 40px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
// const Button = styled.div``;
