import React, { Component } from 'react';

export class SlideShowButton extends Component{
	constructor(props,context){
		super(props,context);
		this.state = {

		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentWillUnMount() {

	}
	componentDidMount() {

	}
	handleClick(){
		this.setState({
			
		});
	}
	render() {
		return (
			<div>
				<button className={this.props.className} onClick={this.handleClick}>play</button>
			</div>
		);
	}
}

SlideShowButton.defaultProps = {
	
}

