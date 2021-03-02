const FoodSystemManager = require("./FoodSystemManager");
const Inventory = require("./Inventory");
const FoodList = require("./FoodList");

describe("FoodSystemManager", () => {
  it("does not allow user to eat more than exists", () => {
    const mockFn = jest.fn();
    // Arrange
    const fsm = new FoodSystemManager(
      {
        getFoodNameFromAbbreviation() {
          return "peanutbutter";
        },
      },
      {
        inventory: [{ type: "peanutbutter", location: "Freezer" }],
        hasContainerAt() {
          return true;
        },
        updateContainerVolume: mockFn,
      }
    );
    // Act
    fsm.processCompleteUpdateContainerRequest("u,f,pb,0.5");

    // Assert
    expect(mockFn.mock.calls.length).toBe(0);
  });
});
