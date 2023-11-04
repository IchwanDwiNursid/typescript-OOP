describe("instanceof", () => {
  class Employe {}
  class Manager {}

  it("should can't using typeOf", () => {
    const employe = new Employe();
    const manager = new Manager();

    console.log(typeof employe);
    console.log(typeof manager);
  });

  it("should using instanceof", () => {
    const employe = new Employe();
    const manager = new Manager();

    console.log(employe instanceof Employe);
    console.log(manager instanceof Manager);
  });
});
