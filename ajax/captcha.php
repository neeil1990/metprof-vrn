<?php
global $APPLICATION;

$g_recaptcha_response = $_REQUEST['g_recaptcha'];
return print file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LezVEgaAAAAABpYkkwf8h1b3UL4BWivLDKSG3Lb&response=".$g_recaptcha_response."&remoteip=".$_SERVER["REMOTE_ADDR"]);
