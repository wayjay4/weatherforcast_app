import React, { useState, useEffect } from 'react';

const WeatherData = (props) => {


	return (
		<div className="container weatherData-container">
            
                <strong>Date:</strong> {props.temperatureData.date}<br />
                <strong>Temperature:</strong> {props.temperatureData.temperature} &#8457;
            
		</div>
   	);
};

export default WeatherData;
