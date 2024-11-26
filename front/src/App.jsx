import styled from "styled-components";
import Header from "./components/Header";
import StyledButton from "./components/StyledButton";
function App() {
    return (
        <Wrapper>
            <Container>
                <Header />
                <StyledButton />
            </Container>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 375px;
    height: 812px;
    background-color: #f0f0f0;
    margin: auto;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 375px;
    height: 812px;
    background-color: #ffffff;
    border-radius: 32px;
    box-shadow: 2px 10px 20px 10px #e8e8e9;
    border: 10px solid #f9f7f7;
`;
