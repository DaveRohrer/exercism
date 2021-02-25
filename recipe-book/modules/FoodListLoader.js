const getFileData = require("./FileReader");
const FoodItem = require("./FoodItem");
const FoodList = require("./FoodList");

const loadFoodListFromCSVFile = async (filepath) => {
  return new Promise((resolve) => {
    //
    getFileData(filepath).then((foodListCSVData) => {
      parseFoodListCSVData(foodListCSVData.split("\r\n")).then((foodList) => {
        resolve(new FoodList(foodList));
      });
    });
  });
};

// TODO consider error checking format here or above
const parseFoodListCSVData = (data) => {
  return new Promise((resolve) => {
    resolve(
      data
        .map((line) => {
          return line.split(",");
        })
        .map((item) => {
          if (item[6] != "Not Applicable") {
            item[6] = parseFloat(item[6]);
          }
          item[3] = parseFloat(item[3]);
          item[4] = parseFloat(item[4]);
          return new FoodItem(...item);
        })
    );
  });
};

module.exports = loadFoodListFromCSVFile;
