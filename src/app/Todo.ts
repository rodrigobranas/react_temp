export default class Todo {
	id: string;

	constructor (readonly description: string, public done: boolean) {
		this.id = `${Math.random()}`;
	}

	toggleDone () {
		this.done = !this.done;
	}
}
