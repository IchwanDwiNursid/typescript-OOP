describe("visibility", () => {
  class Sum {
    protected counter: number = 0;

    increment() {
      this.counter++;
    }

    resultCounter() {
      return this.counter;
    }
  }

  class Sum2 extends Sum {
    checkNumber() {
      this.counter += 2;
    }

    resultCounter() {
      return this.counter;
    }
  }

  it("should create privat visibility", () => {
    const sum = new Sum();
    sum.increment();
    sum.increment();
    sum.increment();
    sum.increment();
    sum.increment();
    sum.increment();
    sum.increment();
    sum.increment();
    sum.increment();
    console.log(sum.resultCounter());
  });

  it("should create protected visibility", () => {
    const sum2 = new Sum2();

    sum2.checkNumber();
    sum2.checkNumber();
    sum2.checkNumber();
    sum2.checkNumber();
    sum2.checkNumber();
    sum2.checkNumber();
    console.log(sum2.resultCounter());
  });
});
