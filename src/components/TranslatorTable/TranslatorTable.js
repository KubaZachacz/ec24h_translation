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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflow: "auto",
  },
}));

const TranslatorTable = ({
  source,
  languages,
  onLanguageChange,
  translations,
}) => {
  const classes = useStyles();

  console.log(translations);

  const translationsRows = translations.map(
    ({ action, key, translationData }) => (
      <TableRow key={key}>
        <TableCell>{action}</TableCell>
        <TableCell>{key}</TableCell>
        {translationData.map(({ text }) => (
          <TableCell key={`${key}-${text}`}>{text}</TableCell>
        ))}
      </TableRow>
    )
  );

  const noData = (
    <TableRow>
      <TableCell colSpan={3}>
        <em>No data</em>
      </TableCell>
    </TableRow>
  );

  return (
    <div className={classes.root}>
      <Table>
        <TableHead {...{ source, languages, onLanguageChange }}></TableHead>
        <TableBody>
          {translations.length === 0 ? noData : translationsRows}
        </TableBody>
      </Table>
    </div>
  );
};

export default TranslatorTable;