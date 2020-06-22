import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TableRow,
  TableCell,
  TableHead as MuiTableHead,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { defaultColumns } from "consts/consts";

const useStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
    alignItems: "center",
  },
  label: {
    fontSize: 10,
  },
}));

const TableHead = ({ source, languages, onLanguageChange }) => {
  const classes = useStyles();

  const defCols = defaultColumns.map((col) => (
    <TableCell
      style={{ minWidth: col.width ? col.width : "auto" }}
      key={`col-${col.name}`}
    >
      {col.name}
    </TableCell>
  ));
  const langCols = languages.map(({ name, key, code, autoTranslate }) => (
    <TableCell key={`col-${name}`}>
      <div>
        <div className={classes.row}>
          <div className={classes.langTitle}>{name}</div>
          <FormControlLabel
            control={
              <Checkbox
                checked={autoTranslate}
                disabled={code === source}
                onChange={() =>
                  onLanguageChange(key, "autoTranslate", !autoTranslate)
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
          />
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
