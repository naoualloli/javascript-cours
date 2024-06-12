document.querySelector(".ajouter").addEventListener("click",(e)=>{
    e.preventDefault()
    
    const stagiares = [];

    let branche = {branche1:"" ,branche2:"",branche3:""};

    let modules = {modules1:"" ,modules2:"",modules3:"",modules4:""};

    let cin = document.querySelector(".cin").value
    let nom = document.querySelector(".nom").value
    let prenom = document.querySelector(".prenom").value

    let DD = document.querySelector(".DD").value
    let RI = document.querySelector(".RI").value
    let PH = document.querySelector(".PH").value

    let ALGO = document.querySelector(".ALGO").value
    let HTML = document.querySelector(".HTML").value
    let JS = document.querySelector(".JS").value

    let note = document.querySelector(".note").value

    branche.branche1 = DD
    branche.branche2 = RI
    branche.branche3 = PH

    modules.modules1 = ALGO
    modules.modules2 = HTML
    modules.modules3 = JS

    stagiares.push(cin,nom,prenom,branche,modules,note)

    document.querySelector(".list").append(stagiares)
    console.log(stagiares)
})