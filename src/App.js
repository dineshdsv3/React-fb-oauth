import React from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './components/Facebook';

function App() {
	return (
		<div className="App">
			<h1>Facebook Auth Example</h1>
      <p>To get started with authentication of FB</p>
			<Facebook />
		</div>
	);
}

export default App;
