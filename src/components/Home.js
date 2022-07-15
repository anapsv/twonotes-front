import styled, { css } from "styled-components";

export default function Home() {
    return (
        <>
            <Header>
                TwoNotes
            </Header>
            <Container>
                <Container main>
                <NewNote>
                <InputNewNote type='text' placeholder="Adicione uma nova nota" />
                <ButtonNewNote><ion-icon name="add-circle"></ion-icon></ButtonNewNote>
                </NewNote>
                <Note>
                    Note do usuário fica aquiiiiiiiii
                    <ion-icon name="trash"></ion-icon>
                </Note>
                <Note>
                    Note do usuário fica aquiiiiiiiii
                    <ion-icon name="trash"></ion-icon>
                </Note>
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
    height: 110px;
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
        padding-top: 180px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
    `}
`

const Note = styled.div`
    width: 85%;
    height: auto;
    margin-bottom: 30px;
    background-color: #FFFFFF;
    text-align: left;
    padding: 10px;
    border-color: #FCA311;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 1px #FBD89F;
    color: #000000;
    font-size: 21px;
    font-weight: 300;
    position: relative;

    ion-icon{
        position: absolute;
        bottom: 10px;
        right: 10px;
        font-size: 18px;
        color: #FCA311;
    }
`

const NewNote = styled.div`
    width: 85%;
    height: 100px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;

    ion-icon{
        font-size: 50px;
        color: #FCA311;
        background-color: #E5E5E5;
    }
`

const InputNewNote = styled.input`
    width: 89%;
    height: 100px;
    background-color: #FFFFFF;
    text-align: left;
    padding: 10px;
    border-style: none;
    border-color: #FCA311;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 1px #FBD89F;
    color: #000000;
    font-size: 25px;
    font-weight: 400;
`

const ButtonNewNote = styled.div`
    width: 10%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #FCA311;
    background-color: #E5E5E5;
`