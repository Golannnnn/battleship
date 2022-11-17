const ship = (length) => ({
  length,
  hits: 0,
  sunk: false,
  hit() {
    this.hits += 1;
  },
  isSunk() {
    this.sunk = this.length <= this.hits;
  },
});

export default ship;
