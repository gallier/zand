<?php
session_start();

require_once('init.php');
require_once('functions.php');

$zanden = Array();
$zand_id = 0;

// + + + + + + + + + + + + + + + form-input
if (isset($_GET['zand_id'])) { $zand_id = ($_GET['zand_id']); } else {$zand_id = 0; }

// $zand_id = 1;

// = = = = = = = = = = = = = = = = DATABASE CONNECTION = = = = = = = = = = = = = = = =
$mysqlLink = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName);
if (mysqli_connect_errno()) {
    die(_msg_NoConnectError);
    $errorMsg = _msg_NoConnectError;
    $debugMsg = 'db-connect error: '.mysqli_connect_errno().', '.mysqli_connect_error();
}
else {
    mysqli_set_charset($mysqlLink,"utf8");

    // + + + + + + + + + + + + + + + control input
    $zand_id = controlInput($land_id, 'int');

    // + + + + + + + + + + + + + + + whereclause
    if ($zand_id > 0) {
        $whereclause = " WHERE zand_id = '$zand_id' ";
    }
    else {
        $whereclause = "";
    }

    // + + + + + + + + + + + + + + + queries
    $select_query = "SELECT zand_id,
                            naam,
                            type,
                            land_id,
                            landcode,
                            land,
                            vindplaats,
                            code,
                            info_id,
                            link_id,
                            imgurl,
                            datum
                        FROM zanden 
                        JOIN landen
                        USING (land)
                        LEFT OUTER JOIN info
                        USING (info_id) 
                        LEFT OUTER JOIN linken
                        USING (link_id)"
                        . $whereclause 
                        . " ORDER BY 'zand_id'";
    //print "<p>$select_query</p>"; // TEST

    // + + + + + + + + + + + + + + + uitlezen users + + + + + + + + + + + + + + +
    $dbResult = mysqli_query($mysqlLink, $select_query);
    if ($dbResult) {
        $i = 0;
        while ($row = mysqli_fetch_array($dbResult)) {
            $zanden[$i]['zand_id']      = $row['zand_id'];
            $zanden[$i]['naam']         = $row['naam'];
            $zanden[$i]['type']         = $row['type'];
            $zanden[$i]['land_id']      = $row['land_id'];
            $zanden[$i]['landcode']     = $row['landcode'];
            $zanden[$i]['land']         = $row['land'];
            $zanden[$i]['vindplaats']   = $row['vindplaats'];
            $zanden[$i]['code']         = $row['code'];
            $zanden[$i]['info_id']      = $row['info_id'];
            $zanden[$i]['info']         = $row['info'];
            $zanden[$i]['link_id']      = $row['link_id'];
            $zanden[$i]['link']         = $row['link'];
            $zanden[$i]['imgurl']       = $row['imgurl'];
            $zanden[$i]['datum']        = $row['datum'];
            $i++;
        }
        $aantalRecords = mysqli_num_rows($dbResult);

        mysqli_free_result($dbResult);
    }
    else {
        $errorMsg = 'Database select error.';
    }

    mysqli_close($mysqlLink);
}
// = = = = = = = = = = = = = = = EINDE DATABASE CONNECTION = = = = = = = = = = = = = =
//print '<pre>'; print_r($zanden); print '</pre>'; // TEST

if ($errorMsg != '') {
    print json_encode($errorMsg);
}
else {
    print json_encode($zanden); 
}