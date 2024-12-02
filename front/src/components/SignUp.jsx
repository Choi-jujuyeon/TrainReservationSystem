import React, { useState } from "react";
import styled from "styled-components";
import InputBox from "./InputBox";
import LoginButton from "./LoginButton";
import axios from "axios"; // Axios 라이브러리 사용

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:5000/signup", {
                username,
                email,
                id,
                password,
            });
            alert(response.data.message);  // 정상 응답 처리
            localStorage.setItem("loggedInUser", id); // 로그인 상태
        } catch (error) {
            // error.response가 undefined인 경우를 처리하기 위한 수정
            if (error.response) {
                // 서버에서 응답이 왔을 때
                console.error(error.response.data);
                alert("회원가입 중 오류가 발생했습니다: " + error.response.data.error);
            } else if (error.request) {
                // 서버가 응답하지 않았을 때
                console.error(error.request);
                alert("서버에 연결할 수 없습니다.");
            } else {
                // 요청을 설정할 때 오류가 발생했을 때
                console.error('Error', error.message);
                alert("알 수 없는 오류가 발생했습니다.");
            }
        }
    };

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
            <InputBox inputs={inputs} />
            <CheckboxContainer>
                <Checkbox type="checkbox" id="terms" />
                <Label htmlFor="terms">
                    이용 약관과 개인정보 처리방침을 모두 읽었으며, 이에
                    동의합니다
                </Label>
            </CheckboxContainer>
            <LoginButton onClick={handleSignUp}>회원가입</LoginButton>
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
