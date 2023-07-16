# country-info

> This package provides detailed information about different countries, including data such as names, capitals, country codes, top-level domains, and more.

## Installation
You can install this package using npm. Run the following command:
```js
npm install countrys-info
```

## Usage
Below is a basic example of how you can use this package in your project:
```js
const { getCountryInfo, getContinent } = require('countrys-info');

// Get information about a specific country
const countryData = getCountryInfo('Mexico');
console.log(countryData);

// Get a specific field of a country
const capitalEn = getCountryInfo('Alemania', 'capital_en');
console.log(capitalEn);

// Get multiple fields of a country
const countryFields = getCountryInfo('Canada', ['capital_en', 'code_2', 'tld']);
console.log(countryFields);

// Get countries in a specific continent
const countriesInOceania = getContinent('Oceania');
console.log(countriesInOceania);

// Get specific fields of countries in a continent
const africaFields = getContinent('Africa', ['capital_en', 'code_2', 'tld']);
console.log(africaFields);
```

## Additional Documentation
### getCountryInfo(countryIdentifier, fields, continent)
This function is used to retrieve information about a specific country. It takes the country identifier as input, which can be either the country name or country code (2-letter or 3-letter code). Optionally, you can specify an array of specific fields to retrieve. If no specific fields are provided, all available data for the country will be returned.

countryIdentifier (string): The name or code of the country in English or Spanish.
fields (string or array of strings): The specific fields to retrieve.
continent (string): The name of the continent to filter the search (optional).
Returns an array of the requested country information, or null if no information is found.

### getContinent(continentName, fields)
This function is used to retrieve information about countries in a specific continent. It takes the continent name as input and optionally an array of specific fields to retrieve. If no specific fields are provided, all available data for the countries will be returned.

continentName (string): The name of the continent in English or Spanish.
fields (array of strings): The specific fields to retrieve.
Returns an array of objects containing the requested country information for the countries in the continent, or null if no information is found