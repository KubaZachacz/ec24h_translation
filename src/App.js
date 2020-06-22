import React from "react";
import "fontsource-roboto";
import "./App.css";
import Translator from "containers/Translator/Translator";
import { translate } from "utils/translate";

function App() {
  const sourceLang = "pl";
  const targetLang = "en";
  const sourceText = "Witaj świecie";

  const getTranslation = async () => {
    const translatedText = await translate(sourceText, sourceLang, targetLang);
    console.log(translatedText);
  };

  // getTranslation();

  return (
    <div className="App">
      <Translator></Translator>
    </div>
  );
}

export default App;
