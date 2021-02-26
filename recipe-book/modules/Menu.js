const rootMenu = require("../menu/root");
const pullBranch = require("../menu/pullBranch");
const depositBranch = require("../menu/depositBranch");
const updateBranch = require("../menu/updateBranch");
class Menu {
  #menu;
  #currentMenu;
  constructor() {
    this.#menu = [rootMenu];
    this.#connectBranches();
    this.#currentMenu = 0;
  }

  #connectBranches() {
    this.#menu.push(...pullBranch);
    this.#menu.push(...depositBranch);
    this.#menu.push(...updateBranch);
  }
  show() {
    console.log(this.#menu[this.#currentMenu].displayString);
    // console.log(rootMenu.displayString);
  }
  setMenuScreen(inputString) {
    this.#currentMenu = this.#menu.findIndex((element) => {
      // console.log(element.regexp);
      return element.regexp.test(inputString);
    });
  }
  validNavigationString(inputString) {
    return this.#menu.some((element) => {
      return element.regexp.test(inputString);
    });
  }
}
module.exports = Menu;
