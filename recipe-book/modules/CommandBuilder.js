class CommandBuilder {
  #previousCommands;
  #partialCommand;
  constructor() {
    this.#previousCommands = [];
    this.#partialCommand = "";
  }
  get partialCommand() {
    return this.#partialCommand;
  }
  stepBackPartialCommand() {
    if (this.#partialCommand.length > 0) {
      this.#partialCommand = this.#partialCommand.substring(
        0,
        this.#partialCommand.lastIndexOf(",")
      );
    }
  }
}

module.exports = CommandBuilder;
