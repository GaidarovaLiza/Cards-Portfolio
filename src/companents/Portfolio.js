import react, { Component, Profiler } from 'react';
import Toolbar from '../companents/Toolbar';
import ProjectList from '../companents/ProjectList';



export class Portfolio extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: null,
	}
}

	onSelectFilter = (filter) => this.setState({ selected: filter.name })


	projects = () => this.props.businessCard.filter(e => {
		if (this.state.selected === 'All') {
			return e.category
		} else if (this.state.selected === null) {
			return e.category
		} else {
			return e.category === this.state.selected
		}

	})

	render() {
		return (
			<div>
				<Toolbar
					filters={this.props.filters}
					selected={this.state.selected}
					onSelectFilter={this.onSelectFilter} />
				<ProjectList
					projects={this.projects()}
					businessCard={this.props.businessCard} />
			</div>
		)
	}
}