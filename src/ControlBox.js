import React from 'react'
import './App.css'
import FullText from './FullText.js'

export class ControlBox extends React.Component {
	
	constructor(props) {
		super(props)
		this.hoverfx = -1
		this.hoveroverfx = -1
		this.handlehover = this.handlehover.bind(this)
		this.handlehoverover = this.handlehoverover.bind(this)
	}
	
	handlehover() {
		//const t = this.state.hoverfx
		//this.setState({hoverfx: t + 1})
		this.hoverfx++
		const t = this.hoverfx
		return () => this.props.handlehover(t)
	}
	
	handlehoverover() {
		this.hoveroverfx++
		const t = this.hoveroverfx
		return () => this.props.handlehoverover(t)
	}
	
	render() {
		this.hoverfx = -1
		this.hoveroverfx = -1
		let ctrltransform = x => {
			return (<li> {x.map(y => (<span onMouseEnter = {this.handlehover()} onMouseLeave = {this.handlehoverover()} style = {{"background-color":y[1]}}>{y[0]}</span>))}</li>)
		}
		
		let switcherCtrl = {
			0: [0],
			1: [1],
			2: [2],
			3: [3],
			4: [4],
			5: [5]
		}
	
		return (
			<FullText text = {this.props.text} transform = {ctrltransform} highlight = {this.props.highlight} switcher = {switcherCtrl} className={this.props.className}/>
		)
	}
}

export default ControlBox
		