const btn = document.querySelectorAll("button.themgh")
btn.forEach(function(button,sanpham){
    button.addEventListener("click",function(event){{
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement.parentElement
        var productname = product.querySelector("H3").innerText
        var productPrice = product.querySelector("span").innerText
        addcard(productname,productPrice)
    }})
})   
function addcard(productname,productPrice){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    var trcontent = '<tr><td><span class=title>'+productname+'</span></td><td><span class=price>'+productPrice+'</span><sup>VNĐ</sup></td><td><input class="sl" type="number" value="1" min="1"></td><td><span class="delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cardTable = document.querySelector("tbody")
    cardTable.append(addtr)
    Cattotal()
}
/*tính tiền*/
function Cattotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC=0
    for(var i=0; i<cartItem.length;i++){
        var inputvaLue  =  cartItem[i].querySelector("input").value
        var productprice = cartItem[i].querySelector(".price").innerText
        var totalA = inputvaLue*productprice*1000
        totalC = totalC+totalA
        var totalD = totalC.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector(".tien span")
    cartTotalA.innerHTML = totalD
}
