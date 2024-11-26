import styled from "styled-components";

const Header = () => {
    return (
        <Container>
            <Icons>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/signal.svg`}
                    alt="signal"
                />
            </Icons>
            <Icons>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/wifi.svg`}
                    alt="wifi"
                />
            </Icons>
            <Icons>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/battery.svg`}
                    alt="battery"
                />
            </Icons>
        </Container>
    );
};
export default Header;

const Container = styled.div`
    width: 375px;
    height: 44px;
    /* background-color: #f3eaea; */
    //top: 0;
    margin-top: 0%;
    display: flex;
    justify-content: end;
    align-items: center;
`;
const Icons = styled.div`
    margin-right: 5px;
    &:last-child {
        margin-right: 15px;
    }
`;
