import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import urlcat from "urlcat";
import { SERVER } from "../utils/constants";

function CountriesSelect({ name }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const url = urlcat(SERVER, "/countries");
      const request = await fetch(url);
      const data = await request.json();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  return (
    <select name={name}>
      {countries.map((country) => (
        <option key={country._id} value={country._id}>
          {country.title}
        </option>
      ))}
    </select>
  );
}

CountriesSelect.propTypes = {
  name: PropTypes.string,
};

export default CountriesSelect;
