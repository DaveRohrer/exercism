const baseRequestRegExps = [
  /^$/,
  /^[p]$/,
  /^[p],[fdc]$/,
  /^[p],[fdc],[fdr]$/,
  /^[d]$/,
  /^[d],[fdrc]$/,
  /^[u]$/,
  /^[u],[fdrc]$/,
];

//these require logic
//  /^[p],[fdc],[fdr],\w+$/,
//  /^[p],[fdc],[fdr],\w+,\d+$/,
//  /^[d],[fdrc],\w+$/,
//  /^[d],[fdrc],\w+,\d+$/,
//  /^[u],[fdrc],\w+$/,
//  /^[u],[fdrc],\w+,((.\d+)|(\d+.\d+))$/,

/*
menu regexs
/^$/
/^[p]$/
/^[p],[fdc]$/
/^[p],[fdc],[fdr]$/
/^[p],[fdc],[fdr],\w+$/
/^[d]$/
/^[d],[fdrc]$/
/^[d],[fdrc],\w+$/
/^[u]$/
/^[u],[fdrc]$/
/^[u],[fdrc],\w+$/
*/
module.exports = baseRequestRegExps;
