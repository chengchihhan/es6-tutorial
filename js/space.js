export default class Space {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  get volume() {
    return this.x * this.y * this.z;
  }
};