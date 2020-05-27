import React from 'react'
import './App.css'
import FullText from './FullText.js'

//depreciated, not in use
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
			return (<li className="controlli"> {x.map(y => (<span onMouseEnter = {this.handlehover()} onMouseLeave = {this.handlehoverover()} style = {{"background-color":y[1]}}>{y[0]}</span>))}</li>)
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
			<div className="controlbox">
				<h3>Generic Profile Summary, Associate Professor (Research and Teaching)</h3>
				<FullText text = {this.props.text} transform = {ctrltransform} highlight = {this.props.highlight} switcher = {switcherCtrl} className={this.props.className+"inside"}/>
			</div>
		)
	}
}

export class ControlBoxGeneric extends React.Component {
	
	constructor(props) {
		super(props)
		this.hoverfx = -1
		this.hoveroverfx = -1
		this.handlehover = this.handlehover.bind(this)
		this.handhoverover = this.handlehoverover.bind(this)
	}
	
	handlehover() {
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
		this.hoveroverhx = -1
		let transformCtrl = this.props.transformgenerator(this.handlehover, this.handlehoverover)
		
		return (
			<div className = "controlbox">
				<h3>Generic Profile Summary</h3>
				<FullText
					text = {this.props.text}
					transform = {transformCtrl}
					highlight = {this.props.highlight}
					switcher = {this.props.switcher}
					className = "cbinside"
				/>
			</div>
		)
	}
}

export default ControlBox
		