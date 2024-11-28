import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import StartPage from "./pages/StartPage";
import SignUp from "./pages/SignUp";
import SelectModal from "./pages/SelectModal";
import Main from "./pages/Main";
function App() {
    return (
        <BrowserRouter>
            <Wrapper>
                <Container>
                    <Header />
                    <Routes>
                        {/* <StyledButton /> */}
                        {/* <Route path="/" element={<LoginPage />} /> */}
                        <Route path="/" element={<StartPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/modal" element={<SelectModal />} />
                        <Route path="/main" element={<Main />} />
                    </Routes>
                </Container>
            </Wrapper>
        </BrowserRouter>
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
    font-family: roboto;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 375px;
    height: 812px;
    background-color: #ffffff;
    border-radius: 32px;
    box-shadow: 2px 10px 20px 10px #e8e8e9;
    border: 10px solid #f9f7f7;
    position: relative;
`;
