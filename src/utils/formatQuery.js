export const formatQuery = (action, languageId, languageName, fileType, translationKey, translationValue) => {
    let query = "";
    if (action === "INSERT") {
        query =  `INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('${languageId}', '${languageName}${fileType}', '${translationKey}', '${translationValue}', '${translationValue}', '${translationKey}');`;
    }
    // "UPDATE languages_translations SET languages_translations_oryginal_value = '"&A3&"', languages_translations_value = '"&A3&"' WHERE languages_translations_key = '"&$N3&"' AND languages_translations_file = '"&A$1&$M3&"' LIMIT 1;")
    return query;
}

// public function up()
//     {
//         $sql = "DELETE FROM `languages_translations` WHERE `languages_translations_key` IN('CHBN_SHOWROOM_SALONS');";
//         $this->execute($sql);

//         $sql = "INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('1', 'polish.php', 'CHBN_SHOWROOM_SALONS', 'WYSZUKIWANE AUTORYZOWANE SERWISY', 'WYSZUKIWANE AUTORYZOWANE SERWISY', 'CHBN_SHOWROOM_SALONS');	
// INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('9', 'english.php', 'CHBN_SHOWROOM_SALONS', 'SEARCHED LOCATIONS', 'SEARCHED LOCATIONS', 'CHBN_SHOWROOM_SALONS');	
// INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('11', 'espanol.php', 'CHBN_SHOWROOM_SALONS', 'SEARCHED LOCATIONS', 'SEARCHED LOCATIONS', 'CHBN_SHOWROOM_SALONS');	
// INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('12', 'french.php', 'CHBN_SHOWROOM_SALONS', 'SEARCHED LOCATIONS', 'SEARCHED LOCATIONS', 'CHBN_SHOWROOM_SALONS');	
// INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('10', 'german.php', 'CHBN_SHOWROOM_SALONS', 'SEARCHED LOCATIONS', 'SEARCHED LOCATIONS', 'CHBN_SHOWROOM_SALONS');	
// INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('14', 'norwegian.php', 'CHBN_SHOWROOM_SALONS', 'SEARCHED LOCATIONS', 'SEARCHED LOCATIONS', 'CHBN_SHOWROOM_SALONS');	
// INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('13', 'russian.php', 'CHBN_SHOWROOM_SALONS', 'SEARCHED LOCATIONS', 'SEARCHED LOCATIONS', 'CHBN_SHOWROOM_SALONS');	
// INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('15', 'swedish.php', 'CHBN_SHOWROOM_SALONS', 'SEARCHED LOCATIONS', 'SEARCHED LOCATIONS', 'CHBN_SHOWROOM_SALONS');	
// INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('16', 'czech.php', 'CHBN_SHOWROOM_SALONS', 'SEARCHED LOCATIONS', 'SEARCHED LOCATIONS', 'CHBN_SHOWROOM_SALONS');	
// INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('17', 'slovak.php', 'CHBN_SHOWROOM_SALONS', 'SEARCHED LOCATIONS', 'SEARCHED LOCATIONS', 'CHBN_SHOWROOM_SALONS');	
// INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('18', 'italian.php', 'CHBN_SHOWROOM_SALONS', 'SEARCHED LOCATIONS', 'SEARCHED LOCATIONS', 'CHBN_SHOWROOM_SALONS');	
// INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('19', 'hungarian.php', 'CHBN_SHOWROOM_SALONS', 'SEARCHED LOCATIONS', 'SEARCHED LOCATIONS', 'CHBN_SHOWROOM_SALONS');
//         ";
//         $this->execute($sql);

//         $sql = "INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('1', 'polish.php', 'CHBN_SALONS_NOT_FOUND', 'Nie znaleziono serwisu dla podanego kryterium wyszukiwania. Zmień kryteria lub zapoznaj się z pasującymi punktami w innych lokalizacjach.', 'Nie znaleziono serwisu dla podanego kryterium wyszukiwania. Zmień kryteria lub zapoznaj się z pasującymi punktami w innych lokalizacjach.', 'CHBN_SALONS_NOT_FOUND');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('9', 'english.php', 'CHBN_SALONS_NOT_FOUND', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'CHBN_SALONS_NOT_FOUND');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('11', 'espanol.php', 'CHBN_SALONS_NOT_FOUND', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'CHBN_SALONS_NOT_FOUND');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('12', 'french.php', 'CHBN_SALONS_NOT_FOUND', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'CHBN_SALONS_NOT_FOUND');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('10', 'german.php', 'CHBN_SALONS_NOT_FOUND', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'CHBN_SALONS_NOT_FOUND');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('14', 'norwegian.php', 'CHBN_SALONS_NOT_FOUND', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'CHBN_SALONS_NOT_FOUND');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('13', 'russian.php', 'CHBN_SALONS_NOT_FOUND', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'CHBN_SALONS_NOT_FOUND');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('15', 'swedish.php', 'CHBN_SALONS_NOT_FOUND', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'CHBN_SALONS_NOT_FOUND');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('16', 'czech.php', 'CHBN_SALONS_NOT_FOUND', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'CHBN_SALONS_NOT_FOUND');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('17', 'slovak.php', 'CHBN_SALONS_NOT_FOUND', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'CHBN_SALONS_NOT_FOUND');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('18', 'italian.php', 'CHBN_SALONS_NOT_FOUND', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'CHBN_SALONS_NOT_FOUND');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('19', 'hungarian.php', 'CHBN_SALONS_NOT_FOUND', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'No service found for the given search criterion. Change the criteria or see matching points in other locations.', 'CHBN_SALONS_NOT_FOUND');
        
        
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('1', 'polish.php', 'CHBN_SALONS_SEARCH_ALERT', 'Prosimy kliknąć na pole wpisywania i wybrać odpowiednią pozycję z listy', 'Prosimy kliknąć na pole wpisywania i wybrać odpowiednią pozycję z listy', 'CHBN_SALONS_SEARCH_ALERT');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('9', 'english.php', 'CHBN_SALONS_SEARCH_ALERT', 'Please click on the input field and select the appropriate item from the list', 'Please click on the input field and select the appropriate item from the list', 'CHBN_SALONS_SEARCH_ALERT');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('11', 'espanol.php', 'CHBN_SALONS_SEARCH_ALERT', 'Please click on the input field and select the appropriate item from the list', 'Please click on the input field and select the appropriate item from the list', 'CHBN_SALONS_SEARCH_ALERT');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('12', 'french.php', 'CHBN_SALONS_SEARCH_ALERT', 'Please click on the input field and select the appropriate item from the list', 'Please click on the input field and select the appropriate item from the list', 'CHBN_SALONS_SEARCH_ALERT');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('10', 'german.php', 'CHBN_SALONS_SEARCH_ALERT', 'Please click on the input field and select the appropriate item from the list', 'Please click on the input field and select the appropriate item from the list', 'CHBN_SALONS_SEARCH_ALERT');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('14', 'norwegian.php', 'CHBN_SALONS_SEARCH_ALERT', 'Please click on the input field and select the appropriate item from the list', 'Please click on the input field and select the appropriate item from the list', 'CHBN_SALONS_SEARCH_ALERT');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('13', 'russian.php', 'CHBN_SALONS_SEARCH_ALERT', 'Please click on the input field and select the appropriate item from the list', 'Please click on the input field and select the appropriate item from the list', 'CHBN_SALONS_SEARCH_ALERT');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('15', 'swedish.php', 'CHBN_SALONS_SEARCH_ALERT', 'Please click on the input field and select the appropriate item from the list', 'Please click on the input field and select the appropriate item from the list', 'CHBN_SALONS_SEARCH_ALERT');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('16', 'czech.php', 'CHBN_SALONS_SEARCH_ALERT', 'Please click on the input field and select the appropriate item from the list', 'Please click on the input field and select the appropriate item from the list', 'CHBN_SALONS_SEARCH_ALERT');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('17', 'slovak.php', 'CHBN_SALONS_SEARCH_ALERT', 'Please click on the input field and select the appropriate item from the list', 'Please click on the input field and select the appropriate item from the list', 'CHBN_SALONS_SEARCH_ALERT');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('18', 'italian.php', 'CHBN_SALONS_SEARCH_ALERT', 'Please click on the input field and select the appropriate item from the list', 'Please click on the input field and select the appropriate item from the list', 'CHBN_SALONS_SEARCH_ALERT');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('19', 'hungarian.php', 'CHBN_SALONS_SEARCH_ALERT', 'Please click on the input field and select the appropriate item from the list', 'Please click on the input field and select the appropriate item from the list', 'CHBN_SALONS_SEARCH_ALERT');";

//         $this->execute($sql);
//     }
//     public function down()
//     {
//         $sql = "DELETE FROM `languages_translations` WHERE `languages_translations_key` IN('CHBN_SHOWROOM_SALONS');";
//         $this->execute($sql);
        
//         $sql = "INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('1', 'polish.php', 'CHBN_SHOWROOM_SALONS', 'WSZYSTKIE SALONY', 'WSZYSTKIE SALONY', 'CHBN_SHOWROOM_SALONS');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('9', 'english.php', 'CHBN_SHOWROOM_SALONS', 'ALL LOCATIONS', 'ALL LOCATIONS', 'CHBN_SHOWROOM_SALONS');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('11', 'espanol.php', 'CHBN_SHOWROOM_SALONS', 'TODAS LAS LOCALIDADES ', 'TODAS LAS LOCALIDADES ', 'CHBN_SHOWROOM_SALONS');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('12', 'french.php', 'CHBN_SHOWROOM_SALONS', 'TOUTES LES DESTINATIONS ', 'TOUTES LES DESTINATIONS ', 'CHBN_SHOWROOM_SALONS');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('10', 'german.php', 'CHBN_SHOWROOM_SALONS', 'ALLE STANDORTE ', 'ALLE STANDORTE ', 'CHBN_SHOWROOM_SALONS');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('14', 'norwegian.php', 'CHBN_SHOWROOM_SALONS', 'ALLE STEDER ', 'ALLE STEDER ', 'CHBN_SHOWROOM_SALONS');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('13', 'russian.php', 'CHBN_SHOWROOM_SALONS', 'ВСЕ МЕСТА ', 'ВСЕ МЕСТА ', 'CHBN_SHOWROOM_SALONS');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('15', 'swedish.php', 'CHBN_SHOWROOM_SALONS', 'ALLA PLATSER ', 'ALLA PLATSER ', 'CHBN_SHOWROOM_SALONS');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('16', 'czech.php', 'CHBN_SHOWROOM_SALONS', 'Všechny lokality ', 'Všechny lokality ', 'CHBN_SHOWROOM_SALONS');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('17', 'slovak.php', 'CHBN_SHOWROOM_SALONS', 'všetky lokality ', 'všetky lokality ', 'CHBN_SHOWROOM_SALONS');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('18', 'italian.php', 'CHBN_SHOWROOM_SALONS', 'TUTTE LE LOCALITÀ ', 'TUTTE LE LOCALITÀ ', 'CHBN_SHOWROOM_SALONS');	
//         INSERT INTO languages_translations (language_id, languages_translations_file, languages_translations_key, languages_translations_value, languages_translations_oryginal_value, languages_translations_strtr_keys) VALUES ('19', 'hungarian.php', 'CHBN_SHOWROOM_SALONS', 'ALL LOCATIONS ', 'ALL LOCATIONS ', 'CHBN_SHOWROOM_SALONS');";
//         $this->execute($sql);
        
//         $sql = "DELETE FROM `languages_translations` WHERE `languages_translations_key` IN('CHBN_SALONS_NOT_FOUND', 'CHBN_SALONS_SEARCH_ALERT');";
//         $this->execute($sql);
//     }