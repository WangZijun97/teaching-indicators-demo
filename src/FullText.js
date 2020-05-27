import React from 'react'
import './App.css'

//depreciated, not in use
export class FullText extends React.Component {
	constructor(props) {
		super(props)
		this.colorindex = -1
		this.colorgen = this.colorgen.bind(this)
		
		this.highlighting = new Array(this.props.text.reduce((x,y) => x.concat(y)).length)
		
	}
	
	colorgen() {
		this.colorindex++
		const c = this.colorindex
		return this.highlighting[c]
	}
	
	render() {
		
		this.highlighting.fill("#282c34")
		
		let i,j
		for (i = 0; i < this.props.highlight.length; i++) {
			if (this.props.highlight[i]) {
				this.props.switcher[i].forEach(x => this.highlighting[x] = this.props.colors[i])
			} 
		}
		this.colorindex = -1
		
		let textlist = this.props.text.map(this.props.transform(this.colorgen))
		
		let titletext = (<h3>{this.props.title}</h3>)
		if (this.props.title === -1) {
			titletext = (<div></div>)
		}
		
		return (
			<div className = {this.props.className}>
				{titletext}
				{textlist}
			</div>
		)
	}
}

export default FullText