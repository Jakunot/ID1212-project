import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomepagePresenter from './presenters/HomepagePresenter';
import Header from './views/header';


function App(props) {
	return (
		<BrowserRouter>
			<div className="flexParent">
				<Header />
				<Routes>
					<Route path="/home" element={<HomepagePresenter model={props.model} />}/>
					<Route path="/" element={<HomepagePresenter model={props.model} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;