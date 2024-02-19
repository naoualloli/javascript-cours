// types primitifs

console.log(typeof(5))

console.log(typeof("to be or not to be"))

console.log(typeof(undefined))

console.log(typeof(true))

// passage par valeur

let a;
let b;
a=5;
b=a;
b=6;

console.log(a)
console.log(b)

// les types d'objets de base

// passage par reference ou par adresse

let liste=[1,2,3]

let cliste = liste

cliste.push(5)   

console.log(liste)
console.log(bliste)

let stagiaiare={
    id : 1 ,
    prenom : "naoual"
}

let cstg = stagiaiare

cstg.age = 15

console.log(stagiaiare)
console.log(cstg)

// copie

let liste2 = [].concat(liste)

// spread operator(operateur de propagation)

let liste3 = [liste]

let stagiaiare3 ={...stagiaiare}
stagiaiare3.branche="DD"

Object.assign(stagiaiare3,stagiaiare)

stagiaiare3.annee = "2024"

liste2.push(9)
console.log(liste)
console.log(liste2)
console.log(stagiaiare3)
console.log(stagiaiare)





