import { createContext, useState } from "react";
import Settings from "./text.json";

const LanguageContext = createContext();
const initLang = "en";
const translations = Settings.text;
const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(initLang);
  const [text, setText] = useState(translations[lang]);
  const handleLang = (e) => {
    if (e.target.value === "en") {
      setLang(translations.es);
      setText(translations.es);
    } else {
      setLang("en");
      setText(translations.en);
    }
  };
  const data = { text, handleLang };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
export { LanguageProvider };
export default LanguageContext;
