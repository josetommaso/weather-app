import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({apiResponse}) => {
    const { name, main } = apiResponse;

    if(!name) return null;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather in {name} is:</h2>
                <p className="temperatura">{Math.trunc(main.temp)}<span> &#x2103;</span></p>
                <p>Max. Temperature: {Math.trunc(main.temp_max)}<span> &#x2103;</span></p>
                <p>Min. Temperature: {Math.trunc(main.temp_min)}<span> &#x2103;</span></p>
                <p>Humidity: {Math.trunc(main.humidity)}<span>%</span></p>
            </div>
        </div>
     );
}
 
Weather.propTypes = {
    apiResponse: PropTypes.object.isRequired
}

export default Weather;