import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition"; // 음성 인식 관련 패키지 import
import Navigation from "../components/Navigation";

const AiPage = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [formData] = useState({
        memberId: localStorage.getItem("memberId"),
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // 음성 인식 상태
    const { transcript, listening, resetTranscript } = useSpeechRecognition(); // 텍스트, 음성 인식 상태, 리셋 함수

    const handleSendMessage = async () => {
        const newMessage = { sender: "user", text: transcript }; // 텍스트 또는 음성 인식된 텍스트 사용
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setIsLoading(true);

        try {
            const response = await axios.post("http://127.0.0.1:5000/chat", {
                prompt: transcript, // 텍스트 또는 음성 인식된 텍스트 전송
                memberId: formData.memberId,
            });

            const botMessage = { sender: "bot", text: response.data.reply };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
            if (response.data.reply === "좌석확인 도와드릴게요!") {
                await new Promise((resolve) => setTimeout(resolve, 3000));
                navigate("/reservation");
            }
        } catch (error) {
            console.error("Error occurred while chatting with AI:", error);
        }

        setIsLoading(false);
        setUserInput(""); // 입력창 초기화
        resetTranscript(); // 음성 인식 리셋
    };

    // 음성 인식 시작 및 중지 함수
    const startListening = () => {
        SpeechRecognition.startListening({
            continuous: true,
            language: "ko-KR",
        });
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        handleSendMessage(); // 음성 인식이 끝난 후 메시지 전송
    };

    return (
        <Container>
            <Label>
                <div> 안녕세요😀👋</div>
                <div> 어디에서 어디로 가는 열차를 찾으시나요?</div>
            </Label>
            <AiContainer>
                <ChatWindow>
                    {messages.map((message, index) => (
                        <Message key={index} sender={message.sender}>
                            {message.text}
                        </Message>
                    ))}
                    {isLoading && (
                        <Message sender="bot">챗봇이 입력 중...</Message>
                    )}
                </ChatWindow>
                <Box>
                    <UserInput
                        value={transcript} // 음성 인식 텍스트가 있다면 그 값을 사용
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="음성인식 버튼을 클릭한 후 말해주세요!"
                    />
                    <VoiceButton
                        onMouseDown={startListening}
                        onMouseUp={stopListening}
                    >
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        fill="currentColor"
                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <span>음성 인식</span>
                    </VoiceButton>
                </Box>
                <Navigation />
            </AiContainer>
        </Container>
    );
};

export default AiPage;

const Label = styled.div`
    /* background-color: red; */
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
`;
const Container = styled.div`
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Box = styled.div`
    display: flex;
    width: 375px;
`;
const AiContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 375px;
    margin: 0 auto;
    height: 600px;
    background-color: #f5f5f5;
    border-radius: 10px;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
`;

const ChatWindow = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    width: 350px;
    height: 500px;
    background-color: white;
`;

const Message = styled.div`
    margin-bottom: 10px;
    padding: 5px;
    background-color: ${(props) =>
        props.sender === "user" ? "#d1f7d1" : "#f1f1f1"};
    border-radius: 5px;
    text-align: ${(props) => (props.sender === "user" ? "right" : "left")};
`;

const UserInput = styled.input`
    padding: 10px;
    margin-top: 18px;
    margin-bottom: 30px;
    border: 1px solid #ccc;
    border-radius: 32px;
    width: 340px;
    /* height: 10px; */
`;

const VoiceButton = styled.button`
    font-family: inherit;
    font-size: 18px;
    background: linear-gradient(to bottom, #4dc7d9 0%, #66a6ff 100%);
    color: white;
    padding: 0em 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 25px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    margin-left: 10px;
    margin-bottom: 20px;

    .svg-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.2);
        /* margin-right: 0.5em; */
        transition: all 0.3s;
    }

    svg {
        width: 18px;
        height: 18px;
        fill: white;
        transition: all 0.3s;
    }

    span {
        display: block;
        /* display: flex; */
        margin-left: 0.4em;
        transition: all 0.3s;
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    }

    &:hover .svg-wrapper {
        background-color: rgba(255, 255, 255, 0.5);
    }

    &:hover svg {
        transform: rotate(45deg);
    }

    &:active {
        transform: scale(0.95);
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }
`;
