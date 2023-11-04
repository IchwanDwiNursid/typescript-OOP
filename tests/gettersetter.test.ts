describe("gettersetter", () => {
  class Category {
    _name?: string;

    get name() {
      if (this._name) {
        return this._name;
      } else {
        return "Empty";
      }
    }

    set name(value: string) {
      if (value !== "") {
        this._name = value;
      }
    }
  }

  it("should create gettersetter", () => {
    const category = new Category();

    console.log(category.name);
  });
});
