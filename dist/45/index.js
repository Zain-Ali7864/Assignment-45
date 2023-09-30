function store_car_info(manufacturer, model, ...extras) {
    const carInfo = {
        manufacturer: manufacturer,
        model: model,
    };
    for (const extra of extras) {
        const key = Object.keys(extra)[0];
        carInfo[key] = extra[key];
    }
    return carInfo;
}
// Call the function with required information and additional name-value pairs
const car = ['Toyota', 'Camry', 'Blue', 'Navigation', 'Sunroof'];
// Print the car object to check the stored information
console.log(car);
export {};
