//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//666

export const hey = (message) => {

  // Default response is 'Whatever.'
  let response = 'Whatever.'

  if (isQuestion(message)) {
    if (isYelling(message)) {
      response = "Calm down, I know what I'm doing!";
    }
    else {
      response = "Sure.";
    }
  }
  else if (isYelling(message)) {
    response = 'Whoa, chill out!';
  }
  else if (isWhiteSpaceOnly(message)) {
    response = 'Fine. Be that way!';
  }

  return response;
};

const isQuestion = (message) => {
  // If there is a question mark, make sure it is either the last character in the string or only followed
  // by whitespace and return the result
  return message.includes('?') ? isWhiteSpaceOnly(message.substr(message.lastIndexOf('?') + 1)) : false;
}

const isYelling = (message) => {
  // If the message contains some letters at all check to see if any are lower case and return the result
  return (new RegExp(/[A-Z]/i).test(message)) ? !(new RegExp(/[a-z]/).test(message)) : false;
}

const isWhiteSpaceOnly = (message) => {
  return !(new RegExp(/[^\s]/).test(message));
}
