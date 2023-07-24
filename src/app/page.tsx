"use client";

import React, { useState } from 'react';
import TodoList from "./TodoList";
import Todo from "./Todo";


export default function App() {
	const x = new TodoList()
	x.addTodo("A", true);
	x.addTodo("B", false);
	x.addTodo("C", false);
	const [todoList, setTodoList] = useState(x);
	function update () {
		const y = new TodoList();
		for (const todo of todoList.todos) {
			y.addTodo(todo.description, todo.done);
		}
		setTodoList(y);
	}
	return (
		<div>
			<div>{ todoList.getTotal() }</div>
			<div>{ todoList.getProgress() }%</div>
			{ todoList.todos.map((todo: Todo) => 
				<div key={ todo.id } onClick={ () => { todo.toggleDone();update() } }>{ todo.description } { (todo.done) ? 'true': 'false' }</div>
			)}
		</div>
	);
}
