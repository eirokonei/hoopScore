let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
console.log(scoreHome)
let scoreH =0 , scoreG = 0
function homebtn1()
{
    console.log("btn clicked!")
    scoreH +=1
    scoreHome.textContent = scoreH
}
function homebtn2()
{
    console.log("btn clicked!")
    scoreH +=2
    scoreHome.textContent = scoreH
}
function homebtn3()
{
    console.log("btn clicked!")
    scoreH +=3
    scoreHome.textContent = scoreH
}
function guestbtn1()
{
    console.log("btn clicked!")
    scoreG +=1
    scoreGuest.textContent = scoreG
}
function guestbtn2()
{
    console.log("btn clicked!")
    scoreG +=2
    scoreGuest.textContent = scoreG
}
function guestbtn3()
{
    console.log("btn clicked!")
    scoreG +=3
    scoreGuest.textContent = scoreG
}