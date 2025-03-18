
import {createContext,useContext,useState} from "react"

const LanguageContext=createContext()


export const LanguageProvider=({children})=>{
const [language,setlanguage]= useState("en")
const changeLanguage=(newLanguage)=>{
    setlanguage(newLanguage)
}
return(
    <LanguageContext.Provider value={{language,changeLanguage}}>
        {children}
    </LanguageContext.Provider>
)

}
export const UseLanguage = () => {
    return useContext(LanguageContext); // Devuelve el contexto correctamente
  };
  