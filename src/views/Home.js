// ===== Home
import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';

// import all components
import {Button} from '../components';

// import all actions
import {increment} from '../redux/action/counterAction';
import {handleName} from '../redux/action/userAction';

class HomeComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: this.props.user.fullName
		}

		this.increase = this.increase.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	increase(e) {
		e.preventDefault();
		this.props.handleIncrement()
		this.props.handleName(this.state.title);
	}

	handleChange({ target: { value }}) {
		this.setState({
			title: value
		})
	};

	render() {
		return (
			<Fragment>
				<h1>{this.props.user.fullName.length < 1 ? 'Home' : this.props.user.fullName}</h1>
				<Button 
					type="submit"
					onClick={this.increase}
				>
					Clicked {this.props.counter.count} times
				</Button>
				<br />
				<br />
				<input type="text" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	counter: {
		count: state.counter.count
	},
	user: {
		fullName: state.user.fullName
	}
});

const mapDispatchToProps = {
	handleIncrement: increment,
	handleName
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default Home;