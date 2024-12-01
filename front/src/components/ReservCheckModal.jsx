import styled from "styled-components";
import { Link } from "react-router-dom";

const ReservCheckModal = ({ onClose, links, title, message }) => {
    return (
        <Overlay onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <Title>{title}</Title>
                <Message>
                    {message.split("\n").map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </Message>
                <ButtonContainer>
                    {links.map(({ text, to, primary }, index) => (
                        <CustomLink key={index} to={to}>
                            <Button primary={primary}>{text}</Button>
                        </CustomLink>
                    ))}
                </ButtonContainer>
            </ModalContainer>
        </Overlay>
    );
};

export default ReservCheckModal;
const CustomLink = styled(Link)`
    text-decoration: none;
`;
const Overlay = styled.div`
    position: fixed;
    /* top: 0; */
    /* left: 0; */
    /* right: 0; */
    /* bottom: 0; */
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 375px;
    /* width: 100%; */
    /* height: 100%; */
    height: 812px;
    z-index: 9999;
    border-radius: 32px;
    margin: auto;
`;

const ModalContainer = styled.div`
    background-color: white;
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    width: 90%;
    max-width: 320px; /* 최대 너비 제한 */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid #e3e6f0;
`;

const Title = styled.h2`
    color: #000000;
    font-size: 20px;
    margin-bottom: 10px;
`;

const Message = styled.p`
    color: #5a5a5a;
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 1.5;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 10px;
    margin-top: 15px;
`;

const Button = styled.button`
    padding: 12px 20px;
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
