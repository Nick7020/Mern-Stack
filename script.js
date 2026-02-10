var allbtn=document.querySelectorAll(".elem button");
allbtn.forEach(function(val){
    val.addEventListener("click",function(){
        if(val.innerHTML=="Add Friend"){
            val.innerHTML="Remove Friend";
        }
        else{
            val.innerHTML="Add Friend";
        }
    })})
