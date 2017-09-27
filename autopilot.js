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
addCar();

// def pick_up_passenger(car)
//   car[:passengers] += 1
//   car[:gas] -= 10
//   "Picked up passenger. Car now has #{car[:passengers]} passengers."
// end

function pickUpPassenger() {
  fleetOfCars.forEach(function(car) {
    car.passengers++;
    car.gas -= 10;
    if (car.passengers > 1) {
    console.log(`Picked up passenger. Car now has ${car.passengers} passengers`);
  } else {
    console.log(`Picked up passenger. Car now has ${car.passengers} passenger`);
  }
  })
}
pickUpPassenger();
