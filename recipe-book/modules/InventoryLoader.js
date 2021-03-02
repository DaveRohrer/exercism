const getFileData = require("./FileReader");
const ContainerOfFood = require("./ContainerOfFood");
const Inventory = require("./Inventory");

const loadInventoryFromCSVFile = async (filepath) => {
  const fileData = await getFileData(filepath);
  const parsedData = await parseInventoryCSVData(fileData.split("\r\n"));
  return new Promise((resolve) => {
    resolve(new Inventory(parsedData));
  });
};

// TODO consider error checking format
const parseInventoryCSVData = (data) => {
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
