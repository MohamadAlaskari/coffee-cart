import { togglePromo } from "./togglePromo";

describe("togglePromo", () => {
  it("should show promo if count is positive and divisible by 3", () => {
    expect(togglePromo(3)).toBe(true); // R1
  });

  it("should not show promo if count is 0", () => {
    expect(togglePromo(0)).toBe(false); // R2
  });

  it("should not show promo if count is negative", () => {
    expect(togglePromo(-3)).toBe(false); // R3
  });

  it("should not show promo if count is not divisible by 3", () => {
    expect(togglePromo(4)).toBe(false); // R4
  });
});
