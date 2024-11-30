import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";

const SelectReservation = () => {
    return (
        <Container>
            {/* Train List Section */}
            <Section>
                <Title>
                    가는 열차 조회
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/search.svg`}
                        alt="search"
                    />
                </Title>
                <TrainList>
                    <TrainRow>
                        <TrainInfo>
                            <div>KTX 001</div>
                            <div>05:13 - 07:49</div>
                        </TrainInfo>
                        <Price>₩53,800</Price>
                    </TrainRow>
                    <TrainRow>
                        <TrainInfo>
                            <div>KTX 003</div>
                            <div>05:27 - 07:58</div>
                        </TrainInfo>
                        <Price>₩53,800</Price>
                    </TrainRow>
                    <TrainRow>
                        <TrainInfo>
                            <div>무궁화호 1301</div>
                            <div>05:54 - 11:38</div>
                        </TrainInfo>
                        <Price style={{ color: "#aaa" }}>매진</Price>
                    </TrainRow>
                    <TrainRow>
                        <TrainInfo>
                            <div>KTX 005</div>
                            <div>05:58 - 08:42</div>
                        </TrainInfo>
                        <Price>₩59,400</Price>
                    </TrainRow>
                </TrainList>
            </Section>

            {/* Seat Selection Section */}
            <Section>
                <Title>
                    좌석 선택하기
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/search.svg`}
                        alt="search"
                    />
                </Title>
                <SeatSelection>
                    <SeatGrid>
                        {[...Array(20)].map((_, index) => (
                            <Seat key={index} available={index % 5 !== 0}>
                                {index + 1}
                            </Seat>
                        ))}
                    </SeatGrid>
                </SeatSelection>
            </Section>
            <Navigation />
        </Container>
    );
};
export default SelectReservation;

const Container = styled.div`
    /* font-family: Arial, sans-serif; */
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #f3f1f1;
    border-radius: 25px;
`;

const Section = styled.div`
    margin: 16px;
`;

const Title = styled.div`
    margin-top: 57px;
    margin-bottom: 18px;
    gap: 8px;
    display: flex;
    font-size: 24px;
    font-weight: bold;
    margin-left: 14px;
    margin-right: 14px;
`;
const TrainList = styled.div`
    /* border: 1px solid #ccc; */
    /* border-radius: 8px; */
    /* overflow: hidden;s */
    background-color: #fff;
    /* background-color: red; */
    background-color: white;
    width: 327px;
    /* height: 386px; */
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    /* align-items: center; */
    /* gap: 30px; */
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    box-shadow: 4px 7px 12px rgba(0, 0, 0, 0.25);
    margin-bottom: 36px;

    /* padding: ; */
`;

const TrainRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #eee;
    &:last-child {
        border-bottom: none;
    }
`;

const TrainInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
`;

const Price = styled.div`
    font-size: 14px;
    color: #f55;
    font-weight: bold;
`;

const SeatSelection = styled.div`
    margin: 16px;
    padding: 16px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const SeatGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
`;

const Seat = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.available ? "#fff" : "#ccc")};
    border: 1px solid #aaa;
    border-radius: 4px;
    cursor: ${(props) => (props.available ? "pointer" : "not-allowed")};
    &:hover {
        background-color: ${(props) => (props.available ? "#e0e0e0" : "#ccc")};
    }
`;
