document.getElementById('cards').addEventListener('click',function(e){
    const callBtn=e.target
 if(callBtn.className.includes('call-btn')){
 const serviceName=callBtn.parentNode.parentNode.children[1].children[0].innerText;
 const serviceNumber=callBtn.parentNode.parentNode.children[2].children[0].innerText;
 const coinNum=document.getElementById('coin-num').innerText;

 
const perClickCoin=Number(coinNum)-Number(20);

if(perClickCoin<=0){
   document.getElementById('coin-num').innerText='0';    
    alert('husadiuegdfuyg')
}
alert(serviceName+" :"+serviceNumber)
document.getElementById('coin-num').innerText=perClickCoin;

 console.log(perClickCoin)




 }
})