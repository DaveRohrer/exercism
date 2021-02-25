const getFileData = require("./FileReader");
const ContainerOfFood = require("./ContainerOfFood");
const Inventory = require("./Inventory");

const loadInventoryFromCSVFile = async (filepath) => {
  return new Promise((resolve, reject) => {
    //
    getFileData(filepath).then((inventoryCSVData) => {
      parseInventoryCSVData(inventoryCSVData.split("\r\n")).then(
        (inventory) => {
          resolve(new Inventory(inventory));
        }
      );
    });
  });
};

// TODO consider error checking format
const parseInventoryCSVData = async (data) => {
  return new Promise((resolve) => {
    resolve(
      data
        .map((line) => {
          return line.split(",");
        })
        .map((container) => {
          container[1] = parseFloat(container[1]);
          container[2] = new Date(container[2]);
          return new ContainerOfFood(...container);
        })
    );
  });
};

module.exports = loadInventoryFromCSVFile;
