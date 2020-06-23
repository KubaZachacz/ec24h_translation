import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import TableHead from "./components/TableHead/TableHead";
import { defaultColumns, defaultLanguages } from "consts/consts";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflow: "auto",
  },
  cellCol: {
    display: "flex",
    flexDirection: "column"
  },
  prevText: {
    color: 'grey',
  }
}));

const numColumns = defaultColumns.length + defaultLanguages.length;

const TranslatorTable = ({
  source,
  languages,
  onSettingChange,
  translations,
}) => {
  const classes = useStyles();

  console.log(translations);

  const translationsRows = translations.map(
    ({ action, key, translationData, originalData }) => (
      <TableRow key={`row-${key}`}>
        <TableCell>{action}</TableCell>
        <TableCell>{key}</TableCell>
        {translationData.map(({ text, code }, index) => {
          let cell = <TableCell key={`${key}-${code}`}>{text}</TableCell>;
          if (originalData.length > 0) {
            const prevText = originalData[index].text;
            cell = (
              <TableCell key={`${key}-${code}`}>
                <div className={classes.cellCol}>
                  <div>{text}</div>
                  <div className={classes.prevText}>{prevText}</div>
                </div>
              </TableCell>
            );
          }
          return cell;
        })}
      </TableRow>
    )
  );

  const noData = (
    <TableRow>
      <TableCell colSpan={numColumns}>
        <Typography align="center">
          <em>No data</em>
        </Typography>
      </TableCell>
    </TableRow>
  );

  return (
    <div className={classes.root}>
      <Table>
        <TableHead {...{ source, languages, onSettingChange }}></TableHead>
        <TableBody>
          {translations.length === 0 ? noData : translationsRows}
        </TableBody>
      </Table>
    </div>
  );
};

export default TranslatorTable;
