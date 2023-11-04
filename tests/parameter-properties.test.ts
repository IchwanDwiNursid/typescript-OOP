describe("parameter properties", () => {
  class Person {
    constructor(public name: string) {}

    sayHello(name: string) {
      console.log(`Hello ${name} my name is ${this.name}`);
    }
  }

  it("should create parameter properties", () => {
    const person = new Person("samuel");
    person.sayHello("Ferdy");
  });
});
