import React from 'react'
import './App.css'
import FullTextGeneric from './FullTextGeneric.js'
import * as tools from './tools.js'

export class ControlBoxGeneric extends React.Component {
	
	constructor(props) {
		super(props)
		this.fgenfx = [-1,-1,-1]
		this.handlehover = this.handlehover.bind(this)
		this.handlehoverover = this.handlehoverover.bind(this)
		this.handleclick = this.handleclick.bind(this)
	}
	
	handlehover() {
		this.fgenfx[0]++
		const t = this.fgenfx[0]
		return () => this.props.handlehover(t)
	}
	
	handlehoverover() {
		this.fgenfx[1]++
		const t = this.fgenfx[1]
		return () => this.props.handlehoverover(t)
	}
	
	handleclick() {
		this.fgenfx[2]++
		const t = this.fgenfx[2]
		return () => this.props.handleclick(t)
	}
	
	render() {
		this.fgenfx = [-1,-1,-1]
		let transformCtrl = this.props.transformgenerator(this.handlehover, this.handlehoverover, this.handleclick)
		
		let secondheader = this.props.title
		if (this.props.helpertext) {
			secondheader = ""
		}
		
		return (
			<div className = "controlbox">
				<CBHelperText 
					ifrender = {this.props.helpertext}
					title = {this.props.title}
					handlebutton = {this.props.handlebutton}
					className = "cbhelpertext"
				/>
				<FullTextGeneric
					title = {secondheader}
					text = {this.props.text}
					transform = {transformCtrl}
					configs = {this.props.configs}
					switcher = {this.props.switcher}
					className = "cbinside"
					configvals = {this.props.configvals}
					defaultconfig = {this.props.defaultconfig}
				/>
			</div>
		)
	}
}

class CBHelperText extends React.Component {
	
	render() {
		if (!this.props.ifrender) {
			return 
		}
		
		return (
			<div>
				<h3>{this.props.title}</h3>
				<div className = "intro">
					<FullTextGeneric
						title = {-1}
						text = {["Welcome! This generic profile describes the typical roles and contributions of someone appointed as an associate professor in a research-teaching position. Click on the text below for more details regarding the generic profile. You can also use the \"Specific Profile\" button and hover over the detailed subpointers to see how the generic profile maps into an example specific profile."]}
						transform = {x => {return y => {return (<span><i>{y}</i></span>)}}}
						configs = {[]}
						switcher = {{}}
						className = {this.props.className + " helptext"}
						configvals = {[]}
						defaultconfig = {[]}
					/>
					<div className = "introbutton">
						<button onClick = {this.props.handlebutton}>Specific Profile</button>
					</div>
				</div>
			</div>
		)
	}
}
			

//depreciated
export class ControlBoxGenericOLD extends React.Component {
	
	constructor(props) {
		super(props)
		this.hoverfx = -1
		this.hoveroverfx = -1
		this.handlehover = this.handlehover.bind(this)
		this.handlehoverover = this.handlehoverover.bind(this)
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
		this.hoveroverfx = -1
		let transformCtrl = this.props.transformgenerator(this.handlehover, this.handlehoverover)
		
		return (
			<div className = "controlbox">
				<FullTextGeneric
					title = {this.props.title}
					text = {this.props.text}
					transform = {transformCtrl}
					configs = {this.props.highlight}
					switcher = {this.props.switcher}
					className = "cbinside"
					configvals = {this.props.colors}
					defaultconfig = {tools.defaultconfiggen(this.props.text.flat().length, tools.DEFAULTCOLOR)}
				/>
				
			</div>
		)
	}
}

export default ControlBoxGeneric