import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextareaAutosize, Button, Fab } from "@material-ui/core";
import FileCopy from "@material-ui/icons/FileCopy";
import copy from "copy-to-clipboard";

const useStyles = makeStyles((theme) => ({
  textarea: {
    width: "100%",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const TranslatorOutput = ({ output }) => {
  const classes = useStyles();

  const onCopy = () => {
    copy(output);
  };

  return (
    <div className="TranslatorOutput">
      <div className={classes.title}>
        <Typography display="inline">Output</Typography>
        <Fab size="small" onClick={onCopy}>
          <FileCopy fontSize="small" />
        </Fab>
      </div>
      <TextareaAutosize
        value={output}
        rowsMin={3}
        className={classes.textarea}
      />
    </div>
  );
};

export default TranslatorOutput;
