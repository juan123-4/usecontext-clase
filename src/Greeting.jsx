import { UseLanguage} from "./LanguageContext"
const Greeting=()=>{
    const {language}=UseLanguage()
    const greetings={
        en:"Hello",
        es:"Hola",
        fr:"bonjor"
    }
    return (
        <>
        <h2>{greetings[language]}</h2>
        </>
    )
}
export default Greeting