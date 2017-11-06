class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = ["up","down"];
  }

  start() {
    setInterval(this.update, 2000);
   }
  stop() {
    clearInterval(start());
  }
  update() {
    this.log();
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }
  log() {
    console.log(`Direction: ${this.requests[0]} | Floor: ${this.floor}`);
   }
}

module.exports = Elevator;
