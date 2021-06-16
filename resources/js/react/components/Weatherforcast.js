import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';

function Weatherforcast() {
    //state vars
    const [appState, setAppState] = useState({});

    // use effect
    useEffect(() => {
        window.onload = function() {

        }
    }, []);



    return (
        <div className="container">
            Hello world! from Weatherforcast...
        </div>
    );
}

export default Weatherforcast;
