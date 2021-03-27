import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ({search, setSearch, setCall}) => {

    const { city, country } = search;

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    const [ error, setError ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        // validation
        if(city.trim() === '' || country.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        setCall(true);

    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            { error ? <Error message="All fields are required" /> : null}
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">City:</label>
            </div>

            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                > 
                    <option value="">-- Choose a country --</option>
                    <option value="US">United States</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Span</option>
                    <option value="PE">Peru</option>
                    <option value="UK">United Kingdom</option>
                    <option value="VE">Venezuela</option>
                </select>
                <label htmlFor="country">Country:</label>
            </div>
            <div className="input-field col s12">
                <button type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4 center-block">Search</button>
            </div>
        </form>
     );
}

Form.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setCall: PropTypes.func.isRequired
}
  
 
export default Form;