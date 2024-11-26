import styled from "styled-components";

const StyledButton = () => {
    return (
        <Button>
            <Text>EVERY Rail</Text>
        </Button>
    );
};

export default StyledButton;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px; // 버튼 크기 조정 (넓이)
    height: 250px; // 버튼 크기 조정 (높이)
    margin: auto;
    background: linear-gradient(
        45deg,
        #00b894,
        #00cec9,
        #fdcb6e
    ); // 강렬한 그라데이션
    border-radius: 50%; // 원형 모양으로 변경
    border: none;
    outline: none;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3); // 깊이감 있는 그림자
    cursor: pointer;
    position: relative;
    transform: scale(1);
    transition: all 0.3s ease; // 애니메이션을 부드럽게

    &:hover {
        transform: scale(1.1); // 호버 시 버튼 크기 커짐
        box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.4); // 호버 시 그림자 강해짐
    }

    &:active {
        transform: scale(1); // 클릭 시 원래 크기로 돌아옴
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3); // 기본 그림자
    }

    &:before {
        content: "";
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%; // 원형 효과 적용
        filter: blur(8px);
        z-index: -1;
        animation: glow 2s infinite ease-in-out; // 불빛처럼 반짝이는 효과
    }

    @keyframes glow {
        0% {
            box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
        }
        50% {
            box-shadow: 0px 0px 40px rgba(255, 255, 255, 1);
        }
        100% {
            box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
        }
    }
`;

const Text = styled.div`
    font-family: "Roboto", sans-serif;
    font-size: 40px; // 크고 강렬한 텍스트
    color: white;
    font-weight: bold;
    text-transform: uppercase; // 모든 텍스트 대문자로
    letter-spacing: 2px; // 글자 간격을 넓혀서 좀 더 화려한 느낌
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.6),
        0 0 30px rgba(0, 255, 255, 0.8); // 텍스트를 돋보이게 하는 화려한 그림자
`;
