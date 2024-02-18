import { createContext, useState } from "react";

//Context oluşturma işlemi.
const ThemeContext = createContext()

//Child bileşenler için bu verilerin gönderileceği yapının oluşması işlemi.
function ThemeContextProvider({children}) {
    const [themeName,setThemeName] = useState("light")

    function handleClick(){
        console.log("clicked handle")
        setThemeName((props) => {
            return props === "light" ? "dark" : "light"
        })
    }

    return(
    <ThemeContext.Provider value={{themeName,handleClick}}>
        {children}
    </ThemeContext.Provider>
    )
}
//Verilerin dışarıdan erişilmesi için yapıldı.
export {
    ThemeContext,
    ThemeContextProvider
}