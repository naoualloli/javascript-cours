stagiaires=[];
class Gestion_stagiaire{
    constructor(cin,name,last_name,branch,module,grade){
        this.cin = cin
        this.name = name
        this.last_name = last_name
        this.branch = branch
        this.module = module
        this.grade =grade
    }
}



document.getElementById("btn-ajouter").addEventListener("click",function(e){
    e.preventDefault();
    let cin = document.getElementById("CIN").value;
    let name = document.getElementById("Name").value;
    let last_name = document.getElementById("Last_name").value;
    let branch = document.getElementById("branch").value;
    let module = document.getElementById("Modul").value;
    let grade = document.getElementById("Grade").value;


    let gestion_stagiaire = new Gestion_stagiaire(cin,name,last_name,branch,module,grade);
    stagiaires.push(gestion_stagiaire)
    console.log(stagiaires)



})
document.getElementById("btn-vider").addEventListener("click",function(e){
    e.preventDefault();
     cin = document.getElementById("CIN").value="",
     name = document.getElementById("Name").value="",
     last_name = document.getElementById("Last_name").value="",
     branch = document.getElementById("branch").value="";
     module = document.getElementById("Modul").value="";
     grade = document.getElementById("Grade").value="";

})

document.getElementById("btn-supprimer").addEventListener("click",function(){
    document.getElementById("data").remove();
})



document.getElementById("btn-afficher").addEventListener("click",function(e){
    e.preventDefault();
    let stagaiare_content = "";
    for(let i=0;i<stagiaires.length;i++){
       
        stagaiare_content += `<tr>
                                    <td>${stagiaires[i].cin}</td>
                                    <td>${stagiaires[i].name}</td>
                                    <td>${stagiaires[i].last_name}</td>
                                    <td>${stagiaires[i].branch}</td>
                                    <td>${stagiaires[i].module}</td>
                                    <td>${stagiaires[i].grade}</td>
                              </tr>` 
    }
    document.getElementById("data").innerHTML = stagaiare_content;
    let cont = document.getElementById("Gestion");
    for(let i=0 ;i<cont.rows.length;i++){
        cont.rows[i].addEventListener("click",function(){
            for(let j=0;j<cont.rows.length;j++){
                cont.rows[j].classList.remove("table-primary")
            }
            cont.rows[i].classList.add("table-primary")
        })
    }

})



























