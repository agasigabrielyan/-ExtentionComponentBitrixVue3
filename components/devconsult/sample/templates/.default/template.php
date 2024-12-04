<?php if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
\Bitrix\Main\UI\Extension::load('devconsult.elements');
?>
<div id="application"></div>
<script>
    const elements = new BX.Devconsult.Elements("#application");
    elements.start();
</script>
