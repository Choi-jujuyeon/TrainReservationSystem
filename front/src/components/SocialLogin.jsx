import React, { useEffect } from "react";
import styled from "styled-components";

const SocialLogin = () => {
    useEffect(() => {
        // 네이버 로그인 초기화
        const naverLogin = new window.naver.LoginWithNaverId({
            clientId: "LaBgYk22Gu6d1p0kSPWN", // 네이버 개발자 센터에서 발급받은 Client ID
            callbackUrl: "http://localhost:3000/modal", // 로그인 성공 후 돌아올 URL
            isPopup: true, // 팝업 로그인 사용
            loginButton: { color: "green", type: 3, height: 40 }, // 버튼 스타일
        });

        naverLogin.init();

        // 로그인 상태 확인 및 사용자 정보 가져오기
        naverLogin.getLoginStatus((status) => {
            if (status) {
                const user = {
                    id: naverLogin.user.getId(),
                    email: naverLogin.user.getEmail(),
                    name: naverLogin.user.getName(),
                };
                console.log("네이버 로그인 성공:", user);
                // 사용자 정보를 상태 관리나 로컬 스토리지에 저장 가능
                localStorage.setItem("loggedInUser", user.id); // 로그인 상태
            } else {
                console.log("네이버 로그인 실패");
            }
        });
    }, []);

    const handleNaverLogin = () => {
        // 네이버 로그인 버튼 클릭 처리
        document.getElementById("naverIdLogin_loginButton").click();
    };

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
                    onClick={handleNaverLogin} // 네이버 로그인 핸들러
                />
            </IconContainer>
            {/* 네이버 로그인용 숨겨진 버튼 */}
            <div id="naverIdLogin" style={{ display: "none" }}></div>
        </Container>
    );
};

export default SocialLogin;

const Container = styled.div`
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
