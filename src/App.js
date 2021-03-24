import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  const [ search, setSearch ] = useState({
    city: '',
    country: ''
  });

  const [ call, setCall ] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const callAPI = async () => {
      if (call) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`;

      const response = await fetch(url);
      const result = await response.json();

      console.log(result);
      }
    }
    callAPI();
  }, [city, country, call]);

  return (
    <Fragment>
      <Header
        title="Weather React App"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form 
                search={search}
                setSearch={setSearch}
                setCall={setCall}
              />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
