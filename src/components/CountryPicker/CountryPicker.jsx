import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { countries } from "../api/index";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedcountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchedcountriesAPI = async () => {
      setFetchedCountries(await countries());
    };

    fetchedcountriesAPI();
  }, [setFetchedCountries]);
  // console.log(fetchedcountries);
  return (
    <FormControl color="primary" className={styles.FormControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedcountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
