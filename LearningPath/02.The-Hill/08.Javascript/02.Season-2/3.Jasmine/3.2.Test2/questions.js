

function array(){
     let result= ["Html","CSS","Java","PHP"];
    return result;
}
let CreationTableauLangages =  () => {
    return array();
}

function numbers(){
  let result = [0,1,2,3,4,5];
 return result; 
}
let CreationTableauNombres =  () => {
  return numbers();
}

function replaceArray(langages){
    for(var i=0; i< 4 ;i++){
        if(langages[i] == 'Java'){
           langages[i] = 'Javascript';
        }
    }
 return langages ;
}
let RemplacementElement =  (langages) => {
 return replaceArray(langages);
}

function addElements(langages){

    langages.push("Ruby", "Python");
 return langages ;
}
let AjoutElementLangages =  (langages) => {
    return addElements(langages);
}

function addNumber(nombres){
    nombres.unshift(-2,-1);
   
 return nombres; 
}
let AjoutElementNombres =  (nombres) => {
  return addNumber(nombres);
}

function removeFirstElement(langages){
    langages.shift();
 return langages; 
}
let SuppressionPremierElement =  (langages) => {
  return removeFirstElement(langages);
}

function removeLastElement(langages){
    langages.pop();
 return langages ;
}
let SuppressionDernierElement =  (langages) => {
  return removeLastElement(langages);
}

function editString(reseaux_sociaux_chaine){
   let test = reseaux_sociaux_chaine.split(',');
 return test ;
}
let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
 return editString(reseaux_sociaux_chaine);
}

function convertArray(langages){
   let result = langages.toString();
 return result ;
}
let ConversionTableauChaine =  (langages) => {
    return convertArray(langages);
}
function organizeArray(reseaux_sociaux){
    reseaux_sociaux.sort();
 return reseaux_sociaux ;
}
let TriTableau =  (reseaux_sociaux) => {
   return organizeArray(reseaux_sociaux);
}
function revertArray(reseaux_sociaux){
    reseaux_sociaux.reverse();
 return reseaux_sociaux ;
}
let InversionTableau =  (reseaux_sociaux) =>{
  return  revertArray(reseaux_sociaux)
}
