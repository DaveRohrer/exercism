const { readFile } = require("fs");

const getFileData = async (filename) => {
  return new Promise((resolve, reject) => {
    readFile(filename, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

module.exports = getFileData;
