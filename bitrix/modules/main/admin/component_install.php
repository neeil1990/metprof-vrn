<?
require_once($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_admin_before.php");

$filemanPerms = $APPLICATION->GetGroupRight("fileman");
if ($filemanPerms == "D")
	$APPLICATION->AuthForm(GetMessage("ACCESS_DENIED"));

IncludeModuleLangFile(__FILE__);

$action = (($action == "uninstall") ? "uninstall" : "install");

$APPLICATION->SetTitle(str_replace("#NAME#", $component, (($action == "install") ? "����������� ���������� '#NAME#'" : "������������� ���������� '#NAME#'" )));

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_popup_admin.php");

echo "<h1>".str_replace("#NAME#", $component, (($action == "install") ? "����������� ���������� '#NAME#'" : "������������� ���������� '#NAME#'" ))."</h1>";

$componentErrorMessage = "";

$component = Trim($component);
if ($component == '')
	$componentErrorMessage .= "�� ������ ���������";

if ($componentErrorMessage == '')
{
	if (!isset($componentEngine) || !is_object($componentEngine))
		$componentEngine = new CComponentEngine();

	$path2Comp = $componentEngine->MakeComponentPath($component);
	if ($path2Comp == '')
		$componentErrorMessage .= str_replace("#NAME#", $component, "'#NAME#' �� �������� ������ ����������");
}

if ($componentErrorMessage == '')
{
	$componentPath = "/bitrix/components".$path2Comp;

	if (!file_exists($_SERVER["DOCUMENT_ROOT"].$componentPath)
		|| !is_dir($_SERVER["DOCUMENT_ROOT"].$componentPath)
		|| !file_exists($_SERVER["DOCUMENT_ROOT"].$componentPath."/index.php")
		|| !is_file($_SERVER["DOCUMENT_ROOT"].$componentPath."/index.php"))
	{
		$componentErrorMessage .= str_replace("#NAME#", $component, "'#NAME#' �� �������� �����������");
	}
}

if ($componentErrorMessage == '')
{
	$actionFile = $componentPath."/install/".(($action == "install") ? "install.php" : "uninstall.php");

	if (!file_exists($_SERVER["DOCUMENT_ROOT"].$actionFile) || !is_file($_SERVER["DOCUMENT_ROOT"].$actionFile))
		$componentErrorMessage .= str_replace("#NAME#", $component, (($action == "install") ? "'#NAME#' �� ����� ������������" : "'#NAME#' �� ����� ��������������" ));
}

if ($componentErrorMessage == '')
{
	$step = intval($_REQUEST["step"]);
	if ($step <= 0)
		$step = 1;

	include($_SERVER["DOCUMENT_ROOT"].$actionFile);
}
else
{
	echo CAdminMessage::ShowMessage(
		array(
			"DETAILS" => $componentErrorMessage,
			"TYPE" => "ERROR",
			"MESSAGE" => "������ ��������� ����������",
			"HTML" => true
		)
	);
}

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_popup_admin.php");
?>