class Person extends Elevator{
  constructor(name, originFloor, destinationFloor,requests){
  super(requests);
  
    this.name = name;
    this.originFloor = originFloor;
    this.destinationFloor = destinationFloor;
  }
}

module.exports = Person;
