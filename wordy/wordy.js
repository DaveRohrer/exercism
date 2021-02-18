//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const OPERATORS = [
  "plus",
  "minus",
  "multiplied by",
  "divided by",
]

const ERROR_CODES = [
  "No Error",
  "Syntax error",
  "Unkown Operation",
]

export const answer = (question) => {

  const tokens = question.split(' ');
  let returnValue = 0;

  try {
    return answerNumberWithNoOperators(tokens) ? answerNumberWithNoOperators(tokens) : answerValidMathExpressions(tokens);
  } catch (e) {
    throw new Error(e.message);
  }
};

function answerNumberWithNoOperators(tokens) {
  if (isJustANumberQuestion(tokens)) {
    return parseNumber(tokens, 2);
  }
}

function validQuestionStarter(tokens) {
  if (tokens[0] === 'What' && tokens[1] === 'is') {
    return true;
  } else if (tokens[0] === 'What' && tokens[1] === 'is?') {
    throw new Error('Syntax error');
  } else {
    throw new Error('Unknown operation');
  }
};

function isJustANumberQuestion(tokens) {
  return validQuestionStarter(tokens) && tokens[2].endsWith('?')
};

function parseNumber(tokens, tokenIndex) {
  const parsedNumber = parseInt(tokens[tokenIndex]);
  if (!parsedNumber) {
    throw new Error('Syntax error');
  }
  return parsedNumber;
}

function answerValidMathExpressions(tokens) {
  let tokenIndex = 3;

  while (tokenIndex <= tokens.length) {
    parseNumber(tokens, tokenIndex);
    tokenIndex++;
  }


};