class SmartTrafficLight {
  constructor(st1, st2) {
    this.road1 = st1;
    this.road2 = st2;
  }

  turngreen() {
    if (this.road1[0] === this.road2[0]) return null;
    if (this.road1[0] > this.road2[0]) {
      this.road1[0] = 0;
      return this.road1[1];
    }
    if (this.road1[0] < this.road2[0]) {
      this.road2[0] = 0;
      return this.road2[1];
    }
  }
}
