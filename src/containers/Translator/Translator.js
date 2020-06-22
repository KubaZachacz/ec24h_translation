import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField } from "@material-ui/core";
import {
  defaultSource,
  defaultLanguages,
  fileType,
  defaultFileType,
  defaultActions,
} from "consts/consts";
import TranslatorTable from "components/TranslatorTable/TranslatorTable";
import TranslatorOptions from "components/TranslatorOptions/TranslatorOptions";
import TranslatorActions from "components/TranslatorActions/TranslatorActions";
import TranslatorModal from "components/TranslatorModal/TranslatorModal";
import { translate } from "utils/translate";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}));

const defaultModalData = {
  action: defaultActions[0],
  key: "",
  translationData: [],
};

const Translator = (props) => {
  const classes = useStyles();

  const [fileType, setFileType] = useState(defaultFileType);
  const [source, setSource] = useState(defaultSource);
  const [languages, setLanguages] = useState(defaultLanguages);
  const [translations, setTranslations] = useState([]);

  const [modalData, setModalData] = useState(defaultModalData);
  const [isModal, setIsModal] = useState(false);

  const onLanguageChange = (key, property, value) => {
    const newLanguages = [...languages];
    const langId = languages.findIndex((el) => el.key === key);

    newLanguages[langId] = {
      ...languages[langId],
      [property]: value,
    };

    setLanguages(newLanguages);
  };

  const onSourceChange = (code) => {
    const lang = languages.find((el) => el.code === code);
    console.log(code, lang);
    onLanguageChange(lang.key, "autoTranslate", false);
    setSource(code);
  };

  const onOpenModal = () => {
    const inputLanguages = languages.filter(
      ({ autoTranslate }) => !autoTranslate
    );

    const translationData = inputLanguages.map((lang) => {
      return {
        ...lang,
        text: "",
      };
    });

    const newModalData = {
      ...defaultModalData,
      translationData,
    };

    setModalData(newModalData);
    setIsModal(true);
  };

  const onAddTranslation = async (data) => {
    const modalTranslationData = data.translationData;

    const src = modalTranslationData.find(({ code }) => code === source);
    const srcText = src.text;

    console.log(srcText);

    const translationData = languages.map(async (lang) => {
      const langModalData = modalTranslationData.find((item) => {
        console.log(lang, item);
        return item.key === lang.key;
      });

      let text = "";
      if (!!langModalData) {
        text = langModalData.text;
      } else {
        text = await translate(srcText, source, lang.code);
      }

      return {
        ...lang,
        text,
      };
    });

    setTranslations([
      ...translations,
      {
        ...data,
        translationData,
      },
    ]);
  };

  const onEditTranslation = () => {};

  return (
    <div className={classes.root}>
      <TranslatorOptions
        {...{
          languages: defaultLanguages,
          source,
          setSource: onSourceChange,
          fileType,
          setFileType,
        }}
      ></TranslatorOptions>
      <TranslatorTable
        {...{ source, languages, onLanguageChange, translations }}
      ></TranslatorTable>
      <TranslatorActions {...{ onOpenModal }} />
      <TranslatorModal
        {...{ isModal, modalData, setIsModal, onAddTranslation }}
      />
    </div>
  );
};

export default Translator;
