describe("Relation", () => {
  class Employe {
    constructor(public name: string) {}
  }

  class Person {
    constructor(public name: string) {}
  }

  it("should create relation", () => {
    const poeple: Employe = new Person("John");
  });
});
