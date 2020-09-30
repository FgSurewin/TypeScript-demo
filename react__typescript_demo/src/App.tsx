import React from "react";
import {
	BrowserRouter,
	NavLink,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import MyForm from "./views/myForm";
import Todo from "./views/todo";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<h1
					style={{
						textAlign: "center",
						marginBottom: "20px",
					}}
				>
					Welcome to React in TypeScript
				</h1>
				<nav
					style={{
						textAlign: "center",
						marginBottom: "20px",
					}}
				>
					<NavLink to="/myForm">My Form</NavLink> |{" "}
					<NavLink to="/myTodo">My Todo</NavLink>
				</nav>
				<Switch>
					<Redirect from="/" exact to="/myTodo" />
					<Route path="/myTodo" component={Todo} />
					<Route path="/myForm" component={MyForm} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
