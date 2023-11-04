describe("polymorphism", () => {
  class Employe {
    constructor(public name: string) {}
  }

  class Manager extends Employe {}

  class HeadDepeartment extends Manager {}

  const sayHello = (employe: Employe): void => {
    if (employe instanceof HeadDepeartment) {
      const hd = employe as HeadDepeartment;
      console.log(`Hello I am HeadDepartment ${hd.name}`);
    } else if (employe instanceof Manager) {
      const m = employe as Manager;
      console.log(`Hello I am Manager ${m.name}`);
    } else {
      const e = employe as Employe;
      console.log(`Hello I am Employee ${e.name}`);
    }
  };

  it("should create polymorphism", () => {
    let employe = new Employe("joni");
    console.log(employe);

    employe = new Manager("wiliam");
    console.log(employe);

    employe = new HeadDepeartment("doni");
    console.log(employe);
  });

  it("should create method polymorphism", () => {
    sayHello(new Employe("john"));
    sayHello(new Manager("tutung"));
    sayHello(new HeadDepeartment("tatang"));
  });
});
