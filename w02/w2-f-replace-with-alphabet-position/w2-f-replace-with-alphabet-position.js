// Description:

// Welcome. In this warmup you are required to, given a
// string, replace every letter with its position
// in the alphabet. If anything in the text isn't a letter,
// ignore it and don't return it. a being 1, b being 2,
// etc. As an example:

// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20
// 23 5 12 22 5 15 3 12 15 3 11" (As a string.)

function alphabetPosition(text) {
  var upperText = text.toUpperCase();
  var codedString = '';

  for (var i = 0; i < upperText.length; i++) {
    if ((upperText.charCodeAt(i) > 64) && upperText.charCodeAt(i) < 91) {
      codedString += (upperText.charCodeAt(i)-64 + " ");
    }
  }

  return codedString.trim();
}


module.exports = {
  attendance: "WORD UP",
  alphabetPosition:alphabetPosition
}
