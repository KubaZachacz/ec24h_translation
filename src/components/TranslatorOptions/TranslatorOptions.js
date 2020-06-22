import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
  },
  text: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

const TranslatorOptions = ({
  languages,
  source,
  onSourceChange,
  copySource,
  onCopySourceChange,
  fileType,
  setFileType,
}) => {
  const classes = useStyles();

  const srcOptions = languages.map(({ name, code }) => (
    <MenuItem key={`item-${code}`} value={code}>
      {name}
    </MenuItem>
  ));

  return (
    <div className="TranslatorOptions">
      <Typography className={classes.text}>General settings</Typography>
      <TextField
        label="File type"
        variant="outlined"
        value={fileType}
        onChange={(e) => {
          setFileType(e.target.value);
        }}
      />

      <Typography className={classes.text}>Translation options</Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="translation-src-label">translation source</InputLabel>
        <Select
          labelId="translation-src-label"
          id="translation-src"
          value={source}
          onChange={(e) => onSourceChange(e.target.value)}
          label="translation source"
        >
          {srcOptions}
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="copy-src-label">copy source</InputLabel>
        <Select
          labelId="copy-src-label"
          id="copy-src"
          value={copySource}
          onChange={(e) => onCopySourceChange(e.target.value)}
          label="copy source"
        >
          {srcOptions}
        </Select>
      </FormControl>
    </div>
  );
};

export default TranslatorOptions;
