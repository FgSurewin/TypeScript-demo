import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Input, Button, Form } from "antd";
// import { connect } from "react-redux";
import { add } from "../../redux/actions";
import "./style.scss";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { TodoActionTypes } from "../../types";
// interface LinkActionProps {
// 	addItem: (
// 		value: string,
// 		set: React.Dispatch<React.SetStateAction<string>>
// 	) => () => void;
// }

// type Props = LinkActionProps;

const TodoInput = function () {
	const [value, setValue] = useState("");
	const dispatch = useDispatch<Dispatch<TodoActionTypes>>();
	const addItem = () => {
		if (value === "") return;
		dispatch(add({ id: uuid(), text: value }));
		setValue("");
	};
	return (
		<div id='todoInput'>
			<Form onSubmitCapture={addItem}>
				<Input
					value={value}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setValue(e.target.value)
					}
				/>
				<Button type='primary' onClick={addItem}>
					ADD
				</Button>
			</Form>
		</div>
	);
};

// const mapDispatchToProps = (dispatch: Dispatch) => ({
// 	addItem: (
// 		value: string,
// 		set: React.Dispatch<React.SetStateAction<string>>
// 	) => {
// 		const text = value;
// 		if (text === "") return;
// 		const payload = {
// 			id: uuid(),
// 			text,
// 		};
// 		return () => {
// 			set("");
// 			dispatch(add(payload));
// 		};
// 	},
// });

// export default connect(null, mapDispatchToProps)(TodoInput);
export default TodoInput;
