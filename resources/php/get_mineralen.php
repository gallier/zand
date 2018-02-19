<?php
session_start();

require_once('init.php');
require_once('functions.php');

$mineralen = Array();
$mineraal_id = 0;

// + + + + + + + + + + + + + + + form-input
if (isset($_GET['mineraal_id'])) { $mineraal_id = ($_GET['mineraal_id']); } else {$mineraal_id = 0; }

//$mineraal_id = 19;

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
    if ($mineraal_id > 0) {
        $whereclause = " WHERE mineraal_id = '$mineraal_id' ";
    }
    else {
        $whereclause = "";
    }

    // + + + + + + + + + + + + + + + queries
    $select_query = "SELECT mineraal_id,
                            mineraal,
                            formule,
                            groep,
                            systeem,
                            hardheid,
                            kleur,
                            imgurl,
                            info_id,
                            info,
                            link_id,
                            link
                        FROM mineralen 
                        LEFT OUTER JOIN info
                        USING (info_id) 
                        LEFT OUTER JOIN linken
                        USING (link_id)"
                        . $whereclause 
                        . " ORDER BY 'mineraal_id'";
    //print "<p>$select_query</p>"; // TEST

    // + + + + + + + + + + + + + + + uitlezen users + + + + + + + + + + + + + + +
    $dbResult = mysqli_query($mysqlLink, $select_query);
    if ($dbResult) {
        $i = 0;
        while ($row = mysqli_fetch_array($dbResult)) {
            $mineralen[$i]['mineraal_id']       = $row['mineraal_id'];
            $mineralen[$i]['mineraal']          = $row['mineraal'];
            $mineralen[$i]['formule']           = $row['formule'];
            $mineralen[$i]['groep']             = $row['groep'];
            $mineralen[$i]['systeem']           = $row['systeem'];
            $mineralen[$i]['hardheid']          = $row['hardheid'];
            $mineralen[$i]['kleur']             = $row['kleur'];
            $mineralen[$i]['imgurl']            = $row['imgurl'];
            $mineralen[$i]['code']              = $row['code'];
            $mineralen[$i]['info_id']           = $row['info_id'];
            $mineralen[$i]['info']              = $row['info'];
            $mineralen[$i]['link_id']           = $row['link_id'];
            $mineralen[$i]['link']              = $row['link'];
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
//print '<pre>'; print_r($mineralen); print '</pre>'; // TEST

if ($errorMsg != '') {
    print json_encode($errorMsg);
}
else {
    print json_encode($mineralen); 
}