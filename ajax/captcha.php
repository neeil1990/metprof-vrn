<?php 
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
global $APPLICATION;

$g_recaptcha_response = $_REQUEST['g_recaptcha'];
$result = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LezVEgaAAAAABpYkkwf8h1b3UL4BWivLDKSG3Lb&response=".$g_recaptcha_response."&remoteip=".$_SERVER["REMOTE_ADDR"]);
AddMessage2Log($result, "g_recaptcha");
return print $result;
