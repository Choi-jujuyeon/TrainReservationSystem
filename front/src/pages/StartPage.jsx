import styled from "styled-components";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";

const StartPage = () => {
    return (
        <div>
            <Button>
                <Link to="/login">
                    <Spline scene="https://prod.spline.design/xwrHCxW4oaqEhhRE/scene.splinecode" />
                </Link>
            </Button>
            <Text>Train reservation system</Text>
        </div>
    );
};

export default StartPage;

const Button = styled.button`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    margin: auto;
    /* background: linear-gradient(45deg, #00b894, #00cec9, #fdcb6e); */
    border-radius: 30px;
    border: none;
    outline: none;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    position: relative;
    transform: scale(1);
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.4);
    }

    &:active {
        transform: scale(1);
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
    }

    &:before {
        content: "";
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        filter: blur(8px);
        z-index: -1;
        animation: glow 2s infinite ease-in-out;
    }

    @keyframes glow {
        0% {
            box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
        }
        50% {
            box-shadow: 0px 0px 40px rgba(255, 255, 255, 1);
        }
        100% {
            box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
        }
    }
`;

const Text = styled.div`
    font-family: "Roboto";
    margin-top: 36px;
    /* margin-left: 120px; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: fixed; */
    font-size: 20px;
    color: #666666;
    font-weight: bold;
    /* text-transform: uppercase; */
    letter-spacing: 2px;
`;
