<?php
session_start();

require_once('init.php');
require_once('functions.php');

$info = '';
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
    $select_query = "SELECT info
                        FROM mineralen 
                        LEFT OUTER JOIN info
                        ON mineralen.img_info_id = info.info_id "
                        . $whereclause 
                        . " ORDER BY 'mineraal_id'";
    //print "<p>$select_query</p>"; // TEST

    // + + + + + + + + + + + + + + + uitlezen users + + + + + + + + + + + + + + +
    $dbResult = mysqli_query($mysqlLink, $select_query);
    if ($dbResult) {
        $row = mysqli_fetch_array($dbResult);
        $info = $row['info'];

        mysqli_free_result($dbResult);
    }
    else {
        $errorMsg = 'Database select error.';
    }

    mysqli_close($mysqlLink);
}
// = = = = = = = = = = = = = = = EINDE DATABASE CONNECTION = = = = = = = = = = = = = =


if ($errorMsg != '') {
    print json_encode($errorMsg);
}
else {
    print json_encode($info); 
}