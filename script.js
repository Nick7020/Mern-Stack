var key=document.querySelector('body');
var h2=document.querySelector(".key h2");
key.addEventListener("keydown",function(val){
    h2.innerHTML=val.code;
})