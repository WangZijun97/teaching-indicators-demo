import React from 'react'
import './App.css'

const COLORS = ["saddlebrown", "green", "blue", "indianred", "mediumseagreen","rebeccapurple"]

export class FullText extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		let textlist = this.props.text
		let highlighting = new Array(textlist.reduce((x,y) => x.concat(y)).length)
		highlighting.fill("#282c34")
		let i,j
		for (i = 0; i < this.props.highlight.length; i++) {
			if (this.props.highlight[i]) {
				this.props.switcher[i].forEach(x => highlighting[x] = COLORS[i])
			}
		}
		let k = 0
		for (i = 0; i < textlist.length; i++) {
			for (j = 0 ; j < textlist[i].length; j++) {
				textlist[i][j] = [textlist[i][j],highlighting[k]]
				k++
			}
		}
		
		textlist = textlist.map(this.props.transform)
		
		return (
			<div className = {this.props.className}>
				{textlist}
			</div>
		)
	}
}

export default FullText