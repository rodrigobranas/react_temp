import Todo from "./Todo";

export default class TodoList {
	todos: Todo[];

	constructor () {
		this.todos = [];
	}

	addTodo (description: string, done: boolean = false) {
		this.todos.push(new Todo(description, done));
	}

	getTotal () {
		return this.todos.length;
	}

	getProgress () {
		const done = this.todos.filter((todo: Todo) => todo.done);
		return Math.round((done.length/this.todos.length)*100);
	}

	clear () {
		this.todos = [];
	}
}
