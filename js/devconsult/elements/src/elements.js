import {Type} from 'main.core';
import {BitrixVue} from 'ui.vue3';
import {Dom, Loc} from 'main.core';
import ElementsList from "./components/ElementsList.js";
import ElementAddList from "./components/ElementAddForm.js";
import "./elements.css";

export class Elements
{
	#application;
	constructor(rootNode): void
	{
		this.rootNode = document.querySelector(rootNode);
	}
	start(): void
	{
		const context = this;
		this.#application = BitrixVue.createApp({
			name: 'Elements',
			components: {
				ElementsList,
				ElementAddList
			},
			beforeCreate(): void
			{
				this.$bitrix.Application.set(context);
			},
			data() {
				return {
					elements: []
				}
			},
			methods: {
				sendMessage() {
					BX.showWait();
					BX.ajax.runComponentAction('devconsullt:sample','sendMessage',{
						mode: "class",
						data: {

						}
					}).then( ( response ) => {
						BX.closeWait();
						this.elements = response.data;
					}, ( response ) => {
						alert('При ajax запросе произошла ошибка');
						BX.closeWait();
					});
				}
			},
			mounted() {
				this.sendMessage();
			},
			template: `
				<ElementAddList @send-message="sendMessage" />
				<br/>
				<ElementsList :elements="elements" />
			`
		});
		this.#application.mount(this.rootNode)
	}
}
