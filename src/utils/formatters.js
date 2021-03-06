function escapeHtml(string) {
  return string
       .replace(/"/g, String.raw`\"`)
       .replace(/'/g, String.raw`\'`);
}

export const formatInsertQuery = (
  languageId,
  languageName,
  fileType,
  translationKey,
  translationValue
) => {
  const escapedValue = escapeHtml(translationValue);
  let query = `INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('${languageId}', '${languageName}${fileType}', '${translationKey}', '${escapedValue}', '${escapedValue}', '${translationKey}');`;

  return query;
};

export const formatUpdateQuery = (
  languageId,
  languageName,
  fileType,
  translationKey,
  translationValue
) => {
  const escapedValue = escapeHtml(translationValue);
  let query = `UPDATE languages_translations SET languages_translations_oryginal_value = '${escapedValue}', languages_translations_value = '${escapedValue}' WHERE languages_translations_key = '${translationKey}' AND language_id = '${languageId}';`;

  return query;
};

export const formatDeleteQuery = (keys) => {
  const formattedKeys = keys.map((key) => `'${key}'`).join(",");
  const query = `DELETE FROM \`languages_translations\` WHERE \`languages_translations_key\` IN(${formattedKeys});`;

  return query;
};

export const returnQueryBlock = (queries) => {
  const joinedQueries = queries.join("\n\t");

  const block = `
  $sql= "${joinedQueries}";
  $this->execute($sql);`;

  return block;
};

export const returnFunction = (name, blocks) => {
  const joinedBlocks = blocks.join("\n\n");

  const func = `
  public function ${name}()
  { 
      ${joinedBlocks}
  }
  `;

  return func;
};