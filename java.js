var arr_anh=[
    "anh/banner/1.jpg",
    "anh/banner/2.jpg",
    "anh/banner/3.jpg",
    "anh/banner/4.jpg",
]
var index=0;
function next(){
    index++;
    if(index>=arr_anh.length)index=0;
        var anh=document.getElementById("anh");
        anh.src=arr_anh[index];
}
function prev(){
    index--;
    if(index<0) index=arr_anh.length-1;
        document.getElementById("anh").src=arr_anh[index];
}
setInterval("next()",3000);