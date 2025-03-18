import { UseLanguage} from "./LanguageContext"


const LanguageSelector=()=>{
    const {language,changeLanguage}=UseLanguage()
    const handleChangeLanguage=(e)=>{
        changeLanguage(e.target.value)
    }

    return(
        <>
        <label>select language:</label>
        <select value={language} onChange={handleChangeLanguage}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
        </select>
        </>
    )

}


export default LanguageSelector