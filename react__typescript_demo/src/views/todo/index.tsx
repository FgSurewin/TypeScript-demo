import React from "react";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import "./style.scss";

interface TodoProps {}

const Todo: React.FC<TodoProps> = () => {
	return (
		<div id='todo'>
			<TodoInput />
			<TodoList />
		</div>
	);
};

export default Todo;
