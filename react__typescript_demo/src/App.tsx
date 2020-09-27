import React from "react";
import Todo from "./views/todo";

function App() {
	return (
		<div className='App'>
			<h1
				style={{
					textAlign: "center",
					marginBottom: "20px",
				}}
			>
				Welcome to React in TypeScript
			</h1>
			<Todo />
		</div>
	);
}

export default App;
