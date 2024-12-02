import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const ReservBox = () => {
    // State to toggle visibility of the ImgBox
    const [showImage, setShowImage] = useState(false);

    const handleButtonClick = () => {
        setShowImage(!showImage); // Toggle the image visibility
    };

    return (
        <Container>
            <Wrapper>
                <Title>🔹승차권 예매</Title>
                <D1>
                    <div>출발</div>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/arrow.svg`}
                        alt="arrow"
                    />
                    <div>도착</div>
                </D1>
                <D2>
                    <LocationText>서울</LocationText>

                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/arriveArrow.svg`}
                        alt="arrow"
                    />

                    <LocationText>부산</LocationText>
                </D2>
                <Go>
                    <Label>가는날</Label>
                    <Text>2024년 12월 15일 06:00</Text>

                    <Label>인원 선택</Label>
                    <Text>어른 2명</Text>

                    <StyledLoginButton>
                        <StyledLinkButton onClick={handleButtonClick}>
                            좌석 미리보기
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/icons/down.svg`}
                                alt="arrow"
                            />
                        </StyledLinkButton>
                    </StyledLoginButton>
                </Go>
            </Wrapper>
            {/* Only show ImgBox if showImage is true */}
            {showImage && (
                <ImgBox>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/myseat.svg`}
                        alt="arrow"
                    />
                </ImgBox>
            )}
            <Navigation />
        </Container>
    );
};

export default ReservBox;

const ImgBox = styled.div`
    background-color: white;
    /* overflow: hidden; */
    width: 327px;
    height: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 4px 7px 12px rgba(0, 0, 0, 0.25);
    margin: auto;
    margin-bottom: 100px;
`;

const Wrapper = styled.div`
    background-color: white;
    width: 327px;
    height: 386px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 4px 7px 12px rgba(0, 0, 0, 0.25);
    margin: auto;
`;

const Container = styled.div`
    background-color: #f3f1f1;
    width: 100%;
    height: 100%;
    /* gap: 10px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
`;

const D1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 204px;
    margin-bottom: 3px;
    div {
        color: #808080;
    }
    gap: 54px;
`;

const D2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    margin-bottom: 28px;
    gap: 30px;
`;

const Title = styled.div`
    width: 300px;
    font-size: 28px;
    font-weight: bold;
    color: #4169e1;
    margin-top: 18px;
    margin-bottom: 36px;
`;

const LocationText = styled.div`
    padding: 8px;
    font-size: 32px;
    color: #000000;
    font-weight: bolder;
`;

const Go = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 290px;
    height: auto;
    border-radius: 8px;
`;

const Label = styled.p`
    margin: 0;
    font-size: 12px;
    color: #808080;
`;

const Text = styled.div`
    font-size: 14px;
    color: #333;
    font-weight: 800;
`;

const StyledLoginButton = styled.div`
    margin-top: 20px;
    margin-bottom: 18px;
`;

const StyledLinkButton = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 290px;
    height: 50px;
    background-color: #006ffd;
    color: white;
    text-decoration: none;
    text-align: center;
    border-radius: 18px;
    border: 1px solid #c5c6cc;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }

    img {
        margin-top: 8px;
    }
`;
