import styled from "styled-components";
import Navigation from "../components/Navigation";
import ReservBox from "../components/ReservBox";
import Options from "../components/Options";
const Main = () => {
    return (
        <Container>
            <ReservBox />
            <Options />
            <Navigation />
        </Container>
    );
};
export default Main;

const Container = styled.div`
    background-color: #f3f1f1;
    height: 100%;
    border-radius: 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
`;
