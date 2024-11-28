import { Link } from "react-router-dom";
import styled from "styled-components";
const LoginButton = ({ input }) => {
    return (
        <Link to="/modal">
            <Button>{input}</Button>
        </Link>
    );
};
export default LoginButton;

const Button = styled.button`
    background-color: #006ffd;
    height: 48px;
    /* width: 100%; */
    width: 327px;
    border-radius: 12px;
    border: 1px solid #c5c6cc;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #0056b3;
    }
`;
