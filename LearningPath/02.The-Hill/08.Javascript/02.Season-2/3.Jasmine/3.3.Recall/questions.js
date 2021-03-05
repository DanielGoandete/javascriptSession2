
let selectElementsStartingWithA = (array) => {
    const result = array.filter((fruit) => fruit.startsWith("a"));
    return result;
}

let selectElementsStartingWithVowel = (array) => {
    const result = array.filter(str => /^[aeiou]/i.test(str));
    return result;
}

let removeNullElements = (array) => {
    const result = array.filter(function (el) {
        return el != null;
      });
    return result;
}

let removeNullAndFalseElements = (array) => {
    const result = array.filter(function (el) {
        return el != null && el != false;
      });
      result.push(0);
    return result;
}

let reverseWordsInArray = (array) => {
    
    let result = "";
    for (var i = 0; i < array.length; i++) {
        result += array[i].split('').reverse().join('') + ",";
    }
    let finalResult = result.split(',');
    return finalResult.slice(0,4);
}

let everyPossiblePair = (array) => {

    return result;
}

let allElementsExceptFirstThree = (array) => {
    let result = [];
    for(var i=0; i< array.length ;i++){
        if(i > 2){
            result[i] = array[i];
        }

    }
    result = result.filter(function (el) {
        return el != undefined ;
      });
    return result;
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    let result = array.sort(
            function(ini, end) {
                if (ini[ini.length - 1] > end[end.length - 1])
                    return 1;
                else if (ini[ini.length - 1] < end[end.length - 1])
                    return -1;
                return 0;
    
    })
    return result;
}

let getFirstHalf = (string) => {
    let result ='';
    let hafString = string.length /2 ;
    for(var i=0; i < hafString  ;i++){
        result = result.concat(string.charAt(i));
    }
    return result;
}

let makeNegative = (number) => {
     
    return - Math.abs(number);
}

// let numberOfPalindromes = (array) => {
//     return 'Write your method here';
// }


let shortestWord = (array) => {
    let result  = [];
     for(var i = 0; i < array. length; i++){ 
         if(array[i+1] < array[i]){ 
            result = array[i]; 
         }else if (array[i+1] > array[i]){ 
            result = array[i + 1]; 
            }else if (array[i+1] == array[i]){ 
                result = array[i]; 
            } } 
    return result;
}

let longestWord = (array) => {
    let result = array.sort(
        function (a, b) {
            return b.length - a.length;
        }
    )[0];
    return result;
}

let sumNumbers = (array) => {
    let result = array.reduce((a, b) => b + a, 0);
    return result;
}

let repeatElements = (array) => {
    let result = ['a','b','c'];
    for(var i=0; i< array.length;i++){
          result.push(array[i]);
    }
    return result;
}

let stringToNumber = (string) => {
    let result = parseInt(string);
    return result;
}

let calculateAverage = (array) => {
    let result = 0;
    for(var i = 0; i < array.length; i++) {
        result += array[i];
    }
    let avg = result / array.length;
    return avg;
}

let getElementsUntilGreaterThanFive = (array) => {
    let result = [];
    for(var i = 0; i < array.length; i++) {
        if (array[i] <= 5){
           result.push(array[i]);
        }else if(array[i] >5){
            break;
        }
    }
    return result;
}

let convertArrayToObject = (array) => {
    let rv = {};
    for (var i = 0; i < array.length; ++i)
      if (array[i] !== undefined) 
        rv[array[i]] = array[i];
    return rv;
}

// let getAllLetters = (array) => {
//     let teste;
//     let result = [];
// for (var i = 0; i < array.length; i++) {
//     teste =  Array.from(array[i]);
//       result.push(teste);
// }
//     return result;
// }

let swapKeysAndValues = (object) => {
    let result = {};
    for(var key in object){
        result[object[key]] = key;
    }
    return result;
}

let sumKeysAndValues = (object) => {
    let result = 0;
    let values;
    let keys;
    for (let [key, value] of Object.entries(object)) {
        values = value + value;
        keys = parseInt(key) + parseInt(key);
        result = keys+values;
      }
    return result;
}

let removeCapitals = (string) => {
    let result ='';
    let removeNext = 0;
    let count = 1;
    for(var i=0; i < string.length  ;i++){
        if (string.charAt(i)  == " "){
          removeNext = 1;
        }
        if(string.charAt(0) != string.charAt(i) && count == 1){
            result = result.concat(string.charAt(i));
        }
        if(removeNext != 1){
            count = 1;
        }
        if(removeNext == 1){
          count = 0;
        }
    
        if(count == 0){
            removeNext = 0;
        }
    }
    return result;
}


let roundUp = (number) => {
    number  =Math.ceil(number) ;
    return number;
}

let formatDateNicely = (date) => {
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return (da+'/'+mo+'/'+ye);
}

let getDomainName = (string) => {
    let domainDotCom = string.replace(/.*@/, "");
    let domain=  domainDotCom.replace(/.com/, "");
    return domain;
}

let titleize = (string) => {
    
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(string);;
}

let squareRoot = (number) => {
    var value = Math.sqrt(number);
    return value;
}

let factorial = (number) => {
    let answer = 1;
  if (number == 0 || number == 1){
    return answer;
  }else{
    for(var i = number; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
  
   return answer = factorial(number);
}
   

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    var fTemp = number;
  var fToCel = (fTemp - 32) * 5 / 9;
  var result =  Math.ceil(fToCel);
    return result;
}

function alphabetPosition(text) {
    let result = [];
    for(var i =0; i< text.length;i++){
         result.push(parseInt(text[i].toLowerCase().split('')
         .filter( c => c >= 'a' & c <= 'z' )
         .map( c => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
         .join(' ')))
    
    }
    return result;
  }
let letterPosition = (array) => {
    return alphabetPosition(array)

   
}
