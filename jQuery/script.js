document.getElementById("btn-hide").addEventListener('click',function(){
    $("#paragraph-1").hide()
    $(".liste li:nth-child(2n)").css("color","red")
    $("#title-1,#title-2").css("color","blue")



    $("#btn-hide").css({"color":"red"})




})
document.getElementById("btn-show").addEventListener('click',function(){
    $("#paragraph-1").show()
})

$(document).ready(function(){

        $("#btn-ajouter").click(function(){
         console.log("You clicked this btn ")
        })

        $("#btn-ajouter").on("click",function(){
            console.log("You clicked this btn ")
            $("#title-1").addClass("add")
            $("#title-2").removeClass(".remove")

        })

        $("#btn-modifier").on("click",function(){
    
            $(".liste").each(function(){
                if($(this).hasClass('titre-aqua')){
                     $(this).removeClass('titre-aqua')
                }
            })
            

        })

       
})


        