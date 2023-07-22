const { getCountryInfo, getContinent, getAllCountries, getCountryByCode, getCountryByTLD, searchCountries } = require('./index');

// Test getCountryInfo
const afghanistanInfo = getCountryInfo('Afghanistan');
console.log('Afghanistan Info:', afghanistanInfo);

const capitalEn = getCountryInfo('China', 'capital_en');
console.log('China Capital (English):', capitalEn);

const chinaFields = getCountryInfo('China', ['capital_en', 'code_2', 'tld']);
console.log('China Fields:', chinaFields);

// Test getContinent
const africaCountries = getContinent('Africa');
console.log('African Countries:', africaCountries);

const africaFields = getContinent('Africa', ['capital_en', 'code_2', 'tld']);
console.log('African Countries Fields:', africaFields);

// Test getAllCountries
const allCountriesData = getAllCountries(['name_en', 'code_2']);
console.log('All Countries Data:', allCountriesData);

// Test getCountryByCode
const germanyByCode = getCountryByCode('DE', ['name_en', 'capital_en']);
console.log('Germany by Code:', germanyByCode);

// Get country by top-level domain
const countryByTLD = getCountryByTLD('.us');
console.log('Country by TLD:', countryByTLD);

// Search countries by keyword
const countriesByKeyword = searchCountries('united', ['name_en', 'capital_en']);
console.log('Countries by Keyword:', countriesByKeyword);