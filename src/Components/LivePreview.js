import React, { Component } from 'react';

export class LivePreview extends Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			html:''
		};
		this.converter = new showdown.Converter();
	}
	componentWillUnMount() {

	}
	componentDidMount() {

	}
	componentWillReceiveProps(props){
		var html = this.converter.makeHtml(props.text);
		this.setState({
			html:html 
		});
	}
	componentDidUpdate(preProps,preState){
		document.getElementById('livePreview').innerHTML = this.state.html;
	}
	render() {
		return (
			<div id="livePreview">
			</div>
		);
	}
}

LivePreview.defaultProps = {
	
}

