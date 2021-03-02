const { readFile } = require("fs");

const getFileData = (filename) => {
  return new Promise((resolve) => {
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
