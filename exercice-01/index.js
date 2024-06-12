class crud_stagiaire{
    constructor(nom,prenom,pwd,numero,code){
        this.nom=nom,
        this.prenom=prenom,
        this.pwd=pwd,
        this.numero=numero,
        this.code=code
    }
}
let stagiaireList=[];
document.getElementById("submit").addEventListener("click",function(e){
    e.preventDefault();
    let nom = document.getElementById("nom").value;
    if(nom === ""){
        document.getElementById("nom").classList.add("error");
        document.querySelector(".span-error").innerText ="Le nom d'utilisateur ne peut pas être vide";
        document.querySelector(".span-error").classList.remove("span-error");
    }
    else{
        document.getElementById("nom").classList.remove("error");
        document.getElementById("span-nom").classList.add("span-error");
    }
    let prenom = document.getElementById("prenom").value;
    if(prenom === ""){
        document.getElementById("prenom").classList.add("error");
        document.querySelector(".span-error2").innerText ="Le prenom d'utilisateur ne peut pas être vide";
        document.querySelector(".span-error2").classList.remove("span-error2");
    }
    else{
        document.getElementById("prenom").classList.remove("error");
        document.getElementById("span-prenom").classList.add("span-error2");
    }
    let pwd = document.getElementById("pwd").value;
    if(pwd === ""){
        document.getElementById("pwd").classList.add("error");
        document.querySelector(".span-error3").innerText ="Le pwd d'utilisateur ne peut pas être vide";
        document.querySelector(".span-error3").classList.remove("span-error3");
    }
    else{
        document.getElementById("pwd").classList.remove("error");
        document.getElementById("span-pwd").classList.add("span-error3");
    }
    let numero = document.getElementById("numero").value;
    if(numero === ""){
        document.getElementById("numero").classList.add("error");
        document.querySelector(".span-error4").innerText ="Le numero d'utilisateur ne peut pas être vide";
        document.querySelector(".span-error4").classList.remove("span-error4");
    }
    else{
        document.getElementById("numero").classList.remove("error");
        document.getElementById("span-numero").classList.add("span-error4");
    }
    let code = document.getElementById("code").value;
    if(code === ""){
        document.getElementById("code").classList.add("error");
        document.querySelector(".span-error5").innerText ="Le code d'utilisateur ne peut pas être vide";
        document.querySelector(".span-error5").classList.remove("span-error5");
    }
    else{
        document.getElementById("code").classList.remove("error");
        document.getElementById("span-code").classList.add("span-error5");
    }
    let stagaiare=new crud_stagiaire(nom,prenom,pwd,numero,code);
    stagiaireList.push(stagaiare)
    console.log(stagiaireList)
    let content="";
    for(let i=0;i<stagiaireList.length;i++){
       
        content += `<tr>
                        <td>${stagiaireList[i].nom}</td>
                        <td>${stagiaireList[i].prenom}</td>
                        <td>${stagiaireList[i].pwd}</td>
                        <td>${stagiaireList[i].numero}</td>
                        <td>${stagiaireList[i].code}</td>
                    </tr>`
    }
    document.getElementById("data").innerHTML=content;
    
})
document.getElementById("reset").addEventListener("click",function(e){
    e.preventDefault();
    nom = document.getElementById("nom").value="";
    prenom = document.getElementById("prenom").value="";
    pwd = document.getElementById("pwd").value="";
    numero = document.getElementById("numero").value="";
    code = document.getElementById("code").value="";


})

