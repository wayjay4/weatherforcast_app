import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Weatherforcast from './components/Weatherforcast';
import "./styles/weatherforcast.css";

function App(){
	return (
		<div className="container">
			<h2>Weatherforcast API Container</h2>

			<Switch>
				<Route path="/weatherforcast/">
					<Weatherforcast />
				</Route>
			</Switch>
		</div>
	);
}

if(document.getElementById("weatherforcast_app")){
	ReactDOM.render(<BrowserRouter>  <App /> </BrowserRouter>, document.getElementById("weatherforcast_app"));
}