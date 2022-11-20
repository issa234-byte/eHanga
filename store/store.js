//cart
let cartIcon= document.querySelector('.cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('# close-cart');
//open cart
cartIcon.onclick = () =>{
    cart.classList.add( "active" )
}
//close cart
closeCart.onclick = () =>{
    cart.classList.remove( "active" )
}
// cart working js
if ( document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else {
    ready();
}
//making function
function ready() {
//reomve items from cart
var reomvecartbuttons = document.getElementsByClassName('cart-remove');
console.log(reomvecartbuttons)
for ( var i=0 ; i <reomvecartbuttons.length ; i ++) {
    var button =reomvecartbuttons[i]
    button.addEventListener("click" ,removecartItem)
}
//quantinty changes
var quantintyInputs =document.getElementsByClassName('cart-quantity')
for ( var i=0 ; i <quantintyInputs.length ; i ++){
    var input =quantintyInputs[i]
    input.addEventListener('change', quantitychanged);
}
//add cart
var addCart =document.getElementsByClassName('add-cart')
for ( var i=0 ; i <addCart.length ; i ++){
    var button =addCart[i]
    button.addEventListener('click',addCartclicked) ;
}
}
// remove cart items
function removecartItem(event){
    var buttonclicked =event.target
    buttonclicked.parentelement.remove();
    updatetotal ();
}
// quanttity changes
function quantitychanged(event){
    var input =event.target
if(isNaN(input.value)|| input.value<=0){
    input.value=1 ;
}
updatetotal() ;
}
//add to cart
function addCartclicked(event){
    var button =event.target
    var shopproducts = button.parentelement
    var title =shopproducts.getElementsByClassName('product-title')[0].innertext;
    var price =shopproducts.getElementsByClassName('price')[0].innertext;
    var productImg =shopproducts.getElementsByClassName("product-img")[0].src;
    addproductTocart.log(title,price,productImg);
    updatetotal();
}
function addproductTocart(title,price,productImg){
    var cartShopbox =document.createElement("div");
    cartShopbox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames= cartItems.getElementsByClassName('cart-product-title');
    for ( var i=0 ; i <cartItemsNames.length ; i ++){
    alert("you have already add  items to cat");
    return;
    }
} 
var cartBoxcontent =`
      <img src="a4.jpg" alt="" class="cart-img">
      <div class="detail-box">
      <div class="cart-product-title">cds23</div>
     <div class="cart-price">$32</div>
     <input type="number" value="1" class="cart-quantity">
     </div>
     <!--remove cart-->
     <img src="images.png" class="bx bxs-trash-alt cart-remove" >`;
cartShopbox.innerHTML=cartBoxcontent
cartItem.append(cartShopbox)
cartShopbox.getElementsByClassName('cart-remove')[0].addEventListener("click",removecartItem)
cartShopbox.getElementsByClassName('cart-quantity')[0].addEventListener("change",quantitychanged)

//update total
function updatetotal(){
    var cartContent = Document.getElementsByClassName('cart-content')[0];
    var cartBoxes =cartContent.getElementsByClassName('cart-box')
    for ( var i=0 ; i <cartBoxes.length ; i ++){
        var total =0
var cartBox=cartBoxes[i]
var priceElement =cartBox.getElementsByClassName('cart-price')[0];
var quantintyElement = cartBox.getElementsByClassName('cart-quantity')[0];

var price =parseFloat(priceElement.innertext.replace("$" ,"")) ;
var quantity = quantintyElement.value
total = total+ (price*quantity);
//if price contain same cents value
total =Math.round(total*100)/100 ;
document.getElementsByClassName('total-price')[0].innertext = '$'+total;
    }
}
