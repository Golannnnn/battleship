import ship from "../ship";

describe("ship methods", () => {
  let submarine;

  beforeEach(() => {
    submarine = ship(2);
  });

  it("changes hits when hit() is called", () => {
    expect(submarine.hits).toBe(0);
    submarine.hit();
    expect(submarine.hits).toBe(1);
  });

  it("calculates if ship has sunk", () => {
    submarine.isSunk();
    expect(submarine.sunk).toBe(false);
    submarine.hit();
    submarine.hit();
    submarine.isSunk();
    expect(submarine.sunk).toBe(true);
  });
});
