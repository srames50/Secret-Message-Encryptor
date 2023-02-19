// this program shifts the meanings of the given message by the users' given amount.
// this function takes a string as input and returns a encrypted string.
// inputs of can be uppercase or lowercase but the returned string will be all uppercase
// the process of this function splits the given string into an array of characters, translates that array of characters to specefic numbers correlated with the alphabet, then performes the given shift. From there we simply translate back the numbers to their correlated characters and return the translated message. 

function secretMessageCreator(str, num) {
  // creating final string to return
  let finalStr = "";
  // making sure all letters are uppercase
  let str1 = str.toUpperCase(); 
  // splitting the string into an array of characters
  let strArr = str1.split(''); 
  // console.log(strArr); // test line
  // creating a string of the alphabet to refrence in shifting
  let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
  // this nested for loop iterates through the array and replaces the letters with their corresponding number and then adds 13 for the cipher 
  // the - 26 is included so that the numbers dont exceed the index of the alphabet
  for(let i = 0; i < strArr.length; i++){
    for(let j = 0; j < letter.length; j++){
      if(strArr[i] == letter[j]){
        strArr[i] = j + num;
        if(strArr[i] > 25){
          strArr[i] -= 26;
        }
      }
    }
  }
  // console.log(strArr); // for testing purposes
  // transforming array back to letters of new corresponding characters and rejoining array to string 
  for(let i = 0; i < strArr.length; i++){
    if(strArr[i] > 0){
      strArr[i] = letter[strArr[i]];
      
    } else if(strArr[i] === 0){
      strArr[i] = letter[strArr[i]];
    }
    finalStr += strArr[i];
  }

//  console.log(strArr); // test line

  return finalStr;
}

console.log(secretMessageCreator("Hi my name is shyam this is a test", 5));
console.log(secretMessageCreator("MN RD SFRJ NX XMDFR YMNX NX F YJXY", 21));