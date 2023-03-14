function productPrice(id,price,finalCostId){
    const productQuantity = document.getElementById(id).value;
    const productCost = productQuantity * price;

    const productTotal =  document.getElementById(finalCostId).innerText = productCost;

    return productTotal;

}

function allProductCost(){
   const chocolate = document.getElementById('chocolate').innerText;
   const rose = document.getElementById('rose').innerText;
   const diary = document.getElementById('diary').innerText;

   const allProductCost = parseInt(chocolate) + parseInt(rose) + parseInt(diary);

   document.getElementById('total').innerText = allProductCost;

   
}

document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
  const kikKatTotal =    productPrice('kitkat-quantity',200,'chocolate');
  allProductCost();
});
document.getElementById('rose-buy-btn').addEventListener('click',function(){
  const roseTotal =  productPrice('rose-quantity',100,'rose');
  allProductCost();
});
document.getElementById('diary-buy-btn').addEventListener('click',function(){
 const diaryTotal =   productPrice('diary-quantity',100,'diary');
 allProductCost();
});



document.getElementById('promo-code-btn').addEventListener('click', function(){
      const promoCode = document.getElementById('promo-code').value;
      
      if(promoCode == 101){
         const allProductCost = document.getElementById('total').innerText;
         const finalTotalPrice = allProductCost - parseInt(allProductCost) * 0.1;
         
         document.getElementById('all-total').innerText = finalTotalPrice;
      }
      else{
        alert('Youe Promo Code is invalid.Please input a valid Promo code');
      }
});