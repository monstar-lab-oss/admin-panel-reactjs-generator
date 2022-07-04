function camelCaseConvertor(word) {
  const splittedWord = word.split("-");
  let result = splittedWord[0];
  for (let counter = 1; counter < splittedWord.length; counter++) {
    const capitalize = capitalizeFirstLetter(splittedWord[counter]);
    result += capitalize;
  }

  return result;
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

module.exports = { camelCaseConvertor, capitalizeFirstLetter };
