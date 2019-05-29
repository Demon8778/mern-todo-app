import React, { Component } from 'react';

export default class CreateTodo extends Component {
	state = {
		description: '',
		responsible: '',
		priority: 'low',
		completed: false
	};

	onChangeTodoDescription = e => {
		this.setState({
			description: e.target.value
		});
	};

	onChangeTodoResponsible = e => {
		this.setState({
			responsible: e.target.value
		});
	};

	onChangeTodoPriority = e => {
		this.setState({
			priority: e.target.value
		});
	};

	onFormSubmit = e => {
		e.preventDefault();

		console.log(this.state.description);
		console.log(this.state.priority);
		console.log(this.state.responsible);

		this.setState({
			description: '',
			responsible: '',
			priority: 'low',
			completed: false
		});
	};

	render() {
		return (
			<div style={{ marginTop: 10 }}>
				<h3>Create New Todo</h3>
				<form onSubmit={this.onFormSubmit}>
					<div className="form-group">
						<label>Description: </label>
						<input
							type="text"
							className="form-control"
							value={this.state.description}
							onChange={this.onChangeTodoDescription}
						/>
					</div>
					<div className="form-group">
						<label>Responsible: </label>
						<input
							type="text"
							className="form-control"
							value={this.state.responsible}
							onChange={this.onChangeTodoResponsible}
						/>
					</div>
					<div className="form-group">
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="priorityOptions"
								id="priorityLow"
								value="low"
								checked={this.state.priority === 'low'}
								onChange={this.onChangeTodoPriority}
							/>
							<label className="form-check-label" htmlFor="priorityLow">
								Low
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="priorityOptions"
								id="priorityMedium"
								value="medium"
								checked={this.state.priority === 'medium'}
								onChange={this.onChangeTodoPriority}
							/>
							<label className="form-check-label" htmlFor="priorityMedium">
								Medium
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="priorityOptions"
								id="priorityHigh"
								value="high"
								checked={this.state.priority === 'high'}
								onChange={this.onChangeTodoPriority}
							/>
							<label className="form-check-label" htmlFor="priorityHigh">
								High
							</label>
						</div>
					</div>

					<div className="form-group">
						<input
							type="submit"
							value="Create Todo"
							className="btn btn-primary"
						/>
					</div>
				</form>
			</div>
		);
	}
}
