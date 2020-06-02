import React from 'react'
import './App.css'
import ControlBoxGeneric from './ControlBoxGeneric.js'
import FullTextGeneric from './FullTextGeneric.js'
import * as tools from './tools.js'

/*
Contains all three components of this file: the specific profile, generic profile, and evidences

This version makes use of props inputs instead. The prop input should be of the following format:
{
	Pro: {
		title: str,
		switcher: {int: [int]},
		text: [[str]], //of some sort, as long as transformer works on text
		transformer: x => (html)
			* x has the following format:
				text.map(x => [x,<color>]) //this is done by FullText
	},
	Evd: {
		title,
		switcher,
		text,
		transformer,
	},
	Ctrl: {
		title,
		switcher,
		text,
		transformergenerator: y,z => transformer 
			* y is used within ControlBox as a onMouseEnter handler
			* z is used within ControlBox as a onMouseExit handler
			tranformer returned html must include (onMouseEnter: y onMouseEnter: z) as props for the lowest level
	},
	Controls: initialized array
	Colors: array of colors for highlighting. Should be same length as Controls
	Title: str
	}
}
		
*/

export class LevelProfileContentGeneric extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			controlsA: this.props.data.ControlsA.slice(),
			controlsB: this.props.data.ControlsB.slice(),
			controlsC: this.props.data.ControlsC.slice()
		}
		
		this.handleCBhoverentry = this.handleCBhoverentry.bind(this)
		this.handleCBhoverexit = this.handleCBhoverexit.bind(this)
		this.handleCBclick = this.handleCBclick.bind(this)
		this.handleCBbutton = this.handleCBbutton.bind(this)
	}
	
	/*
	handleCBhoverentry(t) {
		let temp = cloneDeep(this.state.controlsB)
		temp[t] = true
		this.setState({controlsB: temp})
	}
	*/
	handleCBhoverentry(t) {
		this.state.controlsB[t] = true
		this.setState({controlsB: this.state.controlsB})
	}
	
	handleCBhoverexit(t) {
		this.state.controlsB[t] = false
		this.setState({controlsB: this.state.controlsB})
	}
	
	handleCBclick(t) {
		this.state.controlsA[t] = !this.state.controlsA[t]
		this.setState({controlsA: this.state.controlsA})
	}
	
	handleCBbutton() {
		this.setState({controlsC: [!this.state.controlsC[0]]})
	}
		
	
	render() {
		return (
			<div>
				<h3 className = "profiletitle"s>{this.props.data.Title}</h3>
				<div className = "everything">
					<div className = "left">
						<ControlBoxGeneric
							title = {this.props.data.Ctrl.title}
							text = {this.props.data.Ctrl.text}
							transformgenerator = {this.props.data.Ctrl.transformergenerator}
							configs = {tools.cbcombine(this.state.controlsA, this.state.controlsB)}
							switcher = {this.props.data.Ctrl.switcher}
							handlehover = {this.handleCBhoverentry}
							handlehoverover = {this.handleCBhoverexit}
							handleclick = {this.handleCBclick}
							nothing = {1/*defaultconfig = {this.props.data.Ctrl.defaultconfig}*/}
							defaultconfig = {this.props.data.Ctrl.defaultconfig}
							configvals = {this.props.data.Ctrl.configvals}
							className = "controlbox"
							helpertext = {true}
							handlebutton = {this.handleCBbutton}
							
						/>
						<FullTextGeneric
							title = {this.props.data.Evd.title}
							text = {this.props.data.Evd.text}
							transform = {this.props.data.Evd.transformer}
							configs = {tools.combine(this.state.controlsA, this.state.controlsB, [0,1,2,3])}
							switcher = {this.props.data.Evd.switcher}
							configvals = {this.props.data.Evd.configvals}
							defaultconfig = {this.props.data.Evd.defaultconfig}
							className = "evidence"
						/>
					</div>
					<div className = "right">
						<FullTextGeneric
							title = {this.props.data.Pro.title}
							text = {this.props.data.Pro.text}
							transform = {this.props.data.Pro.transformer}
							configs = {this.state.controlsB}
							switcher = {this.props.data.Pro.switcher}
							configvals = {this.props.data.Pro.configvals}
							defaultconfig = {this.props.data.Pro.defaultconfig}
							className = "profile"
							visibility = {this.state.controlsC[0]}
						/>
					</div>
					
				</div>
			</div>
		)
	}
}

export default LevelProfileContentGeneric