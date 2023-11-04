describe("super method", () => {
  class Employe {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string) {
      console.log(`Hello ${name} my name is ${this.name}`);
    }
  }

  class Manager extends Employe {
    sayHello(name: string) {
      super.sayHello(name);
      console.log(`And I Your Manager`);
    }
  }

  it("should create super method", () => {
    const manager = new Manager("giant");
    manager.sayHello("Indra");
  });
});
