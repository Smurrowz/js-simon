let numbers = []
let userNumbers = []
let score = 0
let rightNumbers = []

while(numbers.length < 5){
  const randomNumber = Math.floor(Math.random() *100) + 1

  if(numbers.includes(randomNumber)){
  }else{
    numbers.push(randomNumber)
  }
}
console.log(numbers)

alert( " cerca di ricordare questi numeri: " + numbers)
setTimeout(() => {
  for(let i = 0; i < numbers.length; i++){
   const numberPrompt = parseInt(prompt('inserisci un numero')) 
   userNumbers.push(numberPrompt)

  }
  console.log(userNumbers)
  for( let i = 0; i < numbers.length; i++){
    if(numbers.includes(userNumbers[i])){
      score++
      rightNumbers.push(userNumbers[i])
      
    }
    
    
  }
  console.log('il tuo punteggio é: ', score, " hai indovinto i numeri: ", rightNumbers )
}, 30000);



