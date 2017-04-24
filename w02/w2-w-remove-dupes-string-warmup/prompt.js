// Write a function named removeDupes which takes a string and removes
// all duplicate characters in the String. Here are some examples:
//   removeDupes('AABB'); // 'AB'
//   removeDupes('AaAaBbBb'); // 'AaBb'
//   removeDupes('cAtCaT'); // 'cAtCaT'

// Write a function named removeDupesCI which takes a string and removes
// all duplicate characters regardless of capitalization. Here are some examples:
//   removeDupesCI('AABB'); // 'AB'
//   removeDupesCI('AaAaBbBb'); // 'AB'
//   removeDupesCI('cAtCaT'); // 'cAt'


function removeDupes(input){
	var uniqueString = '';

	for (var i = 0; i < input.length; i++) {
		var currChar = input[i];
		if (uniqueString.indexOf(currChar) === -1) {
			uniqueString += currChar;
		}
	}

	return uniqueString;
}

//CI for case insensitive
function removeDupesCI(input){
	var uniqueString = '';

	for (var i = 0; i < input.length; i++) {
		var currChar = input[i];
		if (uniqueString.toUpperCase().indexOf(currChar.toUpperCase()) === -1) {
			uniqueString += currChar;
		}
	}

	return uniqueString;
}


module.exports = {removeDupes:removeDupes,
									removeDupesCI:removeDupesCI,
									attendance :"ENTER ATTENDANCE HERE"
								 };
