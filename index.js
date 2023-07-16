const countries = require('./countries.json');

function getCountryInfo(countryName, fields) {
  const countryInfo = countries.countries.find(country => {
    return (
      country.name_en.toLowerCase() === countryName.toLowerCase() ||
      country.name_es.toLowerCase() === countryName.toLowerCase()
    );
  });

  if (!countryInfo) {
    return null;
  }

  if (!fields) {
    return Object.values(countryInfo);
  }

  if (typeof fields === 'string') {
    return countryInfo[fields] || null;
  }

  const countryData = [];
  for (const field of fields) {
    if (countryInfo[field]) {
      countryData.push(countryInfo[field]);
    }
  }
  return countryData;
}

module.exports = {
  getCountryInfo
};
