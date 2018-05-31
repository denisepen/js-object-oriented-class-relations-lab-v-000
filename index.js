let store = {drivers: [], trips: [], passengers: []}
let driverId = 0
let passengerId = 0
let tripId = 0

class Trip{
  constructor(driver, passenger){
    this.id = ++tripId
   this.passenger = passenger
    this.passengerId = passenger.id
    //  this.driver = driver
    this.driverId = driver.id
    this.tripId = this.id
    // this.passenger = function() {
    //    return store.passengers.find(function(passenger){
    //      return  passenger.tripId === this.id
    //    })
    //  }

    //  }

    store.trips.push(this)
  }
  this.driver = function(driver){
    this.driverId = driver.id
  }

  // this.driver = function() {
  //    return store.drivers.find(function(driver){
  //      return this.id === driver.trip.id
  //    })
  //  }


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
          return trip.driver.id === this.id
        })
      }
}


class Passenger{
  constructor(name){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }
  // this.trips = function(){
  //   return store.trips.filter(function(trip){
  //     return this.id === trip.passengerId
  //   })
  // }
}



//
