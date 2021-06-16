import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';

function Weatherforcast() {
    //state vars
    const [apiUrl, setApiUrl] = useState(location.origin+'/api/');
    const [temperatureList, setTemperatureList] = useState({});
    const [recievedlist, setRecievedlist] = useState(false);

    // use effect
    useEffect(() => {
        getTemperatureData();
    }, []);

    const getTemperatureData = () => {
        // create api connection and send request
        fetch(apiUrl+'weatherforcast', {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Referer': location.origin,
            }
        })
        .then(response => response.json())
        .then(response => {
            setTemperatureList(response);
            setRecievedlist(true);
            console.log(response);
        })
        .catch(err => {
            console.log(err);
            setRecievedlist(true);
        });
    };

    return (
        <div className="container">
            {
                !recievedlist
                ?
                <div>
                    There is nothing to display.
                </div>
                :
                <div>
                    {
                        temperatureList.map(
                            (temperature) => {
                                return (
                                    <p key={temperature.id}>
                                        Date: {temperature.date}<br />
                                        Temperature: {temperature.temperature}
                                    </p>
                                );
                            }
                        )
                    }
                </div>
            }
        </div>
    );
}

export default Weatherforcast;
