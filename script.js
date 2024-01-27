const Word = document.querySelector(".word");
const Hint = document.querySelector(".hint")
const CheckWord = document.querySelector(".btn2")
const refresh = document.querySelector(".btn1")  
const InputValue = document.querySelector(".Input")
const time = document.querySelector(".timeLeft")

let CorrectWord,timer;

const startTime=(maxtime)=>{
    clearInterval(timer)
    timer=setInterval(() => {
     if (maxtime>0) {
        maxtime--
      return  time.innerHTML=maxtime
    }
        clearInterval(timer)
        alert(`Time Up ! ${CorrectWord} is a right word`)

    }, 1000);

}



const StartGame = () => {


// for time
startTime(30)

    let randomObj = words[Math.floor(Math.random() * words.length)]
InputValue.value=''
    console.log(randomObj);

// Shuffling word order
const WordArray =randomObj.word.split("") 

for (let i = WordArray.length - 1 ; i > 0; i--) {
let j = Math.floor(Math.random() * (i + 1))
let temp = WordArray[i]
WordArray[i]=WordArray[j];
WordArray[j]=temp;
}

const FinalWord=WordArray.join("");

    Word.innerHTML = FinalWord
    Hint.innerHTML= randomObj.hint
    CorrectWord = randomObj.word.toLowerCase()  
  
}

function Check(){

    const UserValue = InputValue.value.toLocaleLowerCase()



if (UserValue==="") {
    alert(`You must should write something`)
    
}
else if(UserValue === CorrectWord) {
   alert(`Congrats ! ${UserValue} is a right word`)
   StartGame()
   startTime(30)
   
}

else{
    alert(`Oops ! ${UserValue} is a wrong word`)
    StartGame()
    startTime(30)

}
    console.log(UserValue);


}




refresh.addEventListener("click",StartGame)
CheckWord.addEventListener("click",Check)

StartGame()
