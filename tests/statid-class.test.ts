describe("static class", () => {
  class Configuration {
    static NAME: string = "Daniel";
    static VERSION: number = 1.5;
    static AUTHOR: string = "Ichwan Dwi Nursid";
  }

  class MathUtil {
    static sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }

      return total;
    }
  }
  it("should create static class properties", () => {
    console.log(Configuration.NAME);
    console.log(Configuration.VERSION);
    console.log(Configuration.AUTHOR);
  });

  it("should create static method", () => {
    console.log(
      MathUtil.sum(
        1,
        2,
        3,
        4,
        5,
        6,
        425,
        54252,
        64322346356424,
        536263626325631425,
        32536537647865328,
        6476585385385875,
        4363764764743,
        4637647897598758,
        4363764764743,
        4637647897598758,
        4363764764743,
        4637647897598758
      )
    );
  });
});
