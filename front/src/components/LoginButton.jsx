import styled from "styled-components";
const LoginButton = () => {
    return <Button>Login</Button>;
};
export default LoginButton;

const Button = styled.button`
    background-color: #006ffd;
    height: 48px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid #c5c6cc;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;
