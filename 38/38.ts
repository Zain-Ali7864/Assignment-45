function describe_city(city: string, country: string = 'DefaultCountry'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('Pakistan'); // This will use the default country
describe_city('New York', 'USA');
