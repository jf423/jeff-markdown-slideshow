import React, { Component } from 'react';
import {SlideShowButton} from './SlideShowButton'
import {LivePreview} from './LivePreview'


export class SlideShowApp extends Component{
	constructor(props,context){
		super(props,context);

		this.state = {
			text:''
		};
		this.onChange = this.onChange.bind(this);
	}
	componentWillUnMount() {

	}
	componentDidMount() {

	}
	onChange(e){
		this.setState({
			text: e.target.value
		});
	}
	render() {
		return (
			<div className="row">
				<div className="col-md-6 col-sm-6">
					<SlideShowButton className="btn btn-primary" />
					<textarea className="form-control" rows="30" onChange={this.onChange} value={this.state.text} />
				</div>
				<div className="col-md-6 col-sm-6">
					<LivePreview text={this.state.text} />
				</div>
			</div>
		);
	}
}

SlideShowApp.defaultProps = {

}

