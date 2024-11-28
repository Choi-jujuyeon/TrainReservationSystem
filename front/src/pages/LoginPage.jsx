import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SocialLogin from "../components/SocialLogin";
import InputBox from "../components/InputBox";
import LoginButton from "../components/LoginButton";
import SelectModal from "./SelectModal";
const LoginPage = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLoginCick = () => {
        setIsModalOpen(true);
    };
    const inputs = [
        {
            type: "text",
            placeholder: "아이디를 입력해주세요.",
            value: id,
            onChange: (e) => setId(e.target.value),
        },
        {
            type: "password",
            placeholder: "비밀번호를 입력해주세요",
            value: password,
            onChange: (e) => setPassword(e.target.value),
        },
    ];

    return (
        <LoginContainer>
            <H>로그인</H>
            <InputBox inputs={inputs} />
            <LoginButtonContainer>
                <LoginButton input="Login" />

                <SignUpButton>
                    <Text>회원이 아니신가요?</Text>
                    <Link to="/signup">
                        <SignUpLink> 회원가입하기</SignUpLink>
                    </Link>
                </SignUpButton>
            </LoginButtonContainer>
            <SocialLogin />
        </LoginContainer>
    );
};

export default LoginPage;

const LoginContainer = styled.div`
    gap: 36px;
    width: 327px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const H = styled.div`
    font-size: 20px;
    font-weight: bold;
    line-height: 22px;
`;

const LoginButtonContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const SignUpButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
`;

const Text = styled.span`
    font-size: 13px;
    margin-top: 3px;
    color: #71727a;
    font-weight: 400;
`;

const SignUpLink = styled.span`
    font-size: 13px;
    font-weight: 900;
    color: #006ffd;
    cursor: pointer;
`;
