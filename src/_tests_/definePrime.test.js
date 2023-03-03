const getMonth = require("../getMonth.js");

describe("tests for getMonth function", () => {
  const janNum = 1;
  const novNum = 11;
  it("should operate correctly with valid data", () => {
    expect(getMonth(janNum)).toBe(`Январь`);
    expect(getMonth(novNum)).toBe(`Ноябрь`);
  });
  it("should operate correctly with invalid data", () => {
    expect(getMonth(15)).toBe("Некорректный ввод!");
    expect(getMonth("Ноябрь")).toBe("Некорректный ввод!");
  });
});
