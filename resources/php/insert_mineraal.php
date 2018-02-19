<?php
require_once('init.php');
/*
if ($_SESSION['cur_vestigingtype'] != 'admin') {
    header('Location:login.php?error=' . _msgNoAdmin);
}
*/
// init
$mineraal = array();
$newMineraalId = 0;
$newInfoId = 0;
$newLinkId = 0;

if (isset($_POST['mineraal_id'])) 	    { $mineraal['mineraal_id']       = ($_POST['mineraal_id']); }
if (isset($_POST['mineraal']))          { $mineraal['mineraal']          = ($_POST['mineraal']); }
if (isset($_POST['formule'])) 	        { $mineraal['formule']		     = ($_POST['formule']); }
if (isset($_POST['systeem']))           { $mineraal['systeem']           = ($_POST['systeem']); }
if (isset($_POST['groep']))             { $mineraal['groep']             = ($_POST['groep']); }
if (isset($_POST['hardheid']))          { $mineraal['hardheid']          = ($_POST['hardheid']); }
if (isset($_POST['kleur']))             { $mineraal['kleur']             = ($_POST['kleur']); }
if (isset($_POST['imgurl']))            { $mineraal['imgurl']            = ($_POST['imgurl']); }
if (isset($_POST['info_id']))           { $mineraal['info_id']           = ($_POST['info_id']); }
if (isset($_POST['info']))              { $mineraal['info']              = ($_POST['info']); }
if (isset($_POST['link_id']))           { $mineraal['link_id']           = ($_POST['link_id']); }
if (isset($_POST['link']))              { $mineraal['link']              = ($_POST['link']); }

// $mineraal['mineraal_id'] = 19;  // <- - - - - - - - - - - - - - - - - - - - - TMP
// $mineraal['mineraal']  = 'Azuriet';
// $mineraal['formule']     = 'Cu<sub>3</sub>(CO)<sub>3</sub>)<sub>2</sub>(OH)<sub>2</sub>';
// $mineraal['systeem']     = 'monoklien';
// $mineraal['groep']     = 'karbonaten';
// $mineraal['hardheid']     = '5,5-4';
// $mineraal['kleur']     = 'blauw (licht tot heel donker), zwart';
// $mineraal['imgurl']     = 'azurite.jpg';
// $mineraal['info_id'] = 15;
// $mineraal['info']     = 'Splijting perfect volgens [011], schelpvormige breuk.<br>Streek blauw.';
// $mineraal['link_id'] = 1;
// $mineraal['link']     = 'https://nl.wikipedia.org/wiki/Azuriet';


// + + + + + + + + + + + + + + + validatie + + + + + + + + + + + + + + +
$formError = '';
if (strlen($vestiging['loginnaam']) < 2) {
    $formError = _valNaam;
}

$mineraal['mineraal_id'] = controlInput($mineraal['mineraal_id'], 'int');
$mineraal['mineraal'] = controlInput($mineraal['mineraal'], 'str_txt');
$mineraal['formule'] = controlInput($mineraal['formule'], 'str_html');
$mineraal['systeem'] = controlInput($mineraal['systeem'], 'str_txt');
$mineraal['telefoon'] = controlInput($mineraal['telefoon'], 'str_txt');
$mineraal['groep'] = controlInput($mineraal['groep'], 'str_txt');
$mineraal['hardheid'] = controlInput($mineraal['hardheid'], 'str_txt');
$mineraal['kleur'] = controlInput($mineraal['kleur'], 'str_txt');
$mineraal['imgurl'] = controlInput($mineraal['imgurl'], 'str_txt');
$mineraal['info'] = controlInput($mineraal['info'], 'str_txt');
$mineraal['link'] = controlInput($mineraal['link'], 'str_txt');
// = = = = = = = = = = = = = = = = DATABASE CONNECTION = = = = = = = = = = = = = = = =
$mysqlLink = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName);
if (mysqli_connect_errno()) {
    die(_msg_NoConnectError);
    $errorMsg = _msg_NoConnectError;
    //$debugMsg = 'db-connect error: '.mysqli_connect_errno().', '.mysqli_connect_error();
}
else {
    mysqli_set_charset($mysqlLink, "utf8");
    
    // + + + + + + + + + + + + + + + control input
    $mineraal['mineraal'] = mysqli_real_escape_string($mysqlLink, trim($mineraal['mineraal']));
    $mineraal['formule'] = mysqli_real_escape_string($mysqlLink, trim($mineraal['formule']));
    $mineraal['systeem'] = mysqli_real_escape_string($mysqlLink, trim($mineraal['systeem']));
    $mineraal['groep'] = mysqli_real_escape_string($mysqlLink, trim($mineraal['groep']));
    $mineraal['hardheid'] = mysqli_real_escape_string($mysqlLink, trim($mineraal['hardheid']));
    $mineraal['kleur'] = mysqli_real_escape_string($mysqlLink, trim($mineraal['kleur']));
    $mineraal['imgurl'] = mysqli_real_escape_string($mysqlLink, trim($mineraal['imgurl']));
    $mineraal['info'] = mysqli_real_escape_string($mysqlLink, trim($mineraal['info']));
    $mineraal['link'] = mysqli_real_escape_string($mysqlLink, trim($mineraal['link']));


    // + + + + + + + + + + + + + + + info queries + + + + + + + + + + + + + + +
    $update_query = "UPDATE info SET
                            info = '"           . $mineraal['info'] . "'
                        WHERE info_id = '" . $mineraal['info_id'] . "'";

    $insert_query = "INSERT INTO info 
                        (info)
                        VALUES ('" . $mineraal['info'] . "'
                        )";
    //print "<p>$control_query<br>$update_query<br>$insert_query</p>"; // TEST

    // + + + + + + + + + + + + + + + info mysql + + + + + + + + + + + + + + +
    if ($mineraal['info_id'] > 0) {
        $dbResult = mysqli_query($mysqlLink, $update_query);
        $msg = 'De info is bijgewerkt.';
        //print "<p>Udate info: ".$mineraal['formule'].'</p>';
    } 
    else {
        if (strlen($mineraal['info']) > 0) {
            $dbResult = mysqli_query($mysqlLink, $insert_query);
            $mineraal['info_id'] = mysqli_insert_id($mysqlLink);
            $msg = 'De info is opgeslagen.';
        }   
        else {
             $mineraal['info_id'] = 0;
        }
    }   



    // + + + + + + + + + + + + + + + link queries + + + + + + + + + + + + + + +
    $update_query = "UPDATE linken SET
                            link = '"           . $mineraal['link'] . "'
                        WHERE link_id = '" . $mineraal['link_id'] . "'";

    $insert_query = "INSERT INTO linken 
                        (link)
                        VALUES ('" . $mineraal['link'] . "'
                        )";
    //print "<p>$control_query<br>$update_query<br>$insert_query</p>"; // TEST

    // + + + + + + + + + + + + + + + link mysql + + + + + + + + + + + + + + +
    if ($mineraal['link_id'] > 0) {
        $dbResult = mysqli_query($mysqlLink, $update_query);
        $msg = 'De linkis bijgewerkt.';
        print "<p>Udate info: ".$mineraal['link_id'].'</p>';
    } 
    else {
        if (strlen($mineraal['link']) > 0) {
            $dbResult = mysqli_query($mysqlLink, $insert_query);
            $mineraal['link_id'] = mysqli_insert_id($mysqlLink);
            $msg = 'De link is opgeslagen.';
        }
        else {
             $mineraal['link_id'] = 0;
        }
    }    



    //print '<pre>'; print_r($mineraal); print '</pre>'; // TEST
    // + + + + + + + + + + + + + + + control query + + + + + + + + + + + + + + +
    $control_query = "SELECT mineraal_id
                    FROM mineralen
                    WHERE mineraal = '"   . $mineraal['mineraal'] . "'";
    
    // + + + + + + + + + + + + + + + update query + + + + + + + + + + + + + + +
    $update_query = "UPDATE mineralen SET
                            mineraal = '"           . $mineraal['mineraal'] . "',
                            formule = '"            . $mineraal['formule'] . "',
                            systeem = '"            . $mineraal['systeem'] . "',
                            groep = '"              . $mineraal['groep'] . "',
                            hardheid = '"           . $mineraal['hardheid'] . "',
                            kleur = '"              . $mineraal['kleur'] . "',
                            imgurl = '"             . $mineraal['imgurl'] . "',
                            info_id = '"            . $mineraal['info_id'] . "',
                            link_id = '"            . $mineraal['link_id'] . "'
                        WHERE mineraal_id = '" . $mineraal['mineraal_id'] . "'";

    // + + + + + + + + + + + + + + + create query + + + + + + + + + + + + + + +
    $insert_query = "INSERT INTO mineralen 
                        (mineraal, formule, systeem, groep, hardheid, kleur, imgurl, info_id, link_id)
                        VALUES ('" . $mineraal['mineraal'] . "', 
                        '" . $mineraal['formule'] . "',
                        '" . $mineraal['systeem'] . "',
                        '" . $mineraal['groep'] . "',
                        '" . $mineraal['hardheid'] . "',
                        '" . $mineraal['kleur'] . "',
                        '" . $mineraal['imgurl'] . "',
                        '" . $mineraal['info_id'] . "',
                        '" . $mineraal['link_id'] . "'
                        )";
    
    //print "<p>$control_query<br>$update_query<br>$insert_query</p>"; // TEST

    // + + + + + + + + + + + + + + + update query + + + + + + + + + + + + + + +
    if ($mineraal['mineraal_id'] > 0) {
        $dbResult = mysqli_query($mysqlLink, $update_query);
        $msg = 'Het mineraal is bijgewerkt.';
        //print "<p>Udate mineraal: ".$mineraal['mineraal_id'].'</p>';
    }
    else {
        // + + + + + + + + + + controleer of mineraal al bestaan + + + + + + + + + +
        $dbResult = mysqli_query($mysqlLink, $control_query);
        if ($dbResult) {
            $row = mysqli_fetch_array($dbResult);
            $mineraal['mineraal_id'] = $row['mineraal_id'];
            mysqli_free_result($dbResult);
        }
        else {
            $errorMsg = 'De data kon niet gelezen worden.';
        }


        // + + + + + + + + + + + + + + + insert query + + + + + + + + + + + + + + +
        if ($mineraal['mineraal_id'] > 0) {
            $errorMsg = 'Er bestaat al een mineraal met deze naam.';
        }
        else {
            $dbResult = mysqli_query($mysqlLink, $insert_query);
            $mineraal['mineraal_id'] = mysqli_insert_id($mysqlLink);
            $msg = 'Het mineraal is opgeslagen.';

            //print "<p>New vestiging-id: $newvestigingId, res: $dbResult, link: mysqlLink<br>$insert_query</p>";
        }
    }         

    mysqli_close($mysqlLink);
}
// = = = = = = = = = = = = = = = EINDE DATABASE CONNECTION = = = = = = = = = = = = = =

//$errorMsg .= ' id: ' . $publicatie['publicatie_id'] . '<br>' . $update_query;
//$msg .= ' ' . $insert_query . ' ';

if ($errorMsg != '') {
    print json_encode($errorMsg);
}
else {
    print json_encode($mineraal['mineraal_id']);
}
