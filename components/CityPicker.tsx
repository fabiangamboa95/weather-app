"use client";

import { Country, City } from "country-state-city";
import { useState } from "react";
import Select from "react-select";

type CountryOption = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
};

type CityOption = {};

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

export default function CityPicker() {
  const [country, setCountry] = useState<CountryOption>();
  const [city, setCity] = useState<CityOption>();

  return (
    <div>
      <Select options={options} value={country} />
    </div>
  );
}
