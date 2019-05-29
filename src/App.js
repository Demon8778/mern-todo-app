import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import CreateTodo from './CreateTodo';
import EditTodo from './EditTodo';

class App extends Component {
	render() {
		return (
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a
						className="navbar-brand"
						href="https://www.linkedin.com/in/kirankumar-ahir-90b353112/"
						target="_blank"
					>
						<img
							src={logo}
							width="30"
							height="30"
							alt="CodingTheSmartWay.com"
						/>
					</a>
					<Link to="/" className="navbar-brand">
						MERN-Stack Todo App
					</Link>
					<div className="collpase navbar-collapse">
						<ul className="navbar-nav mr-auto">
							<li className="navbar-item">
								<Link to="/" className="nav-link">
									Todos
								</Link>
							</li>
							<li className="navbar-item">
								<Link to="/create" className="nav-link">
									Create Todo
								</Link>
							</li>
						</ul>
					</div>
				</nav>
				<br />
				<Route path="/" exact component={TodoList} />
				<Route path="/create" component={CreateTodo} />
				<Route path="/edit/:id" component={EditTodo} />
			</div>
		);
	}
}

export default App;
