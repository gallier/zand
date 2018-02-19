<?php
date_default_timezone_set('Europe/Amsterdam'); // - - - - - - - - - - LET OP !!!

require_once('../../../../secure/zand.php'); 	// local / udwdev
require_once('functions.php');
$tempUploadDir = "../../tmp/";

$msg = '';
$errorMsg = '';
$newline = "\r\n";
$seperation = '-';

$maxImgWidth = 700;
$maxImgHeight = 420;
$maxFileSize = 5242880;
$maxPageImgWidth = 380;
$maxPageImgHeight = 420;

