const article = "Lorem naoual ipsum  dolor sit amet consectetur naoual, adipisicing elit. Ipsam sed modi naouale , beatae neque quo voluptas impedit naoualee, eaque commodi magni hic iste dolores minima similique, minus quae nihil deserunt maiores. Ex!"
let nameSearch = /Naoual/ig;
// let nameS =new RegExp( 'Naoualig);         //hadi taika akhra dyal declaration 

//search method == resolt =-1 or index   //rakkharaj lk lawal o ila mal9ahx ray3tk -1
const nom = article.search(nameSearch)
//console.log(nom)

//match method == result == null or [] 
const matchSearch = article.match(nameSearch)
//console.log(matchSearch);

//matchAll method


//replace method
const updatArticle = article.replace(nameSearch,"eladnani");
//console.log(updatArticle)

listModules ="POO HTML/JAVASCRIPT CSS "

//split method ========> return []
arrModules = listModules.split(/[\s-/]/)
//console.log(arrModules)

//Test method =========> true or false 
const tester=nameSearch.test(article);
//console.log(tester);

//exec method ===== > null or array ))) the same as match 
const chercher = nameSearch.exec(article);
//console.log(article)

let patternSt = /(\b^[a-zA-Z]+\b)\s(\b[a-zA-Z]+)\s([ID][D][0-9]{3})/gi;

stagiaires = [
    "NAOUAL ELADNANI DD106",
    "HIBA MRIBEH DD106",
    "NADA RACHIDI ID105"
];
for (let i=0 ; i<stagiaires.length ; i++ ){
    let patItem =stagiaires[i].replace(patternSt,"le groupe $3 le stagiare $1 $2 ");
    console.log(patItem);
}
