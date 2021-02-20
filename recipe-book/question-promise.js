const questionPromise = (rl, question) => new Promise((resolve) => {
  rl.question(question, (response) => {
    resolve(response);
  })
});

module.exports = questionPromise;