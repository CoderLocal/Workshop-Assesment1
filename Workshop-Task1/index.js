var images=1;
var imgClass;
var pic,like,likes,code,loc;
function addImage(){
    loc=document.getElementById("imgSrc").value;
    code=
    '<div><img src="'+loc+
    '></div><div id="newLine"><a href="'+loc+'" download>Download</a><button onclick=incLike("img'+images+
    '")>Like :<p id="img'+images+'">0</p></button></div>';
    document.getElementById("images").innerHTML+=code;
    images++;
 }
function incLike(likeId){
   like=document.getElementById(likeId);
     likes=parseInt(like.innerText);
     like.innerHTML=++likes;
}