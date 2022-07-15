import styled, { css } from "styled-components";

export default function Home() {
    return (
        <>
            <Header>
                TwoNotes
            </Header>
            <Container>
                <Container main>

                </Container>
            </Container>
        </>
    );
}

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100px;
    box-shadow: 0px 3px 10px 0px #3E3E3E;
    background-color: #14213D;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FCA311;
    font-family: 'Big Shoulders Inline Text', cursive;
    font-weight: 200;
    font-size: 105px;
`

const Container = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;

    ${props => props.main && css`
        width: 70%;
        height: 1000px;
        background-color: #E5E5E5;
    `}
`