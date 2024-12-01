import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"; // 음성 인식 관련 패키지 import

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
        setMessages(prevMessages => [...prevMessages, newMessage]);
        setIsLoading(true);

        try {
            const response = await axios.post("http://127.0.0.1:5000/chat", {
                prompt: transcript, // 텍스트 또는 음성 인식된 텍스트 전송
                memberId: formData.memberId,
            });

            if (response.data.reply === "좌석확인 도와드릴게요!") {
                await new Promise(resolve => setTimeout(resolve, 3000));
                navigate("/selectReservation");
            }

            const botMessage = { sender: "bot", text: response.data.reply };
            setMessages(prevMessages => [...prevMessages, botMessage]);


        } catch (error) {
            console.error("Error occurred while chatting with AI:", error);
        }

        setIsLoading(false);
        setUserInput(""); // 입력창 초기화
        resetTranscript(); // 음성 인식 리셋
    };

    // 음성 인식 시작 및 중지 함수
    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: "ko-KR" });
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        handleSendMessage(); // 음성 인식이 끝난 후 메시지 전송
    };

    return (
        <AiContainer>
            <ChatWindow>
                {messages.map((message, index) => (
                    <Message key={index} sender={message.sender}>
                        {message.text}
                    </Message>
                ))}
                {isLoading && <Message sender="bot">챗봇이 입력 중...</Message>} 
            </ChatWindow>
                <UserInput
                    value={ transcript} // 음성 인식 텍스트가 있다면 그 값을 사용
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="챗봇과 대화하세요..."
                />
                <VoiceButton onMouseDown={startListening} onMouseUp={stopListening}>
                    🎤 음성 인식 시작
                </VoiceButton>
        </AiContainer>
    );
};

export default AiPage;

// Styled components for layout
const AiContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ChatWindow = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 10px;
    padding: 10px;
    height: 300px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
`;

const Message = styled.div`
    margin-bottom: 10px;
    padding: 5px;
    background-color: ${(props) => (props.sender === "user" ? "#d1f7d1" : "#f1f1f1")};
    border-radius: 5px;
    text-align: ${(props) => (props.sender === "user" ? "right" : "left")};
`;

const UserInputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UserInput = styled.input`
    width: 80%;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const SendButton = styled.button`
    padding: 10px 15px;
    background-color: #006ffd;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const VoiceButton = styled.button`
    padding: 10px 15px;
    background-color: #ff6f61;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
`;
