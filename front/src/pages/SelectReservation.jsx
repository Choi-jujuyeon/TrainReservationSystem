import styled from "styled-components";
import { useState } from "react";
import Navigation from "../components/Navigation";

const SelectReservation = () => {
    const [selectedTrain, setSelectedTrain] = useState(null);
    const [showSeatSection, setShowSeatSection] = useState(false);

    const handleTrainSelect = (train) => {
        setSelectedTrain(train);
        setShowSeatSection(true); // 기차 선택 시 좌석 선택 화면을 띄우기
    };

    const toggleSeatSection = () => {
        setShowSeatSection((prev) => !prev);
    };

    const trainData = [
        {
            id: 1,
            name: "KTX 001",
            time: "05:13 - 07:49",
            price: "₩53,800",
            soldOut: false,
        },
        {
            id: 2,
            name: "KTX 003",
            time: "05:27 - 07:58",
            price: "₩53,800",
            soldOut: false,
        },
        {
            id: 3,
            name: "무궁화호 1301",
            time: "05:54 - 11:38",
            price: "매진",
            soldOut: true,
        },
        {
            id: 4,
            name: "KTX 005",
            time: "05:58 - 08:42",
            price: "₩59,400",
            soldOut: false,
        },
        {
            id: 5,
            name: "KTX 007",
            time: "06:00 - 08:20",
            price: "₩56,200",
            soldOut: false,
        },
        {
            id: 6,
            name: "KTX 009",
            time: "06:10 - 08:45",
            price: "₩60,500",
            soldOut: false,
        },
        {
            id: 7,
            name: "무궁화호 1302",
            time: "06:30 - 11:00",
            price: "₩33,800",
            soldOut: false,
        },
        {
            id: 8,
            name: "KTX 011",
            time: "06:50 - 09:15",
            price: "₩57,900",
            soldOut: false,
        },
        {
            id: 9,
            name: "KTX 013",
            time: "07:00 - 09:30",
            price: "₩55,300",
            soldOut: false,
        },
    ];

    // 예약된 좌석 정보
    const reservedSeats = [
        { row: 3, col: 2 },
        { row: 4, col: 2 },
        { row: 6, col: 1 },
        { row: 6, col: 2 },
    ];

    const isSeatReserved = (row, col) => {
        return reservedSeats.some(
            (seat) => seat.row === row && seat.col === col
        );
    };

    // 좌석 레이블 배열 (기둥 포함)
    const seatLabels = [
        "a-01",
        "b-01",
        "c-01",
        "d-01",
        "a-02",
        "b-02",
        "c-02",
        "d-02",
        "a-03",
        "매진",
        "c-03",
        "d-03",
        "a-04",
        "매진",
        "c-04",
        "d-04",

        "a-05",
        "b-05",
        "c-05",
        "d-05",
        "매진",
        "매진",
        "c-06",
        "d-06",
        "a-07",
        "b-07",
        "c-07",
        "d-07",
        "a-08",
        "b-08",
        "c-08",
        "d-08",
    ];

    return (
        <Container>
            {/* Train List Section */}
            <Title>
                가는 열차 조회
                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/search.svg`}
                    alt="search"
                />
            </Title>
            <Section>
                <TrainList>
                    {trainData.map((train) => (
                        <TrainRow
                            key={train.id}
                            onClick={() => handleTrainSelect(train)}
                            selected={selectedTrain?.id === train.id}
                        >
                            <TrainInfo>
                                <div>{train.name}</div>
                                <div>{train.time}</div>
                            </TrainInfo>
                            <Price
                                style={train.soldOut ? { color: "#aaa" } : {}}
                            >
                                {train.soldOut ? "매진" : train.price}
                            </Price>
                        </TrainRow>
                    ))}
                </TrainList>
            </Section>

            {/* Seat Selection Section */}
            {showSeatSection && selectedTrain && (
                <SeatSection>
                    <CloseButton onClick={toggleSeatSection}>X</CloseButton>
                    <Title>좌석 선택하기</Title>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/selectseat.svg`}
                        alt="arrow"
                    />
                    <SeatSelection>
                        <SeatGrid>
                            {seatLabels.map((label, index) => {
                                const row = Math.floor(index / 4); // 0부터 7까지의 행
                                const col = index % 4; // 각 행에 대해 0부터 3까지 열
                                const isReserved = isSeatReserved(
                                    row + 1,
                                    col + 1
                                );
                                const isPillar = label === "기둥"; // 기둥 확인

                                return (
                                    <Seat
                                        key={index}
                                        available={!isReserved && !isPillar}
                                        style={
                                            isPillar
                                                ? { backgroundColor: "#ccc" }
                                                : {}
                                        }
                                    >
                                        {isPillar ? "기둥" : label}
                                    </Seat>
                                );
                            })}
                        </SeatGrid>
                    </SeatSelection>
                </SeatSection>
            )}

            <Navigation />
        </Container>
    );
};

export default SelectReservation;

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f3f1f1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;

const Section = styled.div`
    margin: 5px;
    border-radius: 25px;
`;

const Title = styled.div`
    margin-top: 24px;
    margin-bottom: 18px;
    gap: 8px;
    display: flex;

    font-size: 24px;
    font-weight: bold;
    margin-left: 14px;
    margin-right: 14px;
`;

const TrainList = styled.div`
    background-color: white;
    width: 327px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 4px 7px 12px rgba(0, 0, 0, 0.25);
    margin-bottom: 36px;
`;

const TrainRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #eee;
    background-color: ${(props) => (props.selected ? "#f0f0f0" : "white")};
    cursor: pointer;
    &:last-child {
        border-bottom: none;
    }
    &:hover {
        background-color: ${(props) =>
            props.selected ? "#f0f0f0" : "#f7f7f7"};
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

const SeatSection = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 29px;
    background-color: white;
    box-shadow: 4px 7px 12px rgba(0, 0, 0, 0.25);
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        height: 200px;
        width: 100%;
    }
`;

const CloseButton = styled.div`
    font-size: 24px;
    font-weight: 500;
    position: absolute;
    top: 105px;
    right: 30px;
    cursor: pointer;
`;

const SeatSelection = styled.div`
    display: flex;
    justify-content: center;
`;

const SeatGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    width: 100%;
    padding: 10px;
    justify-items: center;
`;

const Seat = styled.div`
    width: 70px;
    height: 40px;
    background-color: ${(props) => (props.available ? "#42A5F5" : "#eeeeee")};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: ${(props) => (props.available ? "pointer" : "not-allowed")};
    font-weight: bold;
    font-size: 14px;
    color: white;
`;
