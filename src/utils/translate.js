export const translate = (sourceText, sourceLang, targetLang) =>
  new Promise((resolve, reject) => {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURI(
      sourceText
    )}!&langpair=${sourceLang}|${targetLang}`;

    // "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" +
    // sourceLang +
    // "&tl=" +
    // targetLang +
    // "&dt=t&q=" +
    // encodeURI(sourceText);

    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data.responseData.translatedText));
  });
