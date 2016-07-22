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
		this.refs.playback.className += " disabled";
		//use with jQuery
		// $(this.refs.playback).addClass('disabled');
	}
	componentDidUpdate(preProps,preState){
		if (this.props.play === true) {
			this.refs.playback.className = this.props.className;
			//use with jQuery
			// $(this.refs.playback).removeClass('disabled');
		} else {
			this.refs.playback.className += " disabled";
			//use with jQuery
			// $(this.refs.playback).addClass('disabled');
		}
	}
	handleClick(e){
		this.setState({
			text:this.props.text
		});
		if (this.props.play === true) {
			document.getElementById('source').innerHTML = this.props.text;
			remark.create();
		}
	}
	render() {
		return (
			<div>
				<button ref="playback" className={this.props.className} onClick={this.handleClick}>play</button>
			</div>
		);
	}
}

SlideShowButton.defaultProps = {
	text: '',
	play: false,
	className: 'btn btn-primary'
}
SlideShowButton.propTypes = {
	text: React.PropTypes.string,
	play: React.PropTypes.bool
}
