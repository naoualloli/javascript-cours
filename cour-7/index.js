//// document.querySelector(".age").value = 2
                                                
//// document.querySelector(".num").value = 4

// let a = Number(document.querySelector(".age").value);       

// let b = Number(document.querySelector(".num").value);


// let c = document.querySelector(".resultat").value = a + b 

// if (c > 20){
//     document.querySelector(".resultat").style.backgroundColor ="red"
// }else{
//     document.querySelector(".resultat").style.backgroundColor ="yellow"
// }

// EVENTS


//methode 1
document.querySelector(".btn").addEventListener("click" , function(){           

    let a = Number(document.querySelector(".age").value);       

    let b = Number(document.querySelector(".num").value);


    let c = document.querySelector(".resultat").value = a + b 

    if (c > 20){
        document.querySelector(".resultat").style.backgroundColor ="red"
    }else{
        document.querySelector(".resultat").style.backgroundColor ="yellow"
    }
})



// methode
document.querySelector(".btn").addEventListener("click" , () =>{           //fonction flechier

    let a = Number(document.querySelector(".age").value);       

    let b = Number(document.querySelector(".num").value);


    let c = document.querySelector(".resultat").value = a + b 

    if (c > 20){
        document.querySelector(".resultat").style.backgroundColor ="red"
    }else{
        document.querySelector(".resultat").style.backgroundColor ="yellow"
    }
})



// exemle

document.querySelector(".vide").addEventListener("click" , ()=>{
    
    let a = document.querySelector(".age").value="" ;   

    let b = document.querySelector(".num").value="";
})


// input          

document.querySelector(".age").addEventListener("input" ,()=>{
    document.querySelector(".age").value = document.querySelector(".num").value
})


// mouseover           

document.querySelector(".age").addEventListener("mouseover" ,()=>{
    document.querySelector(".age").style.backgroundColor="red"
})


// mouseout

document.querySelector(".age").addEventListener("mouseout" ,()=>{
    document.querySelector(".age").style.backgroundColor="yellow"
})