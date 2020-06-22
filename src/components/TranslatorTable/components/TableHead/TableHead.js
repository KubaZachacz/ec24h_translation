import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TableRow,
  TableCell,
  TableHead as MuiTableHead,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { defaultColumns, langSettings } from "consts/consts";

const useStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
    alignItems: "center",
  },
  label: {
    fontSize: 10,
  },
  radio: {
    padding: 4,
  }
}));

const TableHead = ({ source, languages, onSettingChange }) => {
  const classes = useStyles();

  const defCols = defaultColumns.map((col) => (
    <TableCell
      style={{ minWidth: col.width ? col.width : "auto" }}
      key={`col-${col.name}`}
    >
      {col.name}
    </TableCell>
  ));
  const langCols = languages.map(({ name, key, code, setting }) => (
    <TableCell key={`col-${name}`}>
      <div>
        <div className={classes.row}>
          {/* <div className={classes.langTitle}>{name}</div> */}
          <FormControl component="fieldset">
            <FormLabel component="legend">{name}</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={setting}
              onChange={(e) => onSettingChange(key, e.target.value)}
            >
              {langSettings.map((item) => (
                <FormControlLabel
                  key={`radio-${item}`}
                  value={item}
                  control={<Radio
                    disabled={code === source}
                    classes={{
                      root: classes.radio,
                    }}
                  />}
                  label={item}
                  classes={{
                    label: classes.label,
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
          {/* <FormControlLabel
            control={
              <Checkbox
                checked={autoTranslate}
                disabled={code === source}
                onChange={() =>
                  onSettingChange(key, "autoTranslate", !autoTranslate)
                }
                name="source"
                color="primary"
                size="small"
              />
            }
            label="auto"
            labelPlacement="top"
            classes={{
              label: classes.label,
            }}
          /> */}
        </div>
      </div>
    </TableCell>
  ));
  const cols = [...defCols, ...langCols];

  return (
    <MuiTableHead className="TableHead">
      <TableRow>{cols}</TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
