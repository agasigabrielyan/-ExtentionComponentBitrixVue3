<?php if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
use Bitrix\Main\Loader;


class Sample extends CBitrixComponent implements \Bitrix\Main\Engine\Contract\Controllerable
{
    public function configureActions()
    {
        // TODO: Implement configureActions() method.
    }

    public function sendMessageAction() {
        Loader::includeModule('iblock');

        $iblockId = 1;
        $elements = [];

        $result = CIBlockElement::GetList(
            ['SORT' => 'ASC'],
            ['IBLOCK_ID' => $iblockId],
            false,
            false,
            ['ID', 'NAME', 'CODE', 'DATE_ACTIVE_FROM']
        );

        while ($element = $result->GetNext()) {
            $elements[] = $element;
        }

        return $elements;
    }

    public function executeComponent()
    {
        $arResult['elements'] = $this->sendMessageAction();
        $this->includeComponentTemplate();
    }
}