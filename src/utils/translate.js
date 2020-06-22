export const translate = (sourceText, sourceLang, targetLang) =>
  new Promise((resolve, reject) => {
    const url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" +
      sourceLang +
      "&tl=" +
      targetLang +
      "&dt=t&q=" +
      encodeURI(sourceText);
    setTimeout(() => {
      //   fetch(url)
      //     .then((response) => response.json())
      //     .then((data) => resolve(data[0][0][0]));
      resolve(sourceText + "_tr");
    });
  });
