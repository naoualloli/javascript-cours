class stagiaires{
    constructor(code,nom,prenom,groupe,note){
        this.code=code
        this.nom=nom
        this.prenom=prenom
        this.groupe=groupe
        this.note=note

    }
}
let code = document.getElementById("code");
let nom = document.getElementById("nom");
let prenom= document.getElementById("prenom");
let groupe = document.getElementById("groupe");
let note = document.getElementById("note");

let stagiaireList=[]
function validationNote(){
    console.log(+note.value)
    if(+note.value > 5 || +note.value < 20){
        document.getElementById("note").classList.remove("error");
        return true
    }
    else{
        document.getElementById("note").classList.add("error")
        return false
    }
}

function validationCode (){
    let codes = /[DD]-[0-9]{3}-[0-9]{2}/
    let cod = codes.test(code.value)
     console.log(cod)

    
    if(cod === false || code.value ==""){
        
        code.classList.add("error")
        document.getElementById("span-nom").textContent = "incorect"
        return false
    }

    else{

        //
        document.getElementById("code").classList.remove("error")
        document.getElementById("span-nom").textContent = ""
        return true
    }
}

document.getElementById("enregistrer").addEventListener("click",function(e){
    e.preventDefault();
    
    let vNote = validationNote();
    let vCode = validationCode();
    
    if( vNote && vCode){
        let stagiaire = new stagiaires(code.value,nom.value,prenom.value,groupe.value, +note.value)
        stagiaireList.push(stagiaire)
        console.log(stagiaireList)

        
        afficher()
    }
    
    
    
})

function afficher(){
    let content = ""
    for(let i=0;i<stagiaireList.length;i++){
        let situation="Admis"
        let couleurNote = stagiaireList[i].note < 10 ? "text-danger" : ""
        if (stagiaireList[i].note < 10){
            situation = "Non Admis"
        }
        content+=`<tr>
                        <td>${stagiaireList[i].code}</td>
                        <td>${stagiaireList[i].nom}</td>
                        <td>${stagiaireList[i].prenom}</td>
                        <td>${stagiaireList[i].groupe}</td>
                        <td class="${couleurNote}">${stagiaireList[i].note}</td>
                        <td>${situation}</td>
                  <tr>`
    }
    document.getElementById("data").innerHTML = content
}


//keybord
document.addEventListener("keyup",function(e){
    if(e.key == "ArrowLeft"){
        console.log("test")
        document.body.style.background="black"
    }
    else if(e.key == "ArrowRight"){
        document.body.style.background="blue"
    }
    
})
let testTime=setTimeout(function(){
    console.log("elfakiri")
},5000)//kat3atal b 5000 3ad kat bda
clearTimeout(testTime)//katwa9af 

let i=0
let test =setInterval(function(){
    console.log(i+1)


},2000)//makayw9afx
// clearInterval(test)

document.getElementById("enregistrer").addEventListener("clck",function(){
    window.open()
})
document.getElementById("enregistrer").addEventListener("clck",function(){
    window.close()
})