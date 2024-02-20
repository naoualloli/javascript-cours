// structures itérative  ==> les boucles

console.log("            ==> 2-) structures itérative ")

for(let i = 0;i <= 5;i ++){
    console.log(i)
}

// exemple

console.log("          ==> exemple")

jours = ["lundi","mardi","mercredi","jeudi","vendredi","samdi","dimanche"]


for(let x = 0;x <= 6;x ++){                    

    console.log(jours[x])
}

// for (in)


console.log("         ==>for (in)")

for(let jr in jours){                    

    console.log(jours[jr])                  
}

// for (of)

console.log("           ==>for (of)")

for(let jour of jours){                    
    console.log(jour)
}


//for each

console.log("             ==>for each")

let textjours = "";

function myfunction(value,index,array){          
    textjours += " " + value;                     
    // textjours += index;                      
    // console.log(textjours)                   
    
}
jours.forEach(myfunction)            
console.log(textjours)                         
    

// la difirance entre break et continue

console.log("         ==>la difirance entre break et continue")

//break

console.log("             -->break")

for(let j = 0;j <= (jours.length -1);j ++){
    if(j === 3){
        console.log("stop")
        break;                           
    }
    console.log(jours[j])
}


console.log("             -->continue")

for(let j = 0;j <= (jours.length -1);j ++){
    if(j === 3){
        console.log("stop")              
        continue;
    }
    console.log(jours[j])
}




//while ==>tant que

console.log("             ==>while")             

let n;

n = 10;

while(n >= 0){
    console.log(n)                  
    n -= 1
}

//dowhile ==>repeter jusqua

console.log("             ==>dowhile")

let m = 10;
 do {
    console.log(m)               
    m -= 1
 } 
while (m >= 0);