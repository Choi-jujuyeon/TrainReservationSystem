import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Loading = ({ text, navigateTo }) => {
    const navigate = useNavigate(); // useNavigate hook

    useEffect(() => {
        // 3초 후에 navigateTo 페이지로 이동
        const timer = setTimeout(() => {
            navigate(navigateTo); // props로 받은 navigateTo 경로로 이동
        }, 2000);

        // Cleanup timer on unmount
        return () => clearTimeout(timer);
    }, [navigate, navigateTo]);

    return (
        <Container>
            <LoaderWrapper>
                <Packman />
                <Dots>
                    <Dot />
                    <Dot />
                    <Dot />
                    <Dot />
                </Dots>
            </LoaderWrapper>
            <Text>{text}</Text>
        </Container>
    );
};

export default Loading;

const Text = styled.div`
    color: white;
    text-align: center;
    font-size: 14px;
    margin-top: 20px;
    position: absolute;
    margin-top: 150px;
    font-weight: bolder;
`;

const Container = styled.div`
    background-color: black;
    width: 100%;
    height: 100%;
    /* height: 100vh; // 화면 꽉 채우기 위해 100vh 설정 */
    position: absolute; // absolute로 설정해서 화면에 덮어씌우기
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 26px;
    z-index: 999999;
`;

const LoaderWrapper = styled.div`
    position: relative;
    margin: auto;
`;

const Packman = styled.div`
    position: relative;
    width: 50px;
    height: 25px;

    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 50px;
        height: 25px;
        background-color: #eff107;
        border-radius: 100px;
        animation: rotatePackman 0.5s linear infinite;
        transform-origin: center center;
    }

    &::before {
        top: 0;
        border-radius: 100px 100px 0 0;
        animation-name: pacTop;
    }

    &::after {
        bottom: 0;
        border-radius: 0 0 100px 100px;
        animation-name: pacBot;
    }

    @keyframes pacTop {
        0% {
            transform: translate(-50%, -50%) rotate(0);
        }
        50% {
            transform: translate(-50%, -50%) rotate(-30deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(0);
        }
    }

    @keyframes pacBot {
        0% {
            transform: translate(-50%, 50%) rotate(0);
        }
        50% {
            transform: translate(-50%, 50%) rotate(30deg);
        }
        100% {
            transform: translate(-50%, 50%) rotate(0);
        }
    }
`;

const Dots = styled.div`
    position: relative;
    background-color: yellowgreen;
`;

const Dot = styled.div`
    background-color: antiquewhite;
    position: absolute;
    bottom: 9px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;

    &:nth-child(1) {
        left: 90px;
        animation: dotStage1 0.5s infinite;
    }

    &:nth-child(2) {
        left: 60px;
        animation: dotStage1 0.5s infinite;
    }

    &:nth-child(3) {
        left: 30px;
        animation: dotStage1 0.5s infinite;
    }

    &:nth-child(4) {
        left: 10px;
        animation: dotStage2 0.5s infinite;
    }

    @keyframes dotStage1 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(-24px, 0);
        }
    }

    @keyframes dotStage2 {
        0% {
            transform: scale(1);
        }
        5%,
        100% {
            transform: scale(0);
        }
    }
`;
