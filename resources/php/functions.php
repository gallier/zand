<?php
/*
    INPUT en OUTPUT HTML CONTROL:
    input:  1 toegestaane html-tags
            2 htmlenteties (< & >)
    output: 1 html_entity_decode (< & >)
*/
function controlInput($input, $type) {
    /*
        controleert en corrigeert eventueel een inputstring
        arg. $input: string, input
            $type: string, type input (str_txt, str_html, str_mail, int, number, bool)
        return: de gecontroleerde en gecorrigeerde waarde
    */
    //print "<p>constrolInput: $input, $type</p>"; // TEST

    if (is_string($input) && substr($type, 0,4) == 'str_') {                // string
        $returnValue = null;
        $input = trim($input);

        if ($type == 'str_txt') {                          // txt
            $input = strip_tags($input, '');
            $input = htmlspecialchars($input, ENT_COMPAT, "UTF-8"); 
        }
        else if ($type == 'str_html') {                    // html
            //$input = filterHtml($input); 
            $input = strip_tags($input, '<br><sup><sub>');  
            //$input = toHtmlChar($input); 
            //$input = htmlspecialchars($input, ENT_COMPAT,'ISO-8859-1', true);
            $tekst = htmlentities($tekst);   
        }
        else if ($type == 'str_mail') {                    // email
            $input -= filter_var($input, FILTER_VALIDATE_EMAIL);
        }
        else {
            return false;
        }

        // + + + + + + + + + + get_magic_quotes_gpc !!!
        if (!get_magic_quotes_gpc()) {
            $input = addslashes($input);
            //print '<p>get_magic_quotes_gpc</p>'; // <- - - - - - - - - - - - - -  -TEST TEST TEST
        }
        
        //$returnValue = mysqli_real_escape_string($link, $input);
        $returnValue = $input;
    }
    else if ($type == 'int') {                          // int
        if (is_numeric($input)) {
            $returnValue = (int) $input;
        }
        else {
            return false;
        }
    }
    else if ($type == 'number') {                       // number
        if (is_numeric($input)) {
            $returnValue = floatval($input);
        }
        else {
            return false;
        }
    }
    else if ($type == 'bool') {                         // bool
        /*if ($input = is_bool($input)) {
            $returnValue = $input;
        }
        else {
            return false;
        }*/
        if ($input == 'true') {
            $returnValue = true;
        }
        else {
            $returnValue = false;
        }
    }
    else {
        return false;
    }
    //print "<p>constrolInput<br>$input, $type, $returnValue</p>"; // TEST

    return $returnValue;
}

function filterHtml($tekst) {
    $tagsAllowed = '<h2><h3><h4><p><br></h3><ul><ol><li><b><i><u><a><hr>';
    strip_tags($tekst, $tagsAllowed);
    return $tekst;
}

function toHtmlChar($tekst) {
    $tekst = str_replace(array('ë','ï','ö','é','è'),array('&euml','&iuml','&ouml','&eacute','&egrave'),$tekst);
    //print "<p>special: $tekst</p>";
    return $tekst;
}

function outputControl($tekst) {
    //$input = htmlspecialchars($input, ENT_COMPAT,'ISO-8859-1', true);
    $tekst = html_entity_decode($tekst);  
    //$tekst = htmlspecialchars_decode($tekst, ENT_COMPAT);

    if (!get_magic_quotes_gpc()) {				// controleer server-instellingen
        $tekst = stripslashes($tekst);			//	bijzondere tekens 'escapen'
    }
    return $tekst;
}

function convertDatum($datum) {
    /*
         functie converteert een datrum van het formaat dd-mm-yyyy -> yyyy-mm-dd
             of van yyyy-mm-dd -> dd-mm-yyyy
         arg. $datum: string - in een datum formaat yyyy-mm-dd of dd-mm-yyyy
         retourneert een string - in een datum formaat yyyy-mm-dd of dd-mm-yyyy
    */
    $showtijd = false;

    if (strlen($datum) > 10) {
        $tijd = "<span class='tijd'>" . substr($datum,11,8) . "</span>";
        if (strlen($datum) > 19) { $showtijd = true; }
    }
    else  {
        $tijd = '';
    }
    if(substr($datum,2,1) == '-') {
        // convert dd-mm-yyyy -> yyyy-mm-dd
        $dag = substr($datum,0,2);
        $maand = substr($datum,3,2);
        $jaar = substr($datum,6,4);
        $datum = $jaar.'-'.$maand.'-'.$dag;
    }
    else if (substr($datum,4,1) == '-') {
        // convert yyyy-mm-dd -> dd-mm-yyyy
        $jaar = substr($datum,0,4);
        $maand = substr($datum,5,2);
        $dag = substr($datum,8,2);
        $datum = $dag.'-'.$maand.'-'.$jaar;
        if ($showtijd) {
            $datum .= ' ' . $tijd;
        }
    }
    return $datum;
}

function convertSpaceToUnderscore($name, $token='') {
    $newName = '';
    if ($token == null || $token == '') {
        $token = '-';
    }
    for($i = 0; $i < strlen($name); $i++) {
        if ($name[$i] == ' ') {
            $newName .= $token;
        }
        else {
            $newName .= $name[$i];
        }
    }
    return $newName;
}

function ifBool($ifArg) {
    if($ifArg == 1) {
        return 'true';
    }
    else {
        return 'false';
    }
}

function contenToDb($mysqlLink, $content, $type, $id, $update) {
    /*
        plasts (html-)content in de database tabel 'tekst'
        $mysqlLink: dblink
        $content - string, de content
        $type - string, type content (is de naam van het betreffende veld in de affiche)
        $id - int, affiche id
        $update - bool, bepaalt insert of update van de data
    */
    if (strlen($content) > 0 && $content != 'undefined') {
        if ($update > 0) {                  // try to update
            // control if content exists
            $controlContent = '';
            $select_tekst_query = "SELECT tekst_id,
                                tekst
                            FROM tekst 
                            WHERE affiche_id = '$id'
                            AND teksttype = '$type'";
        
            $dbResult = mysqli_query($mysqlLink, $select_tekst_query);
            if ($dbResult) {
                $row = mysqli_fetch_array($dbResult);
                $controlContent   = outputControl($row['tekst']);
                mysqli_free_result($dbResult);
            }
            else {
                $errorMsg = _msgDbSelectError;
            }

            if (strlen($controlContent) <= 0) {        // insert
                $content_query = "INSERT INTO tekst (affiche_id, teksttype, tekst)
                    VALUES ('" . $id . "',
                    '" . $type . "',  
                    '" . $content . "'
                    )";
            }
            else {                              // update
                $content_query = "UPDATE tekst SET tekst = '" . $content . "' 
                        WHERE teksttype = '" . $type . "' AND affiche_id = '" . $id . "'";
            }
        }
        else {                                  // insert
            $content_query = "INSERT INTO tekst (affiche_id, teksttype, tekst)
                    VALUES ('" . $id . "',
                    '" . $type . "',  
                    '" . $content . "'
                    )";
        }
        
        $dbResult = mysqli_query($mysqlLink, $content_query);
        if (!dbResult) {
            $errorMsg = _msgDbNotSaved;
        }

        //print "<p>query: ".$content_query.'</p>';
    }
}
function getContenFromDb($mysqlLink, $type, $id) {
    /*
        leest (html-)content uit de database tabel 'tekst'
        $mysqlLink: dblink
        $content - string, de content
        $type - string, type content (is de naam van het betreffende veld in de affiche)
        $id - int, affiche id
        return: $content: string, (html-)text
    */
    if ($id > 0 && $type != '') {
        $select_tekst_query = "SELECT tekst_id,
                                tekst
                            FROM tekst 
                            WHERE affiche_id = '$id'
                            AND teksttype = '$type'";
        
        $dbResult = mysqli_query($mysqlLink, $select_tekst_query);
        if ($dbResult) {
            $row = mysqli_fetch_array($dbResult);
            $content = outputControl($row['tekst']);
            mysqli_free_result($dbResult);
        }
        else {
            $errorMsg = _msgDbSelectError;
        }

        //print "<p>query: ".$select_tekst_query.'<br>result5: '.$content.'</p>';
        if ($dbResult) {
            return $content; 
        }
        else {
            return '';
        }
        
    }
}
