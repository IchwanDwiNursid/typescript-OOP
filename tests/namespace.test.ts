import { MathUtill } from "../src/MathUtill";

describe("namespace", () => {
  it(`should create namespace`, () => {
    expect(MathUtill.PI).toBe(3.14);
    expect(MathUtill.sum(1, 2, 3, 4, 5)).toBe(15);
  });
});
