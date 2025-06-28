var cars = require("../models/carData") 
var colors=require("../models/carColors")

const getCars = (request, response) => {
    response.json({
        car: cars
    });
  
};

const putCars = (request, response) => {
    response.json({
        car: cars
    });
  
};

// car colors

const postCars = (request, response) => {
    response.json({
        car: cars
    });
  
};

const deleteCars = (request, response) => {
    response.json({
        car: cars
    });
  
};

const carcolors = (request, response) => {
    response.json({
        car: colors
    });
  
};




module.exports = {
    getCars,
    putCars,postCars,deleteCars,carcolors
};