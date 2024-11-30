import styled from "styled-components";
import { Link } from "react-router-dom";
const ReservCheckModal = () => {
    return (
        <Overlay>
            <ModalContainer>
                <Title>예약 완료!</Title>
                <Message>
                    승차권 예매가 완료되었습니다!
                    <br />
                    즐거운 여행 되세요 :)
                </Message>
                <ButtonContainer>
                    <Link to="/main">
                        <Button>홈으로 돌아가기</Button>
                    </Link>
                    <Link to="/mypage">
                        <Button primary>예약 조회하기</Button>
                    </Link>
                </ButtonContainer>
            </ModalContainer>
        </Overlay>
    );
};
export default ReservCheckModal;
const Overlay = styled.div`
    width: 375px;
    height: 812px;
    border-radius: 30px;

    /* position: fixed; */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

const ModalContainer = styled.div`
    background-color: white;
    border-radius: 16px;
    padding: 10px;
    text-align: center;
    width: 300px;
    /* max-width: 400px; */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid #e3e6f0;
`;

const Title = styled.h2`
    color: #000000;
    font-size: 20px;
    /* margin-bottom: 10px; */
`;

const Message = styled.p`
    color: #5a5a5a;
    font-size: 12px;
    margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 10px;
`;

const Button = styled.button`
    padding: 12px 20px;
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    background-color: ${({ primary }) => (primary ? "#006FFD" : "#F4F7FB")};
    color: ${({ primary }) => (primary ? "white" : "#006FFD")};
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({ primary }) => (primary ? "#1F56D2" : "#E2E7F2")};
    }
`;
