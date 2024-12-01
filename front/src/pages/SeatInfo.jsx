import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";

const SeatInfo = () => {
    const nums = ["001 열차", "002 열차", "003 열차", "004 열차", "005 열차"];
    const [selectedTrain, setSelectedTrain] = useState("-");
    const [isToggled, setIsToggled] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleSelectChange = (e) => {
        setSelectedTrain(e.target.value);
    };

    const handleToggleChange = () => {
        setIsToggled(!isToggled); // Toggle the state
    };

    const toggleModal = () => {
        setShowModal(!showModal); // Toggle modal visibility
    };

    // 선택된 열차 정보 (선택한 열차 번호에 대한 잔여석 정보)
    const remainingSeats = {
        "001 열차": "49석/ 전체 60석",
        "002 열차": "30석/ 전체 50석",
        "003 열차": "10석/ 전체 30석",
        "004 열차": "15석/ 전체 60석",
        "005 열차": "5석/ 전체 50석",
    };

    return (
        <Container>
            <Title>
                좌석 리뷰 검색
                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/search.svg`}
                    alt="search"
                />
            </Title>
            <Select>
                <p>몇 호차 열차인가요?</p>
                <SelectBox value={selectedTrain} onChange={handleSelectChange}>
                    <option value="-">- 열차</option>
                    {nums.map((num) => (
                        <option key={num} value={num}>
                            {num}
                        </option>
                    ))}
                </SelectBox>
            </Select>
            {selectedTrain !== "-" && (
                <Img>
                    <div>
                        {selectedTrain} <br />
                        {remainingSeats[selectedTrain]}
                    </div>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/seatD.svg`}
                        alt="search"
                    />
                </Img>
            )}
            {selectedTrain !== "-" && (
                <Box>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/icons/seatText.svg`}
                            alt="search"
                        />
                        <label className="switch">
                            <input
                                type="checkbox"
                                onChange={handleToggleChange}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                    {isToggled ? (
                        <>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/icons/seatDetailImg.svg`}
                                alt="seatDetailImg"
                                onClick={toggleModal}
                            />
                            {showModal && (
                                <Modal onClick={toggleModal}>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/icons/seatModal.svg`}
                                        alt="seatModal"
                                    />
                                </Modal>
                            )}
                        </>
                    ) : (
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/icons/seatImg.svg`}
                            alt="seatImg"
                        />
                    )}
                </Box>
            )}
            <Navigation />
        </Container>
    );
};

export default SeatInfo;

const Container = styled.div`
    height: 100%;
    background-color: #f3f1f1;
    border-radius: 25px;
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

const Select = styled.div`
    font-size: 16px;
    color: #71727a;
    display: flex;
    justify-content: space-between;
    margin-left: 14px;
    margin-right: 14px;
`;

const SelectBox = styled.select`
    padding: 8px;
    font-size: 16px;
    background-color: #f3f1f1;
    border: none;
    color: #71727a;
`;

const Img = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    background-color: white;
    width: 327px;
    height: 47px;
    gap: 100px;
    border-radius: 20px;
    box-shadow: 4px 7px 12px rgba(0, 0, 0, 0.25);
    font-size: 14px;
`;

const Box = styled.div`
    display: flex;
    position: relative;
    margin: auto;
    margin-top: 18px;
    background-color: white;
    width: 327px;
    height: 500px;
    flex-direction: column;
    align-items: end;
    border-radius: 20px;
    box-shadow: 4px 7px 12px rgba(0, 0, 0, 0.25);
    margin-bottom: 36px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 270px;
            margin-left: 10px;
            margin-top: 12px;
        }
    }

    img {
        width: 90%;
        height: 90%;
        display: flex;
        margin: auto;
    }

    label {
        position: absolute;
        margin-right: 10px;
        margin-top: 20px;
        z-index: 999999;
    }

    /* Style the switch container */
    .switch {
        position: relative;
        width: 30px;
        height: 20px;
        display: inline-block;
    }

    /* Hide the default checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* Style the slider (the toggle background) */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;
        border-radius: 30px;
    }

    /* Style the knob (the circle inside the toggle) */
    .slider:before {
        position: absolute;
        content: "";
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background-color: white;
        transition: 0.4s;
        left: 4px;
        top: 3px;
    }

    /* When the checkbox is checked, change the background and move the knob */
    input:checked + .slider {
        background-color: #006ffd;
    }

    input:checked + .slider:before {
        transform: translateX(10px);
    }
`;
const Modal = styled.div`
    z-index: 999999;
    width: 220px;

    display: flex;
    justify-content: center;
    /* margin-right: 20px; */
    margin-top: 380px;
    position: absolute;
`;
