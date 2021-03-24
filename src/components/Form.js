import React from 'react';

const Form = () => {
    return (
        <form>
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="city"
                    id="city"
                />
                <label htmlFor="city">City:</label>
            </div>

            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                > 
                    <option value="">-- Choose a country --</option>
                    <option value="US">United States</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Span</option>
                    <option value="PE">Peru</option>
                </select>
                <label htmlFor="country">Country:</label>
            </div>
        </form>
     );
}
 
export default Form;