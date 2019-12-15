describe("cli", () => {
  it("Runs", () => {
    process.argv[2] = "--file=asdf";
    require("./cli");
  });
});
