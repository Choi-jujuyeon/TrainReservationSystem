import styled from "styled-components";
import { Link } from "react-router-dom";
const SelectModal = () => {
    return (
        <Container>
            <img
                src={`${process.env.PUBLIC_URL}/assets/icons/checkModal.svg`}
                alt="check"
            />
            <H1>환영합니다 !</H1>
            <H3>아래 3가지 보기 옵션 중 원하시는 것을 선택해 주세요</H3>
            <Box>
                <Link to="/main">
                    <H4>기본 예약 페이지</H4>
                    <H5>"다양한 혜택을 확인하고, 간편하게 예약하세요."</H5>
                </Link>
            </Box>
            <Box>
                <Link to="/ai">
                    <H4>음성 예약 페이지</H4>
                    <H5>"음성으로 간편하게 예약, 말로만 예약을 완료하세요."</H5>
                </Link>
            </Box>
        </Container>
    );
};

export default SelectModal;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: rgba(161, 161, 161, 0.5);
    backdrop-filter: blur(2px);
    z-index: 9999;
    padding: 20px;
    border-radius: 32px;
    img {
        width: 100px;
        height: 100px;
        margin-bottom: 18px;
    }
`;

const H1 = styled.div`
    margin-bottom: 8px;
    font-size: 32px;
    font-weight: 1000;
    color: #ffffff;
`;

const H3 = styled.div`
    font-size: 12px;
    color: #ffffff;
    width: 300px;
    margin-bottom: 43px;
`;
const Box = styled.button`
    /* background-color: #f1f1f1; Light background */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 78px;
    max-width: 400px;
    margin-bottom: 20px;
    border-radius: 32px;
    border: 1px solid #c5c6cc;

    &:hover {
        border-color: #00ff95;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 255, 51, 0.5);
    }

    &::placeholder {
        color: #8f9098;
        font-size: 14px;
    }
`;

const H4 = styled.div`
    font-size: 14px;
    font-weight: 1000;
    color: #71727a;
    margin-bottom: 8px;
`;

const H5 = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #71727a;
    text-align: center;
`;
