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
  update(x) {
    this.log(`Estas en la planta: ${this.floor}`);
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    if(this.floor >= 0 || this.floor < 6){
      this.floor++;
      this.log(this.requests[0],this.floor);
    }
   }
  floorDown() {
    if(this.floor >= 0 || this.floor < 6){
      this.floor--;
      this.log(this.requests[1],this.floor);
    }
  }
  call() { }
  log(dir,flo) {
    console.log(`Direction: ${dir} | Floor: ${flo}`);
   }
}

module.exports = Elevator;
