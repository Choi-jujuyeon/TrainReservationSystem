import React, { useState } from "react";
import styled from "styled-components";
import LoginButton from "./LoginButton";
import ReservToggle from "./ReservToggle";
const ReservBox = () => {
    const [selectedDeparture, setSelectedDeparture] = useState("출발");
    const [selectedArrival, setSelectedArrival] = useState("도착");

    const locations = ["서울", "부산", "대전", "광주", "대구"];

    const handleSelect = (type, location) => {
        if (type === "departure") {
            setSelectedDeparture(location);
        } else if (type === "arrival") {
            setSelectedArrival(location);
        }
    };
    return (
        <Container>
            <Title>🔹승차권 예매</Title>
            <D1>
                <div>출발</div>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/arrow.svg`}
                    alt="arrow"
                />
                <div>도착</div>
            </D1>
            {/* 출발지 선택 */}
            <D2>
                <ToggleBox>
                    <Selected>{selectedDeparture}</Selected>
                    <Options>
                        {locations.map((location) => (
                            <Option
                                key={location}
                                onClick={() =>
                                    handleSelect("departure", location)
                                }
                            >
                                {location}
                            </Option>
                        ))}
                    </Options>
                </ToggleBox>

                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/arriveArrow.svg`}
                    alt="arrow"
                />

                {/* 도착지 선택 */}
                <ToggleBox>
                    <Selected>{selectedArrival}</Selected>
                    <Options>
                        {locations
                            .filter(
                                (location) => location !== selectedDeparture
                            ) // 출발지와 중복되지 않는 도착지만 표시
                            .map((location) => (
                                <Option
                                    key={location}
                                    onClick={() =>
                                        handleSelect("arrival", location)
                                    }
                                >
                                    {location}
                                </Option>
                            ))}
                    </Options>
                </ToggleBox>
            </D2>
            <ReservToggle />

            <StyledLoginButton>
                <LoginButton input="열차조회" />
            </StyledLoginButton>
        </Container>
    );
};
export default ReservBox;

const Container = styled.div`
    background-color: white;
    width: 327px;
    height: 386px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* gap: 30px; */
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    box-shadow: 4px 7px 12px rgba(0, 0, 0, 0.25);
    margin-bottom: 36px;
    /* padding: 20px; */
`;
const D1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: red; */
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
    /* background-color: red; */
    width: 250px;
    margin-bottom: 28px;
    div {
        color: #808080;
    }
    gap: 30px;
`;
const Title = styled.div`
    width: 300px;
    font-size: 28px;
    font-weight: bold;
    color: #4169e1;
    /* background-color: red; */
    margin-top: 18px;
    margin-bottom: 36px;
`;

const ToggleBox = styled.div`
    position: relative;
    width: 120px;
    text-align: center;
    cursor: pointer;
`;

const Selected = styled.div`
    padding: 8px;
    font-size: 32px;
    color: #000000;
    font-weight: bolder;

    /* background-color: #f0f0f0; */
    /* border: 1px solid #ddd; */
    /* border-radius: 4px; */
`;

const Options = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: none;
    z-index: 10;

    ${ToggleBox}:hover & {
        display: block;
    }
`;
const Option = styled.div`
    padding: 8px;
    cursor: pointer;
    &:hover {
        background-color: #f3f3f3;
    }
`;
const StyledLoginButton = styled.div`
    margin-top: 20px;
    margin-bottom: 18px;

    button {
        width: 300px;
        height: 40px;
        font-size: 16px;
        border: none;
        cursor: pointer;
    }
`;
