import React from "react";
import { useSelector } from "react-redux";
import { List } from "antd";
import { AppState } from "../../../../store";

export default function TodoList() {
	const todoList = useSelector((state: AppState) => state.todo);
	return (
		<div>
			<List
				dataSource={todoList}
				renderItem={(item) => {
					return <List.Item>{item.text}</List.Item>;
				}}
			/>
		</div>
	);
}
