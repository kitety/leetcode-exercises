import fun from "../code/17.电话号码的字母组合";

test("17", () => {
  expect(fun("23")).toStrictEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf",
  ]);
});
