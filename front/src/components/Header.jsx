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

// const Container = styled.div`
//     width: 375px;
//     height: 44px;
//     /* background-color: #f3eaea; */
//     //top: 0;
//     position: fixed;
//     /* top: 0; */
//     /* margin-top: 0%; */
//     display: flex;
//     justify-content: end;
//     align-items: center;
// `;
const Container = styled.div`
    width: 100%;
    height: 44px;
    position: absolute; /* 부모 기준 고정 */
    top: 0; /* 부모 상단에 고정 */
    display: flex;
    justify-content: end;
    align-items: center;
    margin-right: 0px;

    z-index: 100;
`;

const Icons = styled.div`
    margin-right: 5px;
    &:last-child {
        margin-right: 15px;
    }
`;
