// def get_new_car
//   {
//     city: 'Toronto',
//     passengers: 0,
//     gas: 100,
//   }
// end

var getNewCar = {
  city: "Toronto",
  passengers: 0,
  gas: 100,
}

// def add_car(cars, new_car)
//   cars << new_car
//   "Adding new car to fleet. Fleet size is now #{cars.length}."
// end
var fleetOfCars = []

function addCar() {
  fleetOfCars.push(getNewCar);
  console.log(`Adding new car to fleet. Fleet size is now ${fleetOfCars.length}`);
}
