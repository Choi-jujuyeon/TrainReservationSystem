import styled from "styled-components";
const SocialLogin = () => {
    return (
        <Container>
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
        </Container>
    );
};
export default SocialLogin;

const Container = styled.div`
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
    img {
        cursor: pointer;
    }
`;
const Text = styled.span`
    font-size: 12px;
    line-height: 16px;
    color: #71727a;
    font-weight: 400; /* Regular */
`;
