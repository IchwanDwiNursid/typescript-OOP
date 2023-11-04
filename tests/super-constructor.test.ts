describe("super constructor", () => {
  class Person {
    name?: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Employe extends Person {
    department: string;
    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }
  }

  it("should create super constructor", () => {
    const person = new Person("John");
    console.log(person.name);

    const employe = new Employe("sandhika", "Engineering");
    console.log(employe.name);
    console.log(employe.department);
  });
});
