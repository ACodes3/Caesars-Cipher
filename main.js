function rot13(str) {
  // Split the string into an array of characters
  return str.split('').map(function(char) {
    // Check if the character is an uppercase letter
    if (/[A-Z]/.test(char)) {
      // Decode the letter using ROT13
      return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
    } else {
      // Return non-alphabetic characters unchanged
      return char;
    }
  }).join('');
}

// Test the function
console.log(rot13("SERR PBQR PNZC")); // Output: FREE CODE CAMP
