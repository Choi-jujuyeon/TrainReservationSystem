import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginPage = () => {
    return (
        <LoginContainer>
            <H>로그인</H>
            <InputBox>
                <input type="text" placeholder="아이디를 입력해주세요." />
                <input type="password" placeholder="비밀번호를 입력해주세요" />
            </InputBox>
            <LoginButton>
                <Button>Login</Button>
                <SignUpButton>
                    <Text>회원이 아니신가요?</Text>
                    <Link to="/signup">
                        <SignUpLink> 회원가입하기</SignUpLink>
                    </Link>
                </SignUpButton>
            </LoginButton>
            <SocialLogin>
                <Text>Or continue with</Text>
                <IconContainer>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/google.svg`}
                        alt="google"
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/apple.svg`}
                        alt="apple"
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/naver.svg`}
                        alt="naver"
                    />
                </IconContainer>
            </SocialLogin>
        </LoginContainer>
    );
};
export default LoginPage;

const LoginContainer = styled.div`
    background-color: #ffeded;
    gap: 36px;
    width: 327px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const H = styled.div`
    background-color: #fcd2d2;
    font-size: 20px;
    font-weight: 500;
    line-height: 22px;
`;

const InputBox = styled.div`
    width: 100%;
    height: 112px;
    gap: 16px;
    display: flex;
    flex-direction: column;

    input {
        height: 48px;
        padding: 14px;
        border: 1px solid #c5c6cc;
        border-radius: 12px;

        font-size: 16px;
    }
    input::placeholder {
        color: #8f9098;
        font-size: 14px;
    }
`;

const LoginButton = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const Button = styled.button`
    background-color: #006ffd;
    height: 48px;
    width: 100%;

    border-radius: 12px;
    border: 1px solid #c5c6cc;

    color: white;
    cursor: pointer;

    &:hover {
        font-size: 15px;
    }
`;

const SignUpButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
`;

const Text = styled.span`
    font-size: 12px;
    line-height: 16px;
    color: #71727a;
    font-weight: 400; /* Regular */
`;

const SignUpLink = styled.span`
    font-size: 13px;
    font-weight: 700;
    color: #006ffd;

    cursor: pointer;
`;

const SocialLogin = styled.div`
    /* background-color: #ff5050; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const IconContainer = styled.div`
    margin-top: 16px;
    display: flex;
    gap: 14px;
    justify-content: center;
    align-items: center;
`;
