import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { defaultActions } from "consts/consts";
import ReactFileReader from "react-file-reader";

const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom: theme.spacing(2),
  },
}));

const TranslatorModal = ({
  isModal,
  modalData,
  setIsModal,
  onAddTranslation,
}) => {
  const classes = useStyles();

  const handleClose = () => {
    setIsModal(false);
  };

  const [state, setState] = useState(modalData);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setState(modalData);
  }, [modalData]);

  useEffect(() => {
    if (loadedData.length > 0) {
      const newOriginalData = state.originalData.map((lang) => {
        const loadedItem = loadedData.find(
          (item) => item.language_id == lang.key
        )
        console.log(loadedItem)
        const loadedText = loadedItem?.languages_translations_value;

        return {
          ...lang,
          text: loadedText,
        };
      });
      setState({ ...state, originalData: newOriginalData });
      console.log('set', newOriginalData)
    }
  }, [loadedData]);

  const { action, key, translationData, originalData } = state;

  const onActionChange = (e) => {
    setState({ ...state, action: e.target.value });
  };

  const onKeyChange = (e) => {
    setState({ ...state, key: e.target.value });
  };

  const onLangChange = (e, property, key) => {
    const newData = [...state[property]];
    const langId = newData.findIndex((el) => el.key === key);

    newData[langId] = {
      ...newData[langId],
      text: e.target.value,
    };

    setState({
      ...state,
      [property]: newData,
    });
  };

  const handleSave = () => {
    onAddTranslation(state);
  };

  const handleFiles = async (files) => {
    const file = files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        const allLoadedTableData = JSON.parse(reader.result);
        setLoadedData(allLoadedTableData[2]?.data);
      },
      false
    );

    if (file) {
      reader.readAsText(file);
    }
  };

  return (
    <Dialog
      open={isModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">
        Fill the translation data
      </DialogTitle>
      <DialogContent>
        <FormControl variant="outlined" className={classes.input} fullWidth>
          <InputLabel id="query-action-type-label">
            translation source
          </InputLabel>
          <Select
            labelId="query-action-type-label"
            id="query-action-type"
            value={action}
            onChange={onActionChange}
            label="Action type"
          >
            {defaultActions.map((action) => (
              <MenuItem key={`action-${action}`} value={action}>
                {action}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          className={classes.input}
          label="key"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Type translation key"
          variant="outlined"
          value={key}
          onChange={onKeyChange}
          fullWidth
        />
        {state.action === "UPDATE" && (
          <>
            <Typography>Original values</Typography>
            {/* <input type="file" id="input" /> */}
            <ReactFileReader fileTypes={[".json"]} handleFiles={handleFiles}>
              <button className="btn">Upload</button>
            </ReactFileReader>
            {originalData.map(({ name, text, key, code }) => (
              <TextField
                key={`modal-input-${code}`}
                className={classes.input}
                label={name}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder={`Type ${name} text`}
                variant="outlined"
                value={text}
                onChange={(e) => onLangChange(e, "originalData", key)}
                fullWidth
              />
            ))}
            <Typography>Updated values</Typography>
          </>
        )}
        {translationData.map(({ name, text, key, code }) => (
          <TextField
            key={`modal-input-${code}`}
            className={classes.input}
            label={name}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={`Type ${name} text`}
            variant="outlined"
            value={text}
            onChange={(e) => onLangChange(e, "translationData", key)}
            fullWidth
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} color="primary" variant="contained">
          Save
        </Button>
        <Button onClick={handleClose} color="primary" variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TranslatorModal;
