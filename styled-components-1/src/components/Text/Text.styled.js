import styled from "styled-components";

//Burada primary ifadesi bir boolen veri içermektedir.
//Short if özelliği de kullanılabilmektedir.
export const TextStyled = styled.p`
    background-color: ${ ({$primary, theme}) =>  $primary ? theme.colors.primary : "blue" };
`