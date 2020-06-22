import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField } from "@material-ui/core";
import {
  defaultSource,
  defaultLanguages,
  fileType,
  defaultFileType,
  defaultActions,
  defaultCopySource,
} from "consts/consts";
import TranslatorTable from "components/TranslatorTable/TranslatorTable";
import TranslatorOptions from "components/TranslatorOptions/TranslatorOptions";
import TranslatorActions from "components/TranslatorActions/TranslatorActions";
import TranslatorModal from "components/TranslatorModal/TranslatorModal";
import { translate } from "utils/translate";
import { formatQuery } from "utils/formatQuery";

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
  const [copySource, setCopySource] = useState(defaultCopySource);
  const [languages, setLanguages] = useState(defaultLanguages);
  const [translations, setTranslations] = useState([]);

  const [modalData, setModalData] = useState(defaultModalData);
  const [isModal, setIsModal] = useState(false);

  const [output, setOutput] = useState("");

  const onSettingChange = (key, value) => {
    const newLanguages = [...languages];
    const langId = languages.findIndex((el) => el.key === key);

    newLanguages[langId] = {
      ...languages[langId],
      setting: value,
    };

    setLanguages(newLanguages);
  };

  const onSourceChange = (code) => {
    const lang = languages.find((el) => el.code === code);

    onSettingChange(lang.key, "input");
    setSource(code);
  };

  const onCopySourceChange = (code) => {
    setCopySource(code);
  };

  const onOpenModal = () => {
    const inputLanguages = languages.filter(
      ({ setting }) => setting === "input"
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

    const pendingTranslationData = languages.map(async (lang) => {
      const langModalData = modalTranslationData.find((item) => {

        return item.key === lang.key;
      });

      let text = "";
      if (!!langModalData) {
        text = langModalData.text;
      } else if (lang.setting === "auto"){
        text = await translate(srcText, source, lang.code);
      } else if (lang.setting === "copy"){
        text = "--copy-text--";
      }
      
      return {
        ...lang,
        text,
      };
    });

    const rawTranslationData = await Promise.all(pendingTranslationData);

    const copySourceTxt = rawTranslationData.find(({code}) => code === copySource).text;
    
    const translationData = rawTranslationData.map(lang => {
      let {text} = lang;
      if(text === "--copy-text--") {
        text = copySourceTxt;
      }
      return ({
        ...lang,
        text
      })
    })

    setTranslations([
      ...translations,
      {
        ...data,
        translationData,
      },
    ]);
  };

  const onEditTranslation = () => {};

  const onExport = () => {
    let output = ""
    for (let trans of translations) {
      const {action, key, translationData} = trans;
      for (let lang of translationData) {
        output = output + "\n" + formatQuery(action, lang.key, lang.name, fileType, key, lang.text);
      }
    }

    setOutput(output);
  }

  return (
    <div className={classes.root}>
      <TranslatorOptions
        {...{
          languages: defaultLanguages,
          source,
          onSourceChange,
          copySource,
          onCopySourceChange,
          fileType,
          setFileType,
        }}
      ></TranslatorOptions>
      <TranslatorTable
        {...{ source, languages, onSettingChange, translations }}
      ></TranslatorTable>
      <TranslatorActions {...{ onOpenModal, onExport }} />
      <textarea 
        value={output}
      />
      <TranslatorModal
        {...{ isModal, modalData, setIsModal, onAddTranslation }}
      />
    </div>
  );
};

export default Translator;
