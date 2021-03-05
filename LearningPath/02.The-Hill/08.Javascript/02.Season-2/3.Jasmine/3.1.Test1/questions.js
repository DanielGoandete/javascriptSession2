
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}

   
  function concate(texte1,texte2){  
    let concatResult = texte1 + texte2;
    return concatResult;
  }

let concatString = (texte1, texte2) => {
   return concate(texte1, texte2);  
}

function  searchLetter(text){
    let letter = 'e';
    let goodLetter;
        for(var i=0; i<text.length ;i++){
            if(i == 4){
               if(letter == text.charAt(i)){
                 goodLetter = text.charAt(i);
               }
            }
        }
    return goodLetter;
}
let afficherCar5 =  (text) => {
   return searchLetter(text);
}
function searchPhrase(text){
    let word = 'Je dirais';
    let phrase = '';
    for(var i=0; i<text.length ;i++){
        if(word.charAt(i) == text.charAt(i)){
            phrase = phrase.concat(word.charAt(i));
        } 
    }
    return phrase;
}
let afficher9Car =  (text) => {
   return  searchPhrase(text);
}

function upperCase(text){
    let result = text.toUpperCase();
    return result;
}
let majusculeString =  (text) => {
    return upperCase(text);
}

function lowerCase(text){
    let result = text.toLocaleLowerCase();
    return result;
}
let minusculeString =  (text) => {
    return lowerCase(text);
}

function removeSpace(text){
    let result  = text.trim();
    return result;
}
let SupprEspaceString =  (text) => {
    return removeSpace(text);
}

function isThatAString(text){
    let result;
    if(typeof text ==='string' || text instanceof String){
        result = true;
    }
    return result;
}
let IsString =  (text) => {

    return isThatAString(text);
}

function insertJPG(text){
    let text2 = 'jpg';
    let result = text2;
    return result;
}
let AfficherExtensionString =  (text) => {
    return insertJPG(text);

}

function spacesString(text){
    let  result = text.split(" ").length - 1;
   
    return result;
}
let NombreEspaceString =  (text) => {
 return spacesString(text)
}

function invertString(text){
    let result ;
    let split = text.split("");
    let reverse = split.reverse();
    let join =reverse.join("");
    result  = join;
    return result;
}
let InverseString =  (text) => {
 return invertString(text);
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {

}

function abs(nombre){
    let result = Math.abs(nombre);
    return result;
}
let valeurAbsolue =  (nombre) => {
    return abs(nombre);

}

function absArray(array){
    let result = [];
    //Math.abs(array);
    for(var i= 0;i<array.length;i++){
       result[i]= Math.abs(array[i]);
    }
    return result;
}
let valeurAbsolueArray =  (array) => {
   return absArray(array);
}

function circle(rayon){
    result  = Math.PI * Math.pow(rayon,2);
  return result;
}
let sufaceCercle =  (rayon) => {
 return  circle(rayon);
}


function hipo(ab, ac){
    let result = Math.hypot(ab,ac);
  return result ;
}
let hypothenuse =  (ab, ac) => {
  return hipo(ab, ac);
}

function iMC(poids, taille) {
    let result;
    var tailleMentre = taille / 100;
  
    result = Math.round(poids / (tailleMentre * tailleMentre));
    return result;
  }
  
let calculIMC =  (poids, taille) => {
  return iMC(poids, taille);
}
