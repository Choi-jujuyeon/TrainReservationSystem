import styled from "styled-components";

const Loading = () => {
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
            <Text>결제가 진행중입니다 !</Text>
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
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    /* margin-top: 300px; */
    /* margin-bottom: 10px; */
`;

const Dot = styled.div`
    background-color: antiquewhite;
    position: absolute;
    /* top: 8px; */
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
