/*
 Write a function that checks if the input string is a palindrome. 
 Palindrome is a word that can be read forwards and backwards
*/

palindrome("tacocat"); //true
palindrome("amanaplanacanalpanama"); //true
palindrome("asdfsafeaw"); //false
palindrome("10");
palindrome("-121");

function palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
}
