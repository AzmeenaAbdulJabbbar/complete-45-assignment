//Question no.45 : Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two 
//other name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information 
//was stored correctly.
// Define the function to store car information
var cars1 = function (ModelName, manufacturer) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Create an object to store the car information
    var carInfo = {
        ModelName: ModelName,
        manufacturer: manufacturer,
    };
    // Add the additional key-value pairs to the carInfo object
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        carInfo[key] = value;
    });
    return carInfo;
};
// Call the function with required information and additional key-value pairs
var caar = cars1("Toyota", "parado", ["color", " Blue"], ["sunroof", true], ["year", 2019]);
// Print the object to ensure all information is stored correctly
console.log(caar);
