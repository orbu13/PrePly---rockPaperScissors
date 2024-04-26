let pScore = 0
let cScore = 0

function game(){
    let play = document.querySelector(".play")
    let intro = document.querySelector(".intro")
    let match = document.querySelector(".match")
    play.addEventListener("click", function(){
        intro.classList.add("fadeOut")
        match.classList.add("fadeIn")
    })
    function playMatch(){
        let arrayOfThree = ["rock", "paper", "scissors"]
        let playerImgs = document.querySelector(".player-hand")
        let computerImgs = document.querySelector(".computer-hand")
        let options = document.querySelectorAll(".options button")
        let hands = document.querySelectorAll(".hands img")
        hands.forEach(function(hand){
            hand.addEventListener("animationend", function(e){
                e.target.style.animation = ""
            })
            
        })
        options.forEach(function(item){
            item.addEventListener("click", function(e){
                options.forEach(function(button){
                    button.disabled = true
                })
                let randomNumber = Math.floor(Math.random()*arrayOfThree.length)
                let computerChoice = arrayOfThree[randomNumber]
                let playerChoice = e.target.className
                playerImgs.style.animation = "shakePlayer 2s ease"
                computerImgs.style.animation = "shakeComputer 2s ease"
                setTimeout(() => {
                    compareHands(playerChoice, computerChoice)
                    playerImgs.src = "./imgs/" + e.target.className + ".png"
                    computerImgs.src = "./imgs/" + computerChoice + ".png"
                    options.forEach(function(button){
                        button.disabled = false
                    })
                }, 2000);
            })
        })
    }
    playMatch()
    function compareHands(playerChoice, computerChoice){
        let winner = document.querySelector(".winner")
        if(playerChoice === computerChoice){
            winner.innerText = "its a tie"
            return 
        }
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.innerText = "Player wins!"
                pScore +=1
                updateScore()
                return
            }else{
                winner.innerText = "Computer wins!"
                cScore +=1
                updateScore()
                return
            }
        }
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.innerText = "Computer wins!"
                cScore +=1
                updateScore()
                return
            }else{
                winner.innerText = "Player wins!"
                pScore +=1
                updateScore()
                return
            }
        }
        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.innerText = "Computer wins!"
                cScore +=1
                updateScore()
                return
            }else{
                winner.innerText = "Player wins!"
                pScore +=1
                updateScore()
                return
            }
        }
    }
    function updateScore(){
        let playerScore = document.querySelector(".player-score p")
        let computerScore = document.querySelector(".computer-score p")
        playerScore.innerText = pScore
        computerScore.innerText = cScore
    } 
}
game()