// document.querySelector(".txtlogin").addEventListener("keypress",function(event){
//     event.preventDefault()
//     console.log(event.keyCode);
//     if (event.keyCode === 13){
//         document.querySelector(".btn").classList.add("change_border_color");
//         document.querySelector(".btn").classList.remove("error");
//     }

//     else if (event.keyCode === 32){
//         document.querySelector(".btn").classList.add("error");
//         document.querySelector(".btn").classList.remove("change_border_color");
//     }
//     console.log("you clicked on a button");
// })


document.querySelector(".btn-ajouter").addEventListener("click",function(event){
    event.preventDefault()
    // document.getElementById(".SignUpForm").submit();

    let nom = document.forms["SignUpForm"]["login"].value;
    if (nom == "") {
        document.querySelector(".login").classList.add("error");
    }
    if ( (nom.length <5) || (nom.length >10) ) {
        document.querySelector(".login").classList.add("error");
        document.querySelector(".p").innerHTML = "Entre autre nom"
        document.querySelector(".p").classList.add("error-error")

    }
})

   



document.querySelector(".btn-annuler").addEventListener("click",function(){
    console.log(okk)
    document.getElementById(".SignUpForm").reset();
})





