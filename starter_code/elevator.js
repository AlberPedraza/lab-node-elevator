class Elevator {
  constructor(){
    this.floor = 0;
    this.list_floor = [0];
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
    return this.list_floor;
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    if(this.floor >= 0 || this.floor < 6){
      this.floor++;
      this.requests.push("up");
      this.log("up",this.floor);
    }
   }
  floorDown() {
    if(this.floor >= 0 || this.floor < 6){
      this.floor--;
      this.requests.push("down");
      this.log("down",this.floor);
    }
  }
  call(obj) {
    this.list_floor.push(obj);
    this.log(`planta origen: ${obj.originFloor}`);
    this.log(`plata destino: ${obj.destinationFloor}`);
  }
  log(dir,flo) {
    console.log(`Direction: ${dir} | Floor: ${flo}`);
   }
}

module.exports = Elevator;
