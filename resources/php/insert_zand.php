<?php
require_once('init.php');
/*
if ($_SESSION['cur_vestigingtype'] != 'admin') {
    header('Location:login.php?error=' . _msgNoAdmin);
}
*/
// init
$mineraal = array();
$newZandlId = 0;
$newInfoId = 0;
$newLinkId = 0;
$zand['datum'] = date('Y-m-d');

if (isset($_POST['zand_id'])) 	        { $zand['zand_id']       = ($_POST['zand_id']); }
if (isset($_POST['naam']))              { $zand['naam']          = ($_POST['naam']); }
if (isset($_POST['type']))              { $zand['type']          = ($_POST['type']); }
if (isset($_POST['land']))              { $zand['land']          = ($_POST['land']); }
if (isset($_POST['vindplaats']))        { $zand['vindplaats']    = ($_POST['vindplaats']); }
if (isset($_POST['diepte']))            { $zand['diepte']        = ($_POST['diepte']); }
if (isset($_POST['code']))              { $zand['code']          = ($_POST['code']); }
if (isset($_POST['imgurl']))            { $zand['imgurl']        = ($_POST['imgurl']); }
if (isset($_POST['info']))              { $zand['info']          = ($_POST['info']); }
if (isset($_POST['link_id']))           { $zand['link_id']       = ($_POST['link_id']); }
if (isset($_POST['link']))              { $zand['link']          = ($_POST['link']); }
if (isset($_POST['datum']))             { $zand['datum']         = ($_POST['datum']); } 
    else { $zand['datum'] = date('Y-m-d'); }

// $zand['mzand_id'] = 2;  // <- - - - - - - - - - - - - - - - - - - - - TMP
// $zand['naam']  = 'Kreta - Elafonissi zand';
// $zand['type']     = 'strand';
// $zand['land_id']     = 16;
// $zand['vindplaats']     = 'Elafonissi';
// $zand['diepte']     = 0;
// $zand['code']     = '';
// $zand['imgurl'] = 'zand_kreta_elafonissi_01.png';
// $zand['info_id'] = 0;
// $zand['info']     = '';
// $zand['link_id'] = 0;
// $zand['link']     = '';
// $zand['datum'] = date('d-m-Y');

// + + + + + + + + + + + + + + + validatie + + + + + + + + + + + + + + +
$formError = '';
if (strlen($vestiging['loginnaam']) < 2) {
    $formError = _valNaam;
}

$zand['zand_id'] = controlInput($zand['zand_id'], 'int');
$zand['naam'] = controlInput($zand['naam'], 'str_txt');
$zand['type'] = controlInput($zand['type'], 'str_txt');
$zand['land'] = controlInput($zand['land'], 'str_txt');
$zand['vindplaats'] = controlInput($zand['vindplaats'], 'str_txt');
$zand['diepte'] = controlInput($zand['diepte'], 'int');
$zand['code'] = controlInput($zand['code'], 'str_txt');
$zand['imgurl'] = controlInput($zand['imgurl'], 'str_txt');
$zand['info'] = controlInput($zand['info'], 'str_txt');
$zand['link_id'] = controlInput($zand['link_id'], 'int');
$zand['link'] = controlInput($zand['link'], 'str_txt');


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
    $zand['naam'] = mysqli_real_escape_string($mysqlLink, trim($zand['naam']));
    $zand['type'] = mysqli_real_escape_string($mysqlLink, trim($zand['type']));
    $zand['land'] = mysqli_real_escape_string($mysqlLink, trim($zand['land']));
    $zand['vindplaats'] = mysqli_real_escape_string($mysqlLink, trim($zand['vindplaats']));
    $zand['code'] = mysqli_real_escape_string($mysqlLink, trim($zand['code']));
    $zand['imgurl'] = mysqli_real_escape_string($mysqlLink, trim($zand['imgurl']));
    $zand['info'] = mysqli_real_escape_string($mysqlLink, trim($zand['info']));
    $zand['link'] = mysqli_real_escape_string($mysqlLink, trim($zand['link']));


    // + + + + + + + + + + + + + + + info queries + + + + + + + + + + + + + + +
    $update_query = "UPDATE info SET
                            info = '"           . $zand['info'] . "'
                        WHERE info_id = '" . $zand['info_id'] . "'";

    $insert_query = "INSERT INTO info 
                        (info)
                        VALUES ('" . $zand['info'] . "'
                        )";
    //print "<p>$update_query<br>$insert_query</p>"; // TEST

    // + + + + + + + + + + + + + + + info mysql + + + + + + + + + + + + + + +
    if ($zand['info_id'] > 0) {
        $dbResult = mysqli_query($mysqlLink, $update_query);
        $msg = 'De info is bijgewerkt.';
        //print "<p>Udate info: ".$mineraal['formule'].'</p>';
    } 
    else {
        if (strlen($zand['info']) > 0) {
            $dbResult = mysqli_query($mysqlLink, $insert_query);
            $zand['info_id'] = mysqli_insert_id($mysqlLink);
            $msg = 'De info is opgeslagen.';
        }   
        else {
             $zand['info_id'] = 0;
        }
    }   



    // + + + + + + + + + + + + + + + link queries + + + + + + + + + + + + + + +
    $update_query = "UPDATE linken SET
                            link = '"           . $zand['link'] . "'
                        WHERE link_id = '" . $zand['link_id'] . "'";

    $insert_query = "INSERT INTO linken 
                        (link)
                        VALUES ('" . $zand['link'] . "'
                        )";
    //print "<p>$update_query<br>$insert_query</p>"; // TEST

    // + + + + + + + + + + + + + + + link mysql + + + + + + + + + + + + + + +
    if ($zand['link_id'] > 0) {
        $dbResult = mysqli_query($mysqlLink, $update_query);
        $msg = 'De linkis bijgewerkt.';
        print "<p>Udate info: ".$zand['link_id'].'</p>';
    } 
    else {
        if (strlen($zand['link']) > 0) {
            $dbResult = mysqli_query($mysqlLink, $insert_query);
            $zand['link_id'] = mysqli_insert_id($mysqlLink);
            $msg = 'De link is opgeslagen.';
        }
        else {
             $zand['link_id'] = 0;
        }
    }    



    //print '<pre>'; print_r($zand); print '</pre>'; // TEST
    // + + + + + + + + + + + + + + + control query + + + + + + + + + + + + + + +
    $control_query = "SELECT zand_id
                    FROM zanden
                    WHERE naam = '"   . $zand['naam'] . "'";
    
    // + + + + + + + + + + + + + + + update query + + + + + + + + + + + + + + +
    $update_query = "UPDATE zanden SET
                            naam = '"             . $zand['naam'] . "',
                            type = '"             . $zand['type'] . "',
                            land = '"             . $zand['land'] . "',
                            vindplaats = '"       . $zand['vindplaats'] . "',
                            diepte = '"           . $zand['diepte'] . "',
                            code = '"             . $zand['code'] . "',
                            info_id = '"          . $zand['info_id'] . "',
                            link_id = '"          . $zand['link_id'] . "',
                            imgurl = '"           . $zand['imgurl'] . "',
                            datum = '"            . $zand['datum'] . "'
                        WHERE zand_id = '" . $zand['zand_id'] . "'";

    // + + + + + + + + + + + + + + + create query + + + + + + + + + + + + + + +
    $insert_query = "INSERT INTO zanden 
                        (naam, type, land_id, vindplaats, diepte, code, info_id, link_id, imgurl, datum)
                        VALUES ('" . $zand['naam'] . "', 
                        '" . $zand['type'] . "',
                        '" . $zand['land_id'] . "',
                        '" . $zand['vindplaats'] . "',
                        '" . $zand['diepte'] . "',
                        '" . $zand['code'] . "',
                        '" . $zand['info_id'] . "',
                        '" . $zand['link_id'] . "',
                        '" . $zand['imgurl'] . "',
                        '" . $zand['datum'] . "'
                        )";
    
    //print "<p>$control_query<br>$update_query<br>$insert_query</p>"; // TEST

    // + + + + + + + + + + + + + + + update query + + + + + + + + + + + + + + +
    if ($zand['zand_id'] > 0) {
        $dbResult = mysqli_query($mysqlLink, $update_query);
        $msg = 'Het zand is bijgewerkt.';
        //print "<p>Udate mineraal: ".$mineraal['mineraal_id'].'</p>';
    }
    else {
        // + + + + + + + + + + controleer of mineraal al bestaan + + + + + + + + + +
        $dbResult = mysqli_query($mysqlLink, $control_query);
        if ($dbResult) {
            $row = mysqli_fetch_array($dbResult);
            $zand['zand_id'] = $row['zand_id'];
            mysqli_free_result($dbResult);
        }
        else {
            $errorMsg = 'De data kon niet gelezen worden.';
        }


        // + + + + + + + + + + + + + + + insert query + + + + + + + + + + + + + + +
        if ($zand['zand_id'] > 0) {
            $errorMsg = 'Er bestaat al een mineraal met deze naam.';
        }
        else {
            $dbResult = mysqli_query($mysqlLink, $insert_query);
            $zand['zand_id'] = mysqli_insert_id($mysqlLink);
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
    print json_encode($zand['zand_id']);
}
