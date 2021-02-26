class CommandBuilder {
  #previousCompleteCommands;
  #currentCommand;
  #currentInput;
  constructor() {
    this.#previousCompleteCommands = [];
    this.#currentCommand = "";
    this.#currentInput = "";
  }
  get currentInput() {
    return this.#currentInput;
  }
  get currentCommand() {
    return this.#currentCommand;
  }
  get fullUserRequestedCommand() {
    if (this.currentCommandIsEmpty()) {
      return this.#currentInput;
    } else {
      return this.#currentCommand + "," + this.#currentInput;
    }
  }
  set currentInput(inputString) {
    this.#currentInput = inputString;
  }
  stepBackCurrentCommand() {
    if (this.#currentCommand.length > 0) {
      this.#currentCommand = this.#currentCommand.substring(
        0,
        this.#currentCommand.lastIndexOf(",")
      );
    }
  }
  addCurrentInputToCurrentCommand() {
    if (this.currentCommandIsEmpty()) {
      this.#currentCommand += this.#currentInput;
    } else {
      this.#currentCommand += "," + this.#currentInput;
    }
    this.resetCurrentInput();
  }
  onCompleteCommand() {
    this.addCurrentCommandToPreviousCompleteCommands();
    this.resetCurrentCommand();
    this.resetCurrentInput();
  }
  resetCurrentInput() {
    this.#currentInput = "";
  }
  resetCurrentCommand() {
    this.#currentCommand = "";
  }
  addCurrentCommandToPreviousCompleteCommands() {
    this.#previousCompleteCommands.push(this.#currentCommand);
  }
  currentCommandIsEmpty() {
    return this.#currentCommand === "";
  }
}
module.exports = CommandBuilder;
