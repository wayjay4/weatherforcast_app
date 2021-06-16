import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import WeatherData from './WeatherData';

function Weatherforcast() {
    //state vars
    const [apiUrl, setApiUrl] = useState(location.origin+'/api/');
    const [mainList, setMainList] = useState({});
    const [temperatureList, setTemperatureList] = useState({});
    const [recievedlist, setRecievedlist] = useState(false);

    const sevendays = 7;
    const fourteendays = 14;

    // use effect
    useEffect(() => {
        getTemperatureData(sevendays);
    }, []);

    const getTemperatureData = (numDays) => {
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
            setMainList(response);
            setTemperatureList(makeList(response, numDays));
            setRecievedlist(true);
        })
        .catch(err => {
            console.log(err);
            setRecievedlist(true);
        });
    };

    // make list with only max numDays
    const makeList = (array, numDays) => {
        let tempArray = [];
        let i = 0;

        while (i < numDays) {
          tempArray[i] = array[i];
          i++;
        }

        return tempArray;
    };

    const handleBtnClick = (el) => {
        const numDays = $(el.target).attr("data-days");
        getTemperatureData(numDays);
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
                    <div className="action-btns">
                        <button type="button" className="btn btn-primary" onClick={handleBtnClick} data-days={sevendays}>Show 7-Day Forcast</button>
                        <button type="button" className="btn btn-secondary" onClick={handleBtnClick} data-days={fourteendays}>Show 14-Day Forcast</button>
                    </div>

                    {
                        temperatureList.map(
                            (temperatureData) => {
                                return (
                                    <WeatherData key={temperatureData.id} temperatureData={temperatureData} />
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
