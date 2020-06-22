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
} from "@material-ui/core";
import { defaultActions } from "consts/consts";

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

  useEffect(() => {
    setState(modalData);
  }, [modalData]);

  const { action, key, translationData } = state;

  const onActionChange = (e) => {
    setState({ ...state, action: e.target.value });
  };

  const onKeyChange = (e) => {
    setState({ ...state, key: e.target.value });
  };

  const onLangChange = (e, key) => {
    const newTranslationData = [...translationData];
    const langId = translationData.findIndex((el) => el.key === key);

    newTranslationData[langId] = {
      ...translationData[langId],
      text: e.target.value,
    };

    setState({
      ...state,
      translationData: newTranslationData,
    });
  };

  const handleSave = () => {
    onAddTranslation(state);
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
        {/* <DialogContentText id="alert-dialog-description">XD</DialogContentText> */}
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
        {translationData.map(({ name, text, key }) => (
          <TextField
            className={classes.input}
            label={name}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={`Type ${name} text`}
            variant="outlined"
            value={text}
            onChange={(e) => onLangChange(e, key)}
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
