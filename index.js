const packageJson = require('./package.json');
const countries = require('./countries.json');

// Create a map (Map) to index the country information
const countryMap = new Map();
countries.countries.forEach(country => {
  countryMap.set(country.code_2, country);
  countryMap.set(country.code_3, country);
});

function getCountryInfo(countryIdentifier, fields, continent) {
  let countryInfo;

  if (typeof countryIdentifier !== 'string') {
    throw new Error('Country identifier must be a string.');
  }

  // Search by country code
  if (countryIdentifier.length === 2 || countryIdentifier.length === 3) {
    const key = countryIdentifier.toUpperCase();
    countryInfo = countryMap.get(key);
  }

  // Search by country name
  if (!countryInfo) {
    countryInfo = countries.countries.find(country => {
      return (
        country.name_en.toLowerCase() === countryIdentifier.toLowerCase() ||
        country.name_es.toLowerCase() === countryIdentifier.toLowerCase()
      );
    });
  }

  // Search by continent
  if (continent && countryInfo && 
    (countryInfo.continent_en.toLowerCase() !== continent.toLowerCase() &&
    countryInfo.continent_es.toLowerCase() !== continent.toLowerCase())) {
    countryInfo = null;
  }

  if (!countryInfo) {
    throw new Error('Country not found.');
  }

  if (!fields) {
    // If no specific fields are provided, return all available data
    return Object.values(countryInfo);
  }

  if (typeof fields === 'string') {
    // If a single field is requested, return that specific field value
    return countryInfo[fields] || null;
  }

  if (!Array.isArray(fields)) {
    throw new Error('Fields must be a string or an array of strings.');
  }

  const countryData = [];
  for (const field of fields) {
    if (typeof field !== 'string') {
      throw new Error('Field names must be strings.');
    }

    if (countryInfo[field]) {
      countryData.push(countryInfo[field]);
    }
  }
  return countryData;
}

function getContinent(continentName, fields) {
  if (typeof continentName !== 'string') {
    throw new Error('Continent name must be a string.');
  }

  const normalizedContinent = continentName.toLowerCase();
  const countriesInContinent = countries.countries.filter(country => {
    return (
      country.continent_en.toLowerCase() === normalizedContinent ||
      country.continent_es.toLowerCase() === normalizedContinent
    );
  });

  if (countriesInContinent.length === 0) {
    throw new Error('Continent not found.');
  }

  if (!fields) {
    // If no specific fields are provided, return all available data
    return countriesInContinent.map(country => Object.values(country));
  }

  if (!Array.isArray(fields)) {
    throw new Error('Fields must be an array.');
  }

  const continentData = countriesInContinent.map(country => {
    const data = {};
    fields.forEach(field => {
      if (country[field]) {
        data[field] = country[field];
      }
    });
    return Object.values(data);
  });

  return continentData;
}

function getAllCountries(fields) {
  const countryData = countries.countries.map(country => {
    const data = {};
    fields.forEach(field => {
      if (country[field]) {
        data[field] = country[field];
      }
    });
    return data;
  });

  return countryData;
}

function getCountryByCode(countryCode, fields) {
  const key = countryCode.toUpperCase();
  const countryInfo = countryMap.get(key);

  if (!countryInfo) {
    throw new Error('Country not found.');
  }

  if (!fields) {
    // If no specific fields are provided, return all available data
    return Object.values(countryInfo);
  }

  if (typeof fields === 'string') {
    // If a single field is requested, return that specific field value
    return countryInfo[fields] || null;
  }

  if (!Array.isArray(fields)) {
    throw new Error('Fields must be a string or an array of strings.');
  }

  const countryData = [];
  for (const field of fields) {
    if (typeof field !== 'string') {
      throw new Error('Field names must be strings.');
    }

    if (countryInfo[field]) {
      countryData.push(countryInfo[field]);
    }
  }
  return countryData;
}

function getCountryByTLD(topLevelDomain, fields) {
  const countryInfo = countries.countries.find(country => country.tld === topLevelDomain);

  if (!countryInfo) {
    throw new Error('Country not found.');
  }

  if (!fields) {
    // If no specific fields are provided, return all available data
    return Object.values(countryInfo);
  }

  if (typeof fields === 'string') {
    // If a single field is requested, return that specific field value
    return countryInfo[fields] || null;
  }

  if (!Array.isArray(fields)) {
    throw new Error('Fields must be a string or an array of strings.');
  }

  const countryData = [];
  for (const field of fields) {
    if (typeof field !== 'string') {
      throw new Error('Field names must be strings.');
    }

    if (countryInfo[field]) {
      countryData.push(countryInfo[field]);
    }
  }
  return countryData;
}

function searchCountries(keyword, fields) {
  const matchingCountries = countries.countries.filter(country => {
    const lowercaseKeyword = keyword.toLowerCase();
    return (
      country.name_en.toLowerCase().includes(lowercaseKeyword) ||
      country.name_es.toLowerCase().includes(lowercaseKeyword) ||
      country.capital_en.toLowerCase().includes(lowercaseKeyword) ||
      country.capital_es.toLowerCase().includes(lowercaseKeyword) ||
      country.code_2.toLowerCase().includes(lowercaseKeyword) ||
      country.code_3.toLowerCase().includes(lowercaseKeyword)
    );
  });

  const countryData = matchingCountries.map(country => {
    const data = {};
    fields.forEach(field => {
      if (country[field]) {
        data[field] = country[field];
      }
    });
    return data;
  });

  return countryData;
}

(async () => {
  const { default: updateNotifier } = await import('update-notifier');

  // Configure the notification options
  const notifier = updateNotifier({
    pkg: packageJson,
    updateCheckInterval: 1000 * 60 * 60 * 24, // Check for updates once a day
    shouldNotifyInNpmScript: true, // Show notification even during npm script execution
    message: 'There is a new version available! Run "npm i countrys-info@latest" to update.', // Customized notification message
    boxenOptions: { padding: 1, margin: 1, align: 'center', borderColor: 'yellow', borderStyle: 'round' } // Options for the notification box style
  });

  notifier.notify();
})();

module.exports = {
  getCountryInfo,
  getContinent,
  getAllCountries,
  getCountryByCode,
  getCountryByTLD,
  searchCountries
};
