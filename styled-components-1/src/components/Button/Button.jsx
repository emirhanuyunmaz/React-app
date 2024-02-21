import { ButtonStyled } from "./Button.styled";

//Children ile içersindeki elemanları alma işlemi yapılmaktadır.
export default function Button ( {children} ){
    return (<ButtonStyled>
        {children}
    </ButtonStyled>)
}