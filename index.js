document.getElementById('cards').addEventListener('click',function(e){
    const hearticon=e.target
    if(hearticon.className.includes('fa-heart')){

    const heartNumber=document.getElementById('heart-count').innerText;
    const heartCurrentNumber=Number(heartNumber)+1
   
    document.getElementById('heart-count').innerText=heartCurrentNumber;
    console.log(heartNumber)
    }
    
})


document.getElementById('cards').addEventListener('click',function(e){
    const callBtn=e.target
 if(callBtn.className.includes('call-btn')){
 const serviceName=callBtn.parentNode.parentNode.children[1].children[0].innerText;
 const serviceNumber=callBtn.parentNode.parentNode.children[2].children[0].innerText;
 const coinNum=document.getElementById('coin-num').innerText;
 const time = new Date();
const hour = time.getHours().toString().padStart(2, '0'); 
const minute = time.getMinutes().toString().padStart(2, '0'); 
const secound=time.getSeconds().toString().padStart(2, '0')
const amPm = hour >= 12 ? 'PM' : 'AM'
const getDate = `${hour}:${minute}:${secound} ${amPm} `;



const perClickCoin=Number(coinNum)-Number(20);

if(perClickCoin<0){
  
 
    alert('you need 20 coin minimum')
   document.getElementById('coin-num').innerText='0';
   return  
}
alert(serviceName+" "+serviceNumber+'...')
document.getElementById('coin-num').innerText=perClickCoin;


// history 
const historyContainer=document.getElementById('history-container');

const newCard=document.createElement("div");
newCard.innerHTML=`    <div class=" px-5 py-5 my-3 rounded-lg bg-[#F2F2F2] shadow-2xl flex justify-between items-center">
            <div>
                <h3 id="history-title" class=" font-semibold text-[24px] text-[#111]">
               ${serviceName}

                </h3>
                <p id="history-number" class=" text-[18px] text-[#5C5C5C]">${serviceNumber}</p>
            </div>

       <div class="time text-[20px] font-[600]">${getDate}</div>

        </div>
`
historyContainer.append(newCard)

 }

})

//  copy click
document.getElementById('cards').addEventListener('click',function(e){

  const copyBtn=e.target
  const serviceName= copyBtn.parentNode.parentNode.children[1].children[0].innerText;
  const serviceNumber=copyBtn.parentNode.parentNode.children[2].children[0].innerText;
 if(copyBtn.className.includes('copy-btn')){
    alert(serviceName+" copied")
  navigator.clipboard.writeText(serviceNumber)
  const copyCount=document.getElementById('copy-count').innerText;
  const currentCopyNumber =Number(copyCount)+1
  document.getElementById('copy-count').innerText=currentCopyNumber


  console.log(serviceNumber)

 }



})