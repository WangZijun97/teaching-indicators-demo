import React from 'react'
import * as tools from './tools.js'


//outdated, see lv4profile_integrated below instead
//this dataset will not work without adding dummy properties and values as it is not updated to make use of FullTextGeneric and the modified ControlBoxGeneric. This is due to this version not requiring an additional switch setup
export let lv4profile = {
	Pro: {
		title: "Specific Profile, Associate Professor (RT Appointment)",
		switcher: {
			0: [0],
			1: [1,3],
			2: [2],
			3: [4],
			4: [5],
			5: [6]
		},
		text: [
			[
				"Dr Patricia Nguyen is an active Theatre Studies scholar. Over the last 6 years, since joining the Department, she has regularly participated in regional conferences and organisations, which suggests that she is up to date and familiar with the current issues and status of her field. ",
				"As a practising playwright and dramaturg, she has the background and experience to help students bridge between theory and industry. Her teaching evaluations are high and students comment on her ability to integrate academic learning and artistic processes. ",
				"She designs curriculum and assignment tasks that support students to think and take risks, and to develop a clear subject position in relation to text and performance. ",
				"Her pedagogical approach is to create a safe yet challenging learning environment to build trust and engage students, and one key aspect of this is through candid storytelling that connects with their identities while exposing them to other points of view."
			],
			[
				(<span>Dr Nguyen takes feedback from students very seriously. For example, she discovered that many students found it difficult to understand the key concept of <i>Entfremdung</i>, which was apparent from multiple assessments that demonstrated misconceptions and received low grades. </span>),
				"She inquired into the reasons for this difficulty and took steps to change her approach to teaching. This investigation resulted in positive comments from students in but improved student understanding, as evident from her systematic analysis of assignments in subsequent years based on quality criteria. She based this analysis on recent scholarship that demonstrates the importance of universal design for learning as a framework for inclusivity. ",
				"Dr Nguyen's impact as an educator goes beyond classroom teaching. She regularly presents her approach to teaching in departmental seminars and has conducted a number of Graduate Professionalisation workshops for tutors in her department. As undergraduate coordinator for Theatre Studies, she leads curriculum planning and is regularly asked to review curriculum at other universities. "
			]
		],
		transformer: colorfn => {return x => (<p> {x.map(y => (<span style= {{"background-color": colorfn()}}>{y}</span>))}</p>)}
	},
	Evd: {
		title: -1,
		switcher: {
			0: [1,2],
			1: [3,5],
			2: [6,7],
			3: [8,10],
			4: [11,12],
			5: [14,15]
		},
		text: [
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
		],
		transformer: colorfn => {return x => (<div><p><span style={{"background-color":colorfn()}}>{x[0]}</span></p><ul>{x.slice(1).map(y => (<li><span style={{"background-color":colorfn()}}>{y}</span></li>))}</ul></div>)}
	},
	Ctrl: {
		title: "Generic Profile Summary, Associate Professor (Research and Teaching)",
		switcher: {
			0: [0],
			1: [1],
			2: [2],
			3: [3],
			4: [4],
			5: [5]
		},
		text: [
			[
				(<span>A committed teacher with deep knowledge of the subject taught, individual students and how they learn, and what needs to be done to support their learning <b>(K: knowledge base).</b></span>)
			],
			[
				(<span>Demonstrates positive impact on students' education, attained through high levels of achievement in both the <b>process (LF: learning facilitation) </b></span>),
				(<span> and the <b>design</b> of teaching important content that provides students with a strong knowledge base <b>(ED: educational design).</b></span>)
			],
			[
				(<span>Engages in sustained <b>reflection (RP: reflective practice)</b> </span>),
				(<span>that is underpinned by <b>scholarly engagement</b> with relevant research-informed work in order to improve their teaching and their students' learning <b>(SP: scholarly practice).</b></span>)
			],
			[
				(<span>Can provide significant evidence of the <b>influence of their teaching</b> - contributions through the process and design of teaching and curriculum, as well as through reflection and scholarly engagement shared with colleagues in the department and faculty <b>(EL: educational leadership).</b></span>)
			]
		],

		transformergenerator: (f1,f2) => {return colorfn => {return x => {
			return (<li className="controlli"> {x.map(y => (<span onMouseEnter = {f1()} onMouseLeave = {f2()} style = {{"background-color":colorfn()}}>{y}</span>))}</li>)
		}}}
	},
	ControlsA: [false], //not in use
	ControlsB: tools.falselistgen(6),
	Colors: ["saddlebrown", "green", "blue", "indianred", "mediumseagreen","rebeccapurple"],
	Title: "Profile, Associate Professor (RT Appointment)"
}

//The following data uses the edited Lv IV AP RT Profile with K, EL and Evd Integrated
export let lv4profile_integrated = {
	Pro: {
		title: "Specific Profile with Examples, Level 4 (Research and Teaching position)",
		switcher: {
			0: [3, 14],
			1: [1],
			2: [5, 8],
			103: [2],
			3: [17],
			4: [6],
			5: [18],
			6: [7],
			107: [1],
			7: [17],
			8: [10,12],
			9: [13],
			110: [1],
			10: [10],
			11: [15],
			12: [17],
			113: [1],
			13: [18]
		},
		text: [
			[
				"Dr Patricia Nguyen is an active Theatre Studies scholar. ",
				"Over the last 6 years, ",
				"since joining the Department, she has regularly participated in regional conferences and organisations, which suggests that she is up to date and familiar with the current issues and status of her field. ",
				"As a practising playwright and dramaturg, she has the background and experience to help students bridge between theory and industry. ",
				"Her teaching evaluations are high ",
				"and students comment on her ability to integrate academic learning and artistic processes. ",
				"She designs curriculum and assignment tasks that support students to think and take risks, ",
				"and to develop a clear subject position in relation to text and performance. ",
				"Her pedagogical approach is to create a safe yet challenging learning environment to build trust and engage students, ",
				"and one key aspect of this is through candid storytelling that connects with their identities while exposing them to other points of view. "
			],
			[
				"Dr Nguyen takes feedback from students very seriously. ",
				(<span>For example, she discovered that many students found it difficult to understand the key concept of <i>Entfremdung</i>, which was </span>),
				"apparent from multiple assessments that demonstrated misconceptions and received low grades. She inquired into the reasons for this difficulty and took steps to change her approach to teaching. ",
				"This investigation resulted in positive comments from students in but improved student understanding, ",
				"as evident from her systematic analysis of assignments in subsequent years based on quality criteria. ",
				"She based this analysis on recent scholarship that demonstrates the importance of universal design for learning as a framework for inclusivity. ",
				"Dr Nguyen’s impact as an educator goes beyond classroom teaching. ",
				"She regularly presents her approach to teaching in departmental seminars and has conducted a number of Graduate Professionalisation workshops for tutors in her department. ",
				"As undergraduate coordinator for Theatre Studies, she leads curriculum planning and is regularly asked to review curriculum at other universities. "
			]
		],
		
		transformer: colorfn => {return x => (<p>{x.map(y => (<span style = {{"background-color": colorfn()}}>{y}</span>))}</p>)},
		
		defaultconfig: tools.defaultconfiggen(19, tools.DEFAULTCOLOR),
		configvals: tools.colorlistgen()
	},

	Evd: {
		title: "Evidence",
		switcher: {
			0: [0,1,2,13,14,15,16,17,18,27,28,29,30,37,38,39,40,41,42],
			1: [0,4,5,19,20,21,22,31,32,43,44],
			2: [0,7,8,23,24,33,34,45,46],
			3: [0,10,11,25,26,35,36,47,48],
			4: [3],
			5: [3],
			6: [3],
			7: [3],
			8: [6],
			9: [6],
			10: [6],
			11: [6],
			12: [9],
			13: [9],
			14: [9],
			15: [12],
			16: [12],
			17: [12]
		},
		text: [[
			[
				(
					<div>
						<p>Click on one of the dimensions (LF, ED, RP or SP) above to view the different types of evidences used to support accomplishments in that dimension. The below evidences are still sorted by the above dimensions using different bullet point shapes, refer to the legend for help (Information will appear once at least one dimension has been selected).</p>
						<p style = {{"text-indent": "1em"}}><u><b>Legend</b></u></p>
					</div>
				)
			],
			[
				"Learning Facilitation (LF)",
				"Educational Design (ED)",
				"Reflective Practice (RP)",
				"Scholarly Practice (SP)"
			],
			[
				[
					"Teacher Practitioner",
					[
						"Student experience data",
						"Peer/mentor/supervisor reports regarding your teaching",
						"Prizes/awards/testimonials regarding your teaching",
						"Learning strategies and environments you have designed and implemented",
						"Student experience data regarding the above strategies",
						"Improvements in teaching made based on reflection on feedback",
						"Engagement with pedagogical scholarship"
					]
				],
				[
					"Teacher Leader",
					[
						"Activities you have led to engage peers in improving students' learning",
						"Peer testimonials regarding your influence on keeping subject curricula/educational programs current and updated",
						"Activities you initiated to engage peers in reviewing the educational designs of the subjects/programs they currently teach, in light of professional/academic developments",
						"Changes made to subject/programme content and foci based on student feedback and developments in your discipline",
						"Activities initiated to engage others in critical review of the existing subjects/programs in which you teach"
					]
				],
				[
					"Teacher Manager",
					[
						"Availability management",
						"Provision of feedback to students",
						"Timely submissions",
						"Management of existing learning resources and environments",
						"Management of processes associated with student and peer review",
						"Management of professional learning activities targeting teachers"
					]
				]
			]
		]],
		
		transformer: configfn => {return x => {return (
			<div>
				<span className = "helptext" style = {{"display":configfn()[2]}}><i>{x[0]}</i></span>
				<ul>
					{x[1].map(y => (<li className = {configfn()[3]} style = {{"display": configfn()[1]}}><span style = {{"background-color": configfn()}}><i>{y}</i></span></li>))/*subtitle bulletpoints*/}
				</ul>
				{x[2].map(z => {return (
					<div>
						<h4>{z[0]/*section title*/}</h4>
						<ul>
							{z[1].map(w => (<li className = {configfn()[3]} style = {{"display": configfn()[1]}}>{w}</li>)) /*bullet points*/}
						</ul>
					</div>
				)})}
			</div>
		)}},
		
		defaultconfig: tools.combine(tools.defaultconfiggen(4, tools.DEFAULTCOLOR), tools.defaultconfiggen(45, ["none", "none", "inline", "null"]), [3,6,9,12]),
		
		configvals: tools.combine(
			[
				["inline", "list-item", "inline", "lilf"],
				["inline", "list-item", "inline", "lied"],
				["inline", "list-item", "inline", "lirp"],
				["inline", "list-item", "inline", "lisp"]
			], tools.colorlistgen(), [0,1,2,3])
		
	}, 
	Ctrl: {
		title: "Generic Profile, Level 4 (Research and Teaching position)",
		switcher: {
			0: [0],
			1: [1],
			2: [2],
			3: [3],
			4: [4],
			5: [5],
			6: [6],
			7: [7],
			8: [8],
			9: [9],
			10: [10],
			11: [11],
			12: [12],
			13: [13],
			14: [14],
			15: [15],
			16: [16],
			17: [17]
		}, //this is a combination of switcher for display and bgcolor
		text: [
			[
				(<span>A committed teacher with deep knowledge of the subject taught, individual students and how they learn, and what needs to be done to support their learning, with sustained performance over at least 5-7 years. Demonstrates positive impact on studens' education, attained through high levels of achievement in both the process <b>(LF)</b> and the design <b>(ED)</b> of teaching that benefits students' learning.</span>),
				[
					[
						(<span>Level 4, Learning Facilitation (LF): </span>),
						[
							(<span><b>Applies knowledge</b> of developments in discipline/profession to support <b>deployment</b> of activities and provision of feedback to students</span>),
							(<span>Recognition and <b>esteem</b> for <b>accomplishments</b> in <b>deployment</b> of learning activities</span>),
							(<span>Positive <b>impact</b> and <b>influence</b> on <b>learning</b> outcomes and experiences of students within the <b>school</b></span>),
							(<span><b>Engaging others</b> to apply knowledge of developments in discipline/profession and of learning facilitation activities to <b>critically review</b> teaching within a school's programs and services.</span>)
						]
					],
					[
						(<span>Level 4, Educational Design (ED): </span>),
						[
							(<span><b>Applies knowledge</b> of developments in discipline/profession to support <b>review and development</b> of subjects they teach</span>),
							(<span>Recognition and <b>esteem</b> for <b>accomplishments</b> in <b>design and development</b> of learning activities</span>),
							(<span>Positive <b>impact</b> on <b>quality</b> of learning activities within the <b>school</b></span>),
							(<span><b>Engaging others</b> to apply knowledge of developments in discipline/profession and of educational design to <b>critically review</b> the university programs and services.</span>)
						]
					]
				]
			],
			[
				(<span>Engages in sustained reflection <b>(RP)</b> that is underpinned by scholarly engagement <b>(SP)</b> with relevant research-informed work in order to improve their teaching and their students' learning.</span>),
				[
					[
						(<span>Level 4, Reflective Practice (RP): </span>),
						[
							(<span><b>Reflection</b> on how to <b>align</b> acquired <b>knowledge</b> of good teaching approaches within discipline and teaching context with own teaching practices</span>),
							(<span>Recognition and <b>esteem</b> for being an <b>accomplished reflective</b> teacher</span>),
							(<span><b>Improving</b> subjects and programs taught according <b>to peer/student feedback received and advances</b> within their discipline/profession.</span>),
						]
					],
					[
						(<span>Level 4, Scholarly Practice (SP): </span>),
						[
							(<span>Development of <b>familiarity</b> and <b>knowledge</b> of good teaching approaches within discipline and teaching context</span>),
							(<span>Recognition and <b>esteem</b> for <b>accomplishments</b> in <b>scholarly work</b> in education</span>),
							(<span><b>Engaing others</b> to apply knowledge of developments in discipline/profession and of educational design to <b>critically review</b> the university programs and services.</span>)
						]
					]
				]
			]
		],
		
		transformergenerator: (fenter, fexit, fclick) => {return configfn => {return y => {
			return (
				<li className = "controlli">{y[0]}
					<ul>
						{y[1].map(b => {return (
							<li className = "cbdimension">
								<span onClick = {fclick()}>{b[0]} <i><u>(click to expand/compress)</u></i></span>
								<ul style = {{"display": configfn()}}>
									{b[1].map(c => <li><span onMouseEnter = {fenter()} onMouseLeave = {fexit()} style = {{"background-color": configfn()}}>{c}</span></li>)/*sublevel 2*/}
								</ul>
							</li>
						)})/*sublevel 1*/}
					</ul>
				</li>
			)
		}}},
		defaultconfig: tools.cbdefconfiggen(),
		configvals: tools.cbconfigvalsgen()
	},
	ControlsA: tools.falselistgen(4), //to toggle which dimension
	ControlsB: tools.falselistgen(13), //to toggle highlighting
	ControlsC: [false], //to toggle specific profile visibility
	Colors: tools.colorlistgen(),
	Title: "Profile, Level 4 (Research and Teaching position)"
	
				
					
}

				
				
				
				
				
				
				
				
				