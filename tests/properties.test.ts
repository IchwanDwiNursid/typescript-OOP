describe("properties", () => {
  class Customer {
    readonly id: number;
    name: string = "";
    age?: number;
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name} my name is ${this.name}`);
    }
  }

  class Car {
    readonly id: number;
    type: string = "XVBKK";
    launch?: number;
    constructor(id: number) {
      this.id = id;
    }
  }

  it("should create properties", () => {
    const customer = new Customer(1, "John");
    customer.age = 20;

    const person = new Customer(2, "Joko");
    person.age = 40;

    console.log(customer);
    console.log(person);

    console.log(customer.name);
    console.log(person.name);

    expect(customer.id).toBe(1);
    expect(customer.name).toBe("John");
  });

  it("should create default value properties", () => {
    const car = new Car(3);
    car.type = "avanza";
    console.log(car);
  });

  it("should can create method properties", () => {
    const customer = new Customer(34, "Arthur");
    customer.sayHello("flex");
  });
});
