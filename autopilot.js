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

// def get_destination(car)
//   if car[:city] == 'Toronto'
//     'Mississauga'
//   elsif car[:city] == 'Mississauga'
//     'London'
//   elsif car[:city] == 'London'
//     'Toronto'
//   end
// end
function getDestination() {
  fleetOfCars.forEach(function(car) {
    if (car.city === "Toronto") {
      car.city = "Mississauga";
  } else if (car.city === "Mississauga") {
      car.city = "London";
  } else {
      car.city = "Toronto";
  }
})
}

getDestination();

// def fill_up_gas(car)
//   old_gas = car[:gas]
//   car[:gas] = 100
//   "Filled up to #{ get_gas_display(car[:gas]) } on gas from #{ get_gas_display(old_gas) }."
// end
function fillUpGas() {
  fleetOfCars.forEach(function(car) {
    oldGas = car.gas;
    car.gas = 100;
    console.log(`Filled up to ${car.gas} on gas from ${oldGas}`);
  })
}
fillUpGas();
