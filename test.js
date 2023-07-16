const { getCountryInfo, getContinent } = require('./index');


// Ejemplo de uso de getCountryInfo
try {
    const countryName = 'Spain';
    const fields = ['capital_en', 'code_2', 'tld'];
  
    const countryInfo = getCountryInfo(countryName, fields);
    console.log(countryInfo);
  } catch (error) {
    console.error(error.message);
  }
  
  // Ejemplo de uso de getContinent
  try {
    const continentName = 'Europe';
    const fields = ['name_en', 'code_2', 'capital_en'];
  
    const continentInfo = getContinent(continentName, fields);
    console.log(continentInfo);
  } catch (error) {
    console.error(error.message);
  }