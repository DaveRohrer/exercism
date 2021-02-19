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
export const answer = (question) => {
  const tokens = tokenize(question);
  try {
    return answerNumberWithNoOperators(tokens) ? answerNumberWithNoOperators(tokens) : answerValidMathExpressions(tokens);
  } catch (e) {
    throw new Error(e.message);
  }
};

function tokenize(question) {
  const tokens = question.split(' ');

  // Join adjacent multiplied tokens (or divided tokens) with by tokens into a single token
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "multiplied" || tokens[i] === "divided") {
      if (tokens[i + 1] === "by") {
        tokens.splice(i, 2, `${tokens[i]} by`);
      }
    }
  }
  return tokens;
}

function answerNumberWithNoOperators(tokens) {
  if (validQuestionStarter(tokens) && tokens[2].endsWith('?')) {
    return parseNumber(tokens[2]);
  }
}

function answerValidMathExpressions(tokens) {
  let tokenIndex = 2; // Skip the "What" and "is" tokens.
  let accumulator = 0;

  // Initial math expression
  accumulator = doMath(parseNumber(tokens[tokenIndex++]), parseOperator(tokens[tokenIndex++]), parseNumber(tokens[tokenIndex++]));

  // Subsequent math expressions
  while (tokenIndex < tokens.length) {
    const operator = parseOperator(tokens[tokenIndex++]);
    const secondNumber = parseNumber(tokens[tokenIndex++]);
    accumulator = doMath(accumulator, operator, secondNumber);
  }
  return accumulator;
};

function validQuestionStarter(tokens) {
  if (tokens[0] === 'What' && tokens[1] === 'is') {
    return true;
  } else if (tokens[0] === 'What' && tokens[1] === 'is?') {
    throw new Error('Syntax error');
  } else {
    throw new Error('Unknown operation');
  }
};

function parseNumber(token) {
  const parsedNumber = parseInt(token);
  if (!parsedNumber) {
    throw new Error('Syntax error');
  }
  return parsedNumber;
}

function parseOperator(token) {
  token = removeEndingQuestionmark(token);
  const validOp = OPERATORS.filter(x => x === token)[0];
  console.log(token);
  if (validOp) {
    return validOp;
  } else if (token.search(/[^\d]/) >= 0) {
    throw new Error('Unknown operation');
  }
  else {
    throw new Error('Syntax error');
  }
}

function removeEndingQuestionmark(token) {
  if (token.endsWith('?')) {
    token = token.slice(0, token.length - 1);
  }
  return token;
}

function doMath(firstNumber, operator, secondNumber) {
  switch (operator) {
    case "plus":
      return firstNumber + secondNumber;
    case "minus":
      return firstNumber - secondNumber;
    case "multiplied by":
      return firstNumber * secondNumber;
    case "divided by":
      return firstNumber / secondNumber;
    default:
      throw new Error('Misuse of doMath function');
  }
};