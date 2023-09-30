function describe_city(city, country = 'DefaultCountry') {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('Paris'); // This will use the default country
describe_city('New York', 'USA');
export {};
