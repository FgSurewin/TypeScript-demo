import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from "./actions";
import { TodoActionTypes, TodoItem } from "../types";

const initState: TodoItem[] = [];
export const todoReducer = (
	state = initState,
	action: TodoActionTypes
): TodoItem[] => {
	switch (action.type) {
		case ADD_ITEM:
			return [...state, action.payload];
		case EDIT_ITEM:
			return state.map((item) => {
				if (item.id === action.payload.id) {
					item.text = action.payload.text;
				}
				return item;
			});
		case DELETE_ITEM:
			return state.filter((item) => item.id !== action.id);
		default:
			return state;
	}
};
