
// Heart Counter
const heart = document.getElementById('heart-count')
let newNum= 0; 

const findHearts= document.getElementsByClassName('fa-heart')
console.log(find)

for (const find of findHearts){
  find.addEventListener('click', function(){
    newNum++
    heart.innerHTML= newNum
  })
}

// Credit Reducing
const coin = document.getElementById('coin-count');
let coinCount = 100;

const findCalls = document.getElementsByClassName('btn-primary')
for(const btn of findCalls){
  btn.addEventListener('click', function(){
    if(coinCount<20){
      alert ("You don't have enough coins")
      
    } else{
      
      coinCount = coinCount - 20;
      coin.innerHTML= coinCount;
    }
  })
}




/*

const mainElement= document.getElementById('history');
const history= document.createElement('div');

history.innerHTML = `
 <div>
      <div style="width:full; background-color:#fafafa; padding:16px; border-radius:16px">
        <h4 style="font-weight:500; font-size:20px">জাতীয় জরুরি সেবা</h4>
        <p>999</p>
      </div>
      
    </div>
`
mainElement.appendChild(history);

*/