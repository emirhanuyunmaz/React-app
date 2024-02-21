import { TextStyled } from "./Text.styled";

//"...otherProps" => ile geri kalan tüm değişkenleri almamızı sağlar
export default function Text ({children ,...otherProps}){
    return(<TextStyled {...otherProps}>
        {children}
    </TextStyled>)
} 