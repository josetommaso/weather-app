import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {

  const [ search, setSearch ] = useState({
    city: '',
    country: ''
  });

  const [ call, setCall ] = useState(false);

  const [ apiResponse, setApiResponse ] = useState({});

  const [ error, setError ] = useState(false);


  const { city, country } = search;


  useEffect(() => {
    const callAPI = async () => {
      if (call) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}&units=metric`;

      const response = await fetch(url);
      const result = await response.json();

      setApiResponse(result);
      setCall(false);

      }
      // if there's an error in the call
      if(apiResponse.cod === '404') {
        setError(true);
      } else {
        setError(false);
      }
    }
    callAPI();
  }, [city, country, call, apiResponse.cod]);


  let component;
  if(error) {
    component = <Error message="No results" />
  } else {
    component = <Weather 
                  apiResponse={apiResponse}
                />
    
  }

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
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
