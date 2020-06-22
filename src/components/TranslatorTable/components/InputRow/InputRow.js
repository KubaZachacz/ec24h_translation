import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const InputRow = () => {
  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  );
};

export default InputRow;
