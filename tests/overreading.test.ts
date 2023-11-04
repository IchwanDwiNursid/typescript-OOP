describe("overloading", () => {
  class Employe {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name} my name is ${this.name}`);
    }
  }

  class Manager extends Employe {
    sayHello(name: string): void {
      console.log(`Hello ${name} my name is ${this.name} , Iam Your manager`);
    }
  }

  it("should create overloading", () => {
    const employee = new Employe("Johan");
    employee.sayHello("willem");

    const manager = new Manager("Johan");
    manager.sayHello("sony");
  });
});
