import { createContext,useContext } from "react";

//Witjin Context-Api we can either pass variable or method
export const ThemeContext = createContext(
    {
        themeMode:"light",
        //Method of Dark Mode
        darkTheme:()=>{

        },
        //Method of Light Mode
        lightTheme:()=>{

        }
    })
//Exporting and Storing
export const ThemeProvider = ThemeContext.Provider

//Custom-Hook of useContext
export default function useTheme(){
    return useContext(ThemeContext)
}




