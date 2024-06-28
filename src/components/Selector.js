// Selector.js

import countriesJson from "../countries.json";

const Selector = () => {
  return (
    <div>
      <select>
        {countriesJson.map((countryElm, index) => (
          <option key={index} value={countryElm.Slug}>
            {countryElm.Country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
