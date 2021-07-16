import { countries } from 'countries-list';

const countryOptions = Object.entries(countries).map(
  ([countryCode, country]) => ({
    value: countryCode,
    label: country.name,
  })
);

export default countryOptions;
