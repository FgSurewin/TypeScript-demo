import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "./../redux/actions";
export interface TodoItem {
	id: string;
	text: string;
}

export interface TodoState {
	source: TodoItem[];
}

export interface AddTodoAction {
	type: typeof ADD_ITEM;
	payload: TodoItem;
}

export interface DeleteTodoAction {
	type: typeof DELETE_ITEM;
	id: string;
}

export interface EditTodoAction {
	type: typeof EDIT_ITEM;
	payload: TodoItem;
}

export type TodoActionTypes = AddTodoAction | DeleteTodoAction | EditTodoAction;
