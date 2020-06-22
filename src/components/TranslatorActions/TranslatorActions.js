import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Add from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  btn: {
    display: "block",
    margin: "8px auto",
    "& svg": {
      verticalAlign: "middle",
    },
  },
}));

const TranslatorActions = ({ onOpenModal }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        onClick={onOpenModal}
      >
        Add text
        <Add />
      </Button>
    </div>
  );
};

export default TranslatorActions;
