import React from 'react';
import './App.css';
import LevelProfileContentGeneric from './LevelProfileContentGeneric.js'
import * as data from './data.js'

function App() {
	return (
		<div className = "App">
			<header className = "App-header">
				<LevelProfileContentGeneric data = {data.lv4profile_integrated} />
				<div className = "credits">
					<p>Created using React.js. <a href = "https://github.com/WangZijun97/teaching-indicators-demo/tree/master">Github Repo</a></p>
				</div>
			</header>
		</div>
	)
}
	

export default App;
