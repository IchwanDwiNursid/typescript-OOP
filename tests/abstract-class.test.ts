describe("abstract class", () => {
  abstract class Customer {
    readonly id: string;
    abstract name: string;

    constructor(id: string) {
      this.id = id;
    }

    abstract sayHello(name: string): void;
  }

  class RegulerCustomer extends Customer {
    name: string;

    constructor(id: string, name: string) {
      super(id);
      this.name = name;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name} my name is customer ${this.name}`);
    }
  }

  it("should create abstract class", () => {
    const customer = new RegulerCustomer("20", "Tika");
    customer.sayHello("Jani");
  });
});
