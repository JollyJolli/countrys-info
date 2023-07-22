# country-info

> This package provides detailed information about different countries, including data such as names, capitals, country codes, top-level domains, and more.

## Installation
You can install this package using npm. Run the following command:
```js
npm install countrys-info
```

## Usage
### Get Country Information
You can use the **getCountryInfo** function to retrieve information about a specific country. This function takes the country name as input and optionally an array of specific fields to retrieve. If no specific fields are provided, all available data for the country will be returned.

```js
const { getCountryInfo } = require('countrys-info');

// Get information about a specific country
const countryData = getCountryInfo('Afghanistan');
console.log(countryData);

// Get a specific field of a country
const capitalEn = getCountryInfo('China', 'capital_en');
console.log(capitalEn);

// Get multiple fields of a country
const countryFields = getCountryInfo('China', ['capital_en', 'code_2', 'tld']);
console.log(countryFields);
```

### Get Continent Information
You can use the **getContinent** function to obtain information about countries in a specific continent. This function takes the continent name as input and optionally an array of specific fields to retrieve.

```js
const { getContinent } = require('countrys-info');

// Get information about countries in a specific continent
const africaCountries = getContinent('Africa');
console.log(africaCountries);

// Get specific fields of countries in a continent
const africaFields = getContinent('Africa', ['capital_en', 'code_2', 'tld']);
console.log(africaFields);
```

### Get All Countries Information
The **getAllCountries** function allows you to get information about all available countries. You can specify the fields you want to retrieve as an array.

```js
const { getAllCountries } = require('countrys-info');

// Get information about all countries
const allCountriesData = getAllCountries(['name_en', 'code_2']);
console.log(allCountriesData);
```

### Get Country by Top-Level Domain
The **getCountryByTLD** function allows you to find a country based on its top-level domain (TLD). Provide the TLD (e.g., ".us") and specify the fields to retrieve.

```js
const { getCountryByTLD } = require('countrys-info');

// Get information about a country by its top-level domain
const countryByTLD = getCountryByTLD('.us', ['name_en', 'capital_en']);
console.log(countryByTLD);
```

### Search Countries
The **searchCountries** function allows you to search for countries based on a keyword in their names, capitals, or codes. You can specify the fields you want to retrieve as an array.

```js
const { searchCountries } = require('countrys-info');

// Search for countries based on a keyword
const countriesByKeyword = searchCountries('united', ['name_en', 'capital_en']);
console.log(countriesByKeyword);
```

## Additional Documentation
### Function Signatures
#### getCountryInfo(countryName, fields)
- countryName (string): The name of the country in English or Spanish.
- fields (string or array of strings, optional): The specific fields to retrieve.
Returns an object or an array with the requested country information, or null if no information is found.

#### getContinent(continentName, fields)
- continentName (string): The name of the continent in English or Spanish.
- fields (string or array of strings, optional): The specific fields to retrieve.
Returns an array of objects containing information about the countries in the specified continent.

#### getAllCountries(fields)
- fields (array of strings, optional): The specific fields to retrieve.
Returns an array of objects containing information about all available countries.
#### getCountryByCode(countryCode, fields)
- countryCode (string): The code of the country (2-letter or 3-letter).
- fields (string or array of strings, optional): The specific fields to retrieve.
Returns an object or an array with the requested country information, or null if no information is found.

#### getCountryByTLD(topLevelDomain, fields)
- topLevelDomain (string): The top-level domain (TLD) of the country (e.g., ".us").
- fields (string or array of strings, optional): The specific fields to retrieve.
Returns an object or an array with the requested country information, or null if no information is found.

#### searchCountries(keyword, fields)
- keyword (string): The keyword to search for in country names, capitals, or codes.
- fields (array of strings, optional): The specific fields to retrieve.
Returns an array of objects containing information about the countries matching the keyword.

### Fields
- name_en: Country name in English.
- name_es: Country name in Spanish.
- continent_en: Continent name in English.
- continent_es: Continent name in Spanish.
- capital_en: Capital city name in English.
- capital_es: Capital city name in Spanish.
- dial_code: International dialing code for the country.
- code_2: ISO 3166-1 alpha-2 code for the country (2-letter country code).
- code_3: ISO 3166-1 alpha-3 code for the country (3-letter country code).
- tld: Top-level domain (TLD) for the country (e.g., ".af" for Afghanistan).
- km2: Total land area of the country in square kilometers.

# Changelog
## Version 3.1.0
- Added changelog
- Improved documentation in the README.md.

## Version 3.0.0
- Added getCountryByCode function to find countries by their ISO codes.
- Added getCountryByTLD function to find countries by their top-level domains (TLDs).
- Added searchCountries function to search for countries based on keywords.
- Added comprehensive documentation in the README.md.

## Version 2.0.0
Bugs Fixed

## Version 1.5.0
Improve code

## Version 1.0.0
Full Release

Initial release of countrys-info package.
- Added getCountryInfo function to retrieve country information.
- Added getContinent function to obtain continent information.
- Added getAllCountries function to get information about all countries.
- Added documentation in the README.md.
- Included example usage in the README.md.

## Version 0.0.2
Alpha release

## Version 0.0.1
Beta release