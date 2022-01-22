import { Plugin } from 'obsidian';


export default class Toots extends Plugin {

	async onload() {
		this.registerMarkdownCodeBlockProcessor('toots', (source, el) => {
			const toots = source.replace(/[\w\d]/g, "💨")
			el.innerHTML = toots
		})
		this.registerMarkdownCodeBlockProcessor('farts', (source, el) => {
			const toots = source.replace(/[\w\d]/g, "💨")
			el.innerHTML = toots
		})
	}

}

