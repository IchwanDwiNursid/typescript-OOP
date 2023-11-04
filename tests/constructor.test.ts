describe("constructor", () => {
  class Customer {
    constructor() {
      console.log("Hello World!");
    }
  }
  class Order {}

  it("should create constructor", () => {
    new Customer();
    new Customer();
  });
});
