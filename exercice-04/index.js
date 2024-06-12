let stagiaireList = [];
class Stagiaire{
    constructor(code,prenom,nom,groupe,note){
        this.code = code
        this.prenom=prenom
        this.nom=nom
        this.groupe=groupe
        this.note=note
    }
}

let code = document.getElementById("code")
let nom = document.getElementById("nom")
let prenom = document.getElementById("prenom")
let groupe = document.getElementById("groupe")
let note = document.getElementById("note")

function valideNote(){
    if(+note.value>5 && +note.value<20){
        document.getElementById("note").classList.remove("error")
        return true
    }

    else{
        document.getElementById("note").classList.add("error")
        return false
    }
}
function valideGroupe(){
    let Grop = /[DD]-[0-9]{3}-[0-9]{2}/
    let group = Grop.test(groupe.value)
    console.log(group)
    if(group  === true){
        document.getElementById("groupe").classList.remove("error")
        return true
    }
    else{
        document.getElementById("groupe").classList.add("error")
        return false
    }
}



document.getElementById("enregistrer").addEventListener("click",function(e){
    e.preventDefault();
   
   let Note=valideNote()
   let Group = valideGroupe()
   console.log(Group)
   
    if( Note==true && Group==true){
        let stagiaire1 = new Stagiaire(code.value,nom.value,prenom.value,groupe.value,note.value)
        stagiaireList.push(stagiaire1)
        console.log(stagiaireList)

        vider()
        afficher()
    }
   
})
function vider(){
    
code = document.getElementById("code").value=""
nom = document.getElementById("nom").value=""
prenom = document.getElementById("prenom").value=""
groupe = document.getElementById("groupe").value=""
note = document.getElementById("note").value=""
}
function afficher(){
    let content =""
    for(let i=0;i<stagiaireList.length;i++){
        let color= "text-primary"
        if(stagiaireList[i].note < 10){
            color = "text-danger"
        }
        content+=`<tr>
                    <td>${stagiaireList[i].code}</td>
                    <td>${stagiaireList[i].nom}</td>
                    <td>${stagiaireList[i].prenom}</td>
                    <td>${stagiaireList[i].groupe}</td>
                    <td class="${color}">${stagiaireList[i].note}</td>
        
                </tr>`
    }
    document.getElementById("data").innerHTML = content;
    let html = document.getElementById("table_stagaire")
    for(let i=0; i<html.rows.length;i++){
        html.rows[i].onclick = function(){
            for(let r=0; r<html.rows.length;r++){
                html.rows[r].classList.remove("text-primary")
            }  
            html.rows[i].classList.add("text-primary")
        }
    }
}
function rechercher() {
    let search = stagiaireList.find(function(itemValue){
        return itemValue.nom == document.getElementById("searsh-input").value;
    })
}



