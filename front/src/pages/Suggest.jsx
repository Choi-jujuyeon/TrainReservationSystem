import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ReservCheckModal from "../components/ReservCheckModal";

const Suggest = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({
        age: null,
        isPregnant: null,
        hasChildren: null,
        isLowIncome: null,
        isGroup: null,
    });
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const questions = [
        {
            question: "나이는 몇 살인가요?",
            options: ["13~24세", "25~33세", "34세 이상"],
            key: "age",
        },
        {
            question: "임산부인가요?",
            options: ["O 네", "X 아니오"],
            key: "isPregnant",
        },
        {
            question: "자녀가 2명 이상 있나요?",
            options: ["O 네", "X 아니오"],
            key: "hasChildren",
        },
        {
            question: "기초생활수급자이신가요?",
            options: ["O 네", "X 아니오"],
            key: "isLowIncome",
        },
        {
            question: "4인 이상 그룹으로 여행하나요?",
            options: ["O 네", "X 아니오"],
            key: "isGroup",
        },
    ];

    const discountRules = [
        {
            condition: (answers) => answers.isPregnant === "O 네",
            message:
                "맘편한 코레일: 임산부 KTX 특실 요금 면제, KTX와 일반열차 일반실 운임 할인",
        },
        {
            condition: (answers) => answers.isLowIncome === "O 네",
            message: "기차누리: 기초생활수급자, KTX와 일반 열차 운임 할인",
        },
        {
            condition: (answers) => answers.hasChildren === "O 네",
            message: "다자녀 행복: 자녀 2명 이상 가정에게 KTX 운임 할인",
        },
        {
            condition: (answers) => answers.isGroup === "O 네",
            message:
                "4인 동반석: 테이블이 있는 마주 보는 KTX 좌석을 할인받아 편안하게",
        },
        {
            condition: (answers) => answers.age === "13~24세",
            message: "청소년 드림: 13~24세 청소년에게 KTX 운임 할인",
        },
        {
            condition: (answers) => answers.age === "25~33세",
            message:
                "힘내라 청춘: 25~33세 사회 초년생과 청년에게 KTX 운임 할인",
        },
    ];

    const handleAnswer = (answer) => {
        setAnswers({
            ...answers,
            [questions[currentQuestion].key]: answer,
        });
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        const applicableDiscount = discountRules.find((rule) =>
            rule.condition(answers)
        );

        setModalMessage(
            applicableDiscount
                ? applicableDiscount.message
                : "적합한 할인 혜택을 찾지 못했습니다."
        );
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <Container>
            <Header>
                <BackLink to="/main">back</BackLink>
                <ProgressBar
                    progress={(currentQuestion / (questions.length - 1)) * 100}
                />
            </Header>

            <Title>
                당신에게 꼭 맞는 <br /> 혜택을 찾아드릴게요
            </Title>
            <Question>{questions[currentQuestion].question}</Question>
            <Options>
                {questions[currentQuestion].options.map((option, index) => (
                    <Button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        red={option === "X 아니오"}
                    >
                        {option}
                    </Button>
                ))}
            </Options>

            {showModal && (
                <ReservCheckModal
                    onClose={closeModal}
                    title="할인 혜택"
                    message={modalMessage}
                    links={[{ text: "닫기", to: "/main", primary: true }]}
                />
            )}
        </Container>
    );
};

export default Suggest;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 812px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`;

const BackLink = styled(Link)`
    font-size: 16px;
    color: #007bff;
    text-decoration: none;
    padding: 10px;
`;

const ProgressBar = styled.div`
    width: 100%;
    background-color: #f0f0f0;
    border-radius: 5px;
    height: 10px;
    position: relative;
    overflow: hidden;
    margin-top: 5px;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${(props) => props.progress}%;
        height: 100%;
        background-color: #007bff;
    }
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
`;

const Question = styled.p`
    font-size: 18px;
    margin: 20px 0;
`;

const Options = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

const Button = styled.button`
    background-color: ${({ red }) => (red ? "#dc3545" : "#007bff")};
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 12px;
    cursor: pointer;

    &:hover {
        background-color: ${({ red }) => (red ? "#c82333" : "#0056b3")};
    }
`;
