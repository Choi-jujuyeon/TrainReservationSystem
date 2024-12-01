import styled from "styled-components";
import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <NavigationCard>
            <Link to="/main">
                <Tab>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/home.svg`}
                        alt="home"
                    />
                    <span>홈</span>
                </Tab>
            </Link>
            <Link to="/seatInfo">
                <Tab>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/seats.svg`}
                        alt="seats"
                    />
                    <span>좌석번호</span>
                </Tab>
            </Link>
            <Link to="/myticket">
                <Tab>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/ticket.svg`}
                        alt="ticket"
                    />
                    <span>나의 티켓</span>
                </Tab>
            </Link>
        </NavigationCard>
    );
};

export default Navigation;

const NavigationCard = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
    background-color: rgb(255, 255, 255);
    /* padding: 15px 20px; */
    border-radius: 33px;
    z-index: 9999999;
    bottom: 0px;
    position: absolute;
    margin: auto;
`;

const Tab = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    overflow: hidden;
    background-color: rgb(252, 252, 252);
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
        background-color: rgb(223, 223, 223);
    }

    img {
        width: 24px;
        height: 24px;
        margin-bottom: 3px;
    }

    span {
        font-size: 12px;
        font-weight: bold;
        color: #808080;
        text-align: center;
    }
`;
