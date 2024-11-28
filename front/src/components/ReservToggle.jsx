import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const ReservToggle = () => {
    const [selectedYear, setSelectedYear] = useState(
        new Date().getFullYear().toString()
    );
    const [selectedMonth, setSelectedMonth] = useState("1");
    const [selectedDay, setSelectedDay] = useState("1");
    const [selectedTime, setSelectedTime] = useState("05:00");

    // 인원 선택 상태 관리
    const [selectedPeopleType, setSelectedPeopleType] = useState("어른");
    const [selectedPeopleCount, setSelectedPeopleCount] = useState(1);

    // 현재 연도를 기준으로 이후 연도만 표시
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 5 }, (_, i) =>
        (currentYear + i).toString()
    );
    const months = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
    ];
    const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
    const times = ["05:00", "06:00", "07:00", "08:00", "09:00", "10:00"];

    // 인원 수 증가/감소 함수
    const handlePeopleCountChange = (increment) => {
        setSelectedPeopleCount((prev) =>
            increment ? prev + 1 : Math.max(1, prev - 1)
        );
    };

    // 로그인된 사용자 ID 가져오기 (localStorage에서 가져옴)
    const memberId = localStorage.getItem("memberId");

    // 예약 정보 저장 함수
    const handleReservation = async () => {
        if (!memberId) {
            alert("로그인 상태가 아닙니다.");
            return;
        }
        alert(selectedDay+selectedMonth+selectedPeopleCount+parseInt(selectedTime.split(":")[0])+selectedPeopleType+memberId);
        try {
            const reservationData = {
                year: selectedYear,
                month: selectedMonth,
                day: selectedDay,
                time: parseInt(selectedTime.split(":")[0]),
                peopleCount: selectedPeopleCount,
                memberId: memberId, // 로그인된 사용자 ID
            };
        
            // 백엔드 API로 예약 정보 전송
            const response = await axios.post("http://localhost:5000/main", reservationData);

            if (response.status === 201) {
                alert("예약이 완료되었습니다!");
            } else {
                alert("예약에 실패했습니다.");
            }
        } catch (error) {
            console.error("Error making reservation:", error);
            alert("예약 처리 중 오류가 발생했습니다.");
        }
    };

    return (
        <Go>
            <Label>가는날</Label>
            <DatePicker>
                <Select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                >
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}년
                        </option>
                    ))}
                </Select>
                <Select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                >
                    {months.map((month) => (
                        <option key={month} value={month}>
                            {month}월
                        </option>
                    ))}
                </Select>
                <Select
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                >
                    {days.map((day) => (
                        <option key={day} value={day}>
                            {day}일
                        </option>
                    ))}
                </Select>
                <Select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                >
                    {times.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </Select>
            </DatePicker>

            <Label>인원 선택</Label>
            <PeopleSelection>
                <Select
                    value={selectedPeopleType}
                    onChange={(e) => setSelectedPeopleType(e.target.value)}
                >
                    <option value="어른">어른</option>
                    <option value="청소년">청소년</option>
                </Select>
                <PeopleCount>
                    <Button onClick={() => handlePeopleCountChange(false)}>
                        -
                    </Button>
                    <Count>{selectedPeopleCount}명</Count>
                    <Button onClick={() => handlePeopleCountChange(true)}>
                        +
                    </Button>
                </PeopleCount>
            </PeopleSelection>

            <StyledLoginButton>
                <button onClick={handleReservation}>예약하기</button>
            </StyledLoginButton>
        </Go>
    );
};

export default ReservToggle;

const Go = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 290px;
    height: auto;
`;

const Label = styled.p`
    margin: 0;
    font-size: 12px;
    color: #808080;
`;

const DatePicker = styled.div`
    display: flex;
    gap: 8px;
`;

const Select = styled.select`
    font-size: 12px;
    padding: 4px;
    border: none;
    background-color: #fff;
    color: #333;
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: #006ffd;
    }
`;

const PeopleSelection = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

const PeopleCount = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const Button = styled.button`
    font-size: 14px;
    width: 30px;
    height: 30px;
    padding: 0;
    background-color: #fff;
    border: 1px solid #ddd;
    cursor: pointer;
    border-radius: 50%;

    &:hover {
        background-color: #f1f1f1;
    }
`;

const Count = styled.span`
    font-size: 14px;
    color: #333;
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
        background-color: #006ffd;
        color: white;
        border-radius: 10px;
    }
`;
