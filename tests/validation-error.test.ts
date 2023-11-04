describe("validation error", () => {
  class ValidationError extends Error {
    constructor(public message: string) {
      super(message);
    }
  }

  function validation(number: number): number {
    if (number < 10) {
      throw new ValidationError("value must be greater than 10");
    }
    return number * 2;
  }
  it("should create validation error", () => {
    try {
      const result = validation(5);
      console.log(result);
    } catch (e) {
      if (e instanceof ValidationError) {
        console.log(e.message);
      }
    }
  });
});
