let store = {drivers: [], trips: [], passengers: []}
let driverId = 0
let passengerId = 0
let tripId = 0

class Trip{
  constructor(driver, passenger){
    this.id = tripId++
    this.passenger = passenger
    // this.driverId = driver.id
    //  this.passengerId = passenger.id
    if(driver){
     this.driverId = driver.id
      driver.tripId = this.id
    }

    if(passenger){
      this.passengerId = passenger.id
      passenger.tripId = this.id
    }

    store.trips.push(this)
  }

  // driver(){
  //   return this.driver
  // }
  driver(){
    return store.drivers.find(driver => {
      return driver.id = this.driverId
    })
  }

passenger(){
  return store.passengers.find(passenger => {
    return passenger.id = this.passengerId
  })
}
  // passenger(){
  //   return this.passenger
  // }

}


 class Driver{

  constructor(name){

    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
        }
        // if(trip){
        //   this.tripId = trip.id}

      trips(){
        return store.trips.filter(function(trip){
          return trip.driverId === this.id
        })
      }
}


class Passenger{
  constructor(name){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }

}

// this.trips = function(){
//   return store.trips.filter(function(trip){
//     return this.id === trip.passengerId
//   })
// }


//
