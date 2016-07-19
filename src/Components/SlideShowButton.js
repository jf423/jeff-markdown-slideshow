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
			text:this.props.text
		});
		document.getElementById('source').innerHTML = this.props.text;
		remark.create();
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

