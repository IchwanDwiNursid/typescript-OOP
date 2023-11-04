describe("inheritance", () => {
  class Employe {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employe {}

  class Director extends Manager {}

  it("should create inheritance", () => {
    const employee = new Employe("John");
    console.log(employee.name);

    const manager = new Manager("John");
    console.log(manager.name);

    const director = new Director("sunny");
    console.log(director.name);
  });
});
