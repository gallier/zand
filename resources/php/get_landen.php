<?php
session_start();

require_once('init.php');
require_once('functions.php');

$landen = Array();
$land_id = 0;
$combo = false;

// + + + + + + + + + + + + + + + form-input
if (isset($_GET['land_id'])) { $land_id = ($_GET['land_id']); } else {$land_id = 0; }
if (isset($_GET['combo'])) { $land_id = ($_GET['combo']); } else {$combo = false; }


// $land_id = 1;

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
    $land_id = controlInput($land_id, 'int');

    // + + + + + + + + + + + + + + + whereclause
    if ($land_id > 0 && $land_id < 999) {
        $whereclause = " WHERE landid = '$land_id' ";
    }
    else {
        $whereclause = "";
    }

    // + + + + + + + + + + + + + + + queries
    $select_query = "SELECT land_id,
                            landcode,
                            land
                        FROM landen "
                        . $whereclause 
                        . " ORDER BY 'land'";


    
    //print "<p>$select_query</p>"; // TEST

    // + + + + + + + + + + + + + + + uitlezen users + + + + + + + + + + + + + + +
    $dbResult = mysqli_query($mysqlLink, $select_query);
    if ($dbResult) {
        $i = 0;
        if ($combo) {
            while ($row = mysqli_fetch_array($dbResult)) {
                $landen[$i]       = $row['land'];
                $i++;
            }
        }
        else {
            while ($row = mysqli_fetch_array($dbResult)) {
                $landen[$i]['land_id']    = $row['land_id'];
                $landen[$i]['landcode']   = $row['landcode'];
                $landen[$i]['land']       = $row['land'];
                $i++;
            }
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
//print '<pre>'; print_r($landen); print '</pre>'; // TEST


if ($errorMsg != '') {
    print json_encode($errorMsg);
}
else {

    print json_encode($landen); 
}