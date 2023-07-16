const { getCountryInfo } = require('./index');

const capitalEn = getCountryInfo('China', 'capital_en');
console.log(capitalEn);

const countryFields = getCountryInfo('China', ['capital_en', 'code_2', 'tld']);
console.log(countryFields);
