import styled from "styled-components";

//
export const ButtonStyled = styled.button`
    background-color: blue;
    padding: 5px;
    &:hover{
        cursor: pointer;
        background-color: aliceblue;
    }
`
//Miras alma işlemi, yapılmaktadır.
export const LargeButtonStyled = styled(ButtonStyled)`
    padding: 15px;
    border: 3px solid red;
`