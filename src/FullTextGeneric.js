import React from 'react'
import './App.css'

/* The following props are required for this Component to function:
 * defaultconfig: list of default configured styling properties. The index of the elements is based on the text (i.e. this.config, not this.props.configs!)
 * configs: data from ControlBox, i.e. state data from LevelProfileContentGeneric
 * configvals: values for configurations to be switched to. Length must be equal to configs. The index of the elements is based on configs, not the text (i.e on this.props.configs, not this.config)!
 * title: title of text
 * text: text data
 * transform: transform function generator for text data
 * switcher: this.props.configs -> this.config mapping
 * className: self-explanatory
 */
export class FullTextGeneric extends React.Component {
	constructor(props) {
		super(props)
		this.genindex = -1
		this.configgen = this.configgen.bind(this)
		
		this.config = []
	}
	
	configgen() {
		this.genindex ++
		const c = this.genindex
		return this.config[c]
	}
	
	render() {
		
		if (!this.props.visibility) {
			return null
		}
		
		this.config = this.props.defaultconfig.slice()
		
		let i
		for (i = 0; i < this.props.configs.length; i++) {
			if (this.props.configs[i]) {
				this.props.switcher[i].forEach(x => this.config[x] = this.props.configvals[i])
			}
		}
		this.genindex = -1
		
		let textlist = this.props.text.map(this.props.transform(this.configgen))
		
		let titletext = (<h3>{this.props.title}</h3>)
		if (this.props.title === -1) {
			titletext = (<div></div>)
		}
		
		return (
			<div className = {this.props.className}>
				{titletext}
				{textlist}
				{/*<p>{this.config.toString().replace(/,/g, ", ")}</p> //For debugging*/}
			</div>
		)
	}
}

FullTextGeneric.defaultProps = {
	visibility: true
}

export default FullTextGeneric
					