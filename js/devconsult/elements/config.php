<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/elements.bundle.css',
	'js' => 'dist/elements.bundle.js',
	'rel' => [
		'main.core',
		'ui.vue3',
	],
	'skip_core' => false,
];
