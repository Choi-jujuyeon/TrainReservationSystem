import { React, useState } from "react";
import styled from "styled-components";
import InputBox from "./InputBox";
import LoginButton from "./LoginButton";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const inputs = [
        {
            label: "이름",
            type: "text",
            placeholder: "이름을 입력해주세요.",
            value: username,
            onChange: (e) => setUsername(e.target.value),
        },
        {
            label: "이메일",
            type: "email",
            placeholder: "example@email.com",
            value: email,
            onChange: (e) => setEmail(e.target.value),
        },
        {
            label: "아이디",
            type: "text",
            placeholder: "아이디를 입력해주세요.",
            value: id,
            onChange: (e) => setId(e.target.value),
        },
        {
            label: "비밀번호",
            type: "password",
            placeholder: "비밀번호를 입력해주세요.",
            value: password,
            onChange: (e) => setPassword(e.target.value),
        },
    ];

    return (
        <Wrapper>
            <Title>
                <H1>회원가입</H1>
                <H3>계정을 생성하세요</H3>
            </Title>
            <InputBox inputs={inputs} />{" "}
            <CheckboxContainer>
                <Checkbox type="checkbox" id="terms" />
                <Label htmlFor="terms">
                    이용 약관과 개인정보 처리방침을 모두 읽었으며, 이에
                    동의합니다
                </Label>
            </CheckboxContainer>
            <LoginButton />
        </Wrapper>
    );
};

export default SignUp;

const Wrapper = styled.div`
    width: 327px;
    margin: 0 auto; /* 가운데 정렬 */
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const Title = styled.div`
    text-align: center;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const H1 = styled.div`
    font-weight: 1000;
    font-size: 24px;
    margin-bottom: 8px;
`;

const H3 = styled.div`
    font-size: 14px;
    color: gray;
`;

const CheckboxContainer = styled.div`
    /* background-color: red; */
    display: flex;
    align-items: center;
    margin-bottom: 42px;
    margin-left: 1px;
`;

const Checkbox = styled.input`
    margin-right: 20px;
    transform: scale(1.5);
`;

const Label = styled.label`
    font-size: 12px;
    color: #666;
`;
