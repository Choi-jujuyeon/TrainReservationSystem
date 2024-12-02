import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReservCheckModal from "../components/ReservCheckModal";
import Loading from "./Loading";
const PaymentMethod = () => {
    const [selectedOption, setSelectedOption] = useState("mastercard");
    const [paymentOptions, setPaymentOptions] = useState([
        { id: "mastercard", label: "Mastercard xxxx xxxx xxxx 1234" },
        { id: "visa", label: "Visa xxxx xxxx xxxx 9876" },
        { id: "amex", label: "Amex xxxx xxxx xxxx 5678" },
        { id: "paypal", label: "PayPal (user@example.com)" },
    ]);
    const [newCardNumber, setNewCardNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false); // Add state for modal visibility
    const navigate = useNavigate();

    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false); // Stop loading after 3 seconds
            setShowModal(true); // Show modal after loading is complete
        }, 3000);
    };

    // 새로운 카드 추가
    const handleAddCard = () => {
        if (newCardNumber.trim()) {
            const newCard = {
                id: `card${paymentOptions.length + 1}`,
                label: `Card xxxx xxxx xxxx ${newCardNumber.slice(-4)}`,
            };
            setPaymentOptions([...paymentOptions, newCard]);
            setNewCardNumber(""); // 입력 필드 초기화
        }
    };

    // 카드 삭제
    const handleDeleteCard = (id) => {
        setPaymentOptions(paymentOptions.filter((option) => option.id !== id));
        if (selectedOption === id) {
            setSelectedOption(""); // 삭제된 카드가 선택된 경우 초기화
        }
    };

    if (loading) {
        return <Loading text="Loading..." />;
    }

    return (
        <Container>
            <PaymentContainer>
                <TitleDiv>
                    <Link to="/reservation">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/icons/back.svg`}
                            alt="alarm"
                        />
                    </Link>
                    <div>STEP</div>
                </TitleDiv>
                <Process>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/step01.svg`}
                        alt="alarm"
                    />
                </Process>
                <Title>결제 수단을 선택하세요 :)</Title>
                {paymentOptions.map((option) => (
                    <PaymentOption
                        key={option.id}
                        selected={selectedOption === option.id}
                    >
                        <OptionText
                            onClick={() => setSelectedOption(option.id)}
                        >
                            {option.label}
                        </OptionText>
                        <DeleteButton
                            onClick={() => handleDeleteCard(option.id)}
                        >
                            삭제
                        </DeleteButton>
                    </PaymentOption>
                ))}
                <AddCardSection>
                    <NewCardInput
                        type="text"
                        placeholder="새로운 결제 카드 추가하기"
                        value={newCardNumber}
                        onChange={(e) => setNewCardNumber(e.target.value)}
                    />
                    <AddCardButton onClick={handleAddCard}>
                        카드 추가
                    </AddCardButton>
                </AddCardSection>
                <CheckboxWrapper>
                    <input type="checkbox" id="same-address" />
                    <label htmlFor="same-address">결제에 동의합니다</label>
                </CheckboxWrapper>
                <StyledLoginButton>
                    <StyledLinkButton to="#" onClick={handleLoading}>
                        결제하기{" "}
                    </StyledLinkButton>
                </StyledLoginButton>
            </PaymentContainer>
            {showModal && (
                <ReservCheckModal
                    title="예약 완료!"
                    message={
                        "승차권 예매가 완료되었습니다!\n 즐거운 여행 되세요 :)"
                    }
                    links={[
                        {
                            text: "홈으로 돌아가기",
                            to: "/main",
                            primary: false,
                        },
                        {
                            text: "예약 조회하기",
                            to: "/myticket",
                            primary: true,
                        },
                    ]}
                    onClose={() => setShowModal(false)} // Close the modal when clicked outside
                />
            )}
        </Container>
    );
};

export default PaymentMethod;

const Container = styled.div`
    width: 375px;
    height: 812px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const StyledLoginButton = styled.div`
    margin-top: 20px;
    margin-bottom: 18px;

    button {
        /* width: 300px; */
        /* height: 40px; */
        font-size: 16px;
        border: none;
        cursor: pointer;
    }
`;

const StyledLinkButton = styled(Link)`
    display: flex;
    /* width: 300px; */
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: #006ffd;
    color: white;
    text-decoration: none;
    text-align: center;
    border-radius: 14px;

    &:hover {
        background-color: #0056cc;
    }
`;

const TitleDiv = styled.div`
    width: 327px;
    height: 37px;
    /* background-color: red; */
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 113px;

    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
`;
const Process = styled.div`
    width: 327px;
    height: 83px;
    border-radius: 107px;
    display: flex;
    margin-bottom: 100px;
`;
// Styled Components
const PaymentContainer = styled.div`
    /* width: 100%; */
    width: 327px;
    /* height: 812px; */
    /* padding: 20px; */
    /* border-radius: 12px; */
`;

const Title = styled.h2`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
`;

const PaymentOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ selected }) => (selected ? "#006FFD" : "#ffffff")};
    color: ${({ selected }) => (selected ? "#ffffff" : "#000000")};
    border: ${({ selected }) => (selected ? "none" : "1px solid #d4d6dd")};
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 8px;

    &:hover {
        background-color: ${({ selected }) =>
            selected ? "#0056CC" : "#f0f0f0"};
    }
    /* width: 100%; */
`;

const OptionText = styled.div`
    font-size: 16px;
    font-weight: 500;
    flex: 1;
`;

const DeleteButton = styled.button`
    background-color: #ff4d4f;
    color: #ffffff;
    font-size: 12px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    padding: 6px 10px;
    cursor: pointer;

    &:hover {
        background-color: #e03a3c;
    }
`;

const AddCardSection = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
`;

const NewCardInput = styled.input`
    flex: 1;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #d4d6dd;
    border-radius: 8px;

    &:focus {
        outline: none;
        border-color: #006ffd;
    }
`;

const AddCardButton = styled.button`
    background-color: #006ffd;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
        background-color: #0056cc;
    }
`;

const CheckboxWrapper = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        cursor: pointer;
    }

    label {
        font-size: 14px;
        color: #333333;
    }
`;
