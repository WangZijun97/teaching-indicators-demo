import React from 'react'
import './App.css'
import FullText from './FullText.js'
import ControlBox from './ControlBox.js'

/*
Contains all three components of this file: the specific profile, generic profile, and evidences
*/

export class Everything extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			highlight: [false,false,false,false,false,false]
		}
		this.handlecbhover = this.handlecbhover.bind(this)
		this.handlecbhoverover = this.handlecbhoverover.bind(this)
	}
	
	handlecbhover(t) {
		this.state.highlight[t] = true
		this.setState({highlight: this.state.highlight})
		//alert("hover " + t)
	}
	
	handlecbhoverover(t) {
		this.state.highlight[t] = false
		this.setState({highlight: this.state.highlight})
		//alert("a " + t)
	}
	
	render() {
		let switcherPro = {
			0: [0],
			1: [1,3],
			2: [2],
			3: [4],
			4: [5],
			5: [6]
		}
		
		let switcherEvd = {
			0: [1,2],
			1: [3,5],
			2: [6,7],
			3: [8,10],
			4: [11,12],
			5: [14,15]
		}
		
		let pro = [
			[
				"Dr Patricia Nguyen is an active Theatre Studies scholar. Over the last 6 years, since joining the Department, she has regularly participated in regional conferences and organisations, which suggests that she is up to date and familiar with the current issues and status of her field. ",
				"As a practising playwright and dramaturg, she has the background and experience to help students bridge between theory and industry. Her teaching evaluations are high and students comment on her ability to integrate academic learning and artistic processes. ",
				"She designs curriculum and assignment tasks that support students to think and take risks, and to develop a clear subject position in relation to text and performance. ",
				"Her pedagogical approach is to create a safe yet challenging learning environment to build trust and engage students, and one key aspect of this is through candid storytelling that connects with their identities while exposing them to other points of view."
			],
			[
				"Dr Nguyen takes feedback from students very seriously. For example, she discovered that many students found it difficult to understand the key concept of Entfremdung, which was apparent from multiple assessments that demonstrated misconceptions and received low grades. ",
				"She inquired into the reasons for this difficulty and took steps to change her approach to teaching. This investigation resulted in positive comments from students in but improved student understanding, as evident from her systematic analysis of assignments in subsequent years based on quality criteria. She based this analysis on recent scholarship that demonstrates the importance of universal design for learning as a framework for inclusivity. ",
				"Dr Nguyen's impact as an educator goes beyond classroom teaching. She regularly presents her approach to teaching in departmental seminars and has conducted a number of Graduate Professionalisation workshops for tutors in her department. As undergraduate coordinator for Theatre Studies, she leads curriculum planning and is regularly asked to review curriculum at other universities. "
			]
		]
		
		let protransform = x => (<p> {x.map(y => (<span style= {{"background-color":y[1]}}>{y[0]}</span>))}</p>)
		let evdtransform = x => (<div><p><span style={{"background-color":x[0][1]}}>{x[0][0]}</span></p><ul>{x.slice(1).map(y => (<li><span style={{"background-color":y[1]}}>{y[0]}</span></li>))}</ul></div>)
		
		let evd = [
			[
				"Evidence of Esteem",
				"Reports/comments/reviews from peers (internal & external)",
				"Feedback from participants on quality of workshops, seminars, conference talks",
				"External evaluation reports"
			],
			[
				"Evidence of Impact",
				"Data on students' performance",
				"Peer/mentor/supervisor reports",
				"Prizes and awards",
				"Students' course evaluations"
			],
			[
				"Evidence of Influence",
				"Testimonials from students/peers (internal & external)",
				"Authored or co-authored publications",
				"Instructional resources adopted by others"
			],
			[
				"Sustainability of performance/contributions",
				"Data on students' results over time",
				"Publication records over time"
			]
		]
		
		let controlboxtext = [
			[
				"A committed teacher with deep knowledge of the subject taught, individual students and how they learn, and what needs to be done to support their learning (CK)."
			],
			[
				"Demonstrates positive impact on students' education, attained through high levels of achievement in both the process (LF) ",
				"and the design of teaching important content that provides students with a strong knowledge base (ED)."
			],
			[
				"Engages in sustained reflection (RP) ",
				"that is underpinned by scholarly engagement with relevant research-informed work in order to improve their teaching and their students' learning (SP)."
			],
			[
				"Can provide significant evidence of the influence of their teaching - contributions through the process and design of teaching and curriculum, as well as through reflection and scholarly engagement shared with colleagues in the department and faculty (EL)."
			]
		]
		
		return (
			<div className="everything">
				<div className="left">
				<ControlBox text = {controlboxtext} highlight = {this.state.highlight} handlehover = {this.handlecbhover} handlehoverover = {this.handlecbhoverover} className="controlbox"/>
				<FullText text = {evd} transform = {evdtransform} highlight = {this.state.highlight} switcher = {switcherEvd} className="evidence"/>
				</div>
				<div className="right">
					<FullText text = {pro} transform = {protransform} highlight = {this.state.highlight} switcher = {switcherPro} className="profile"/>
				</div>
			</div>
		)
	}
}

export default Everything