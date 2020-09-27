import { AddTodoAction, TodoItem } from "./../types/index";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";

export const add = (payload: TodoItem): AddTodoAction => ({
	type: ADD_ITEM,
	payload,
});
