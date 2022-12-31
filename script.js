let dispScore = document.getElementById("dispScore")
let gameScore= document.getElementById("gameScore")
let dispTime= document.getElementById("dispTime")
const up = document.querySelector(".up")
const down = document.querySelector(".down")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const gameScreen = document.querySelector(".gameScreen")
const lose = document.getElementById("loss")
const xbtn  = document.querySelector(".x")
const onbtn = document.querySelector("#on")
const target =document.createElement("img")
target.setAttribute("src","crosshair.png")
target.setAttribute("class","aim")
gameScreen.appendChild(target)
const homePage = document.getElementById("userInfo")
const blood = document.createElement("img")
blood.setAttribute("src","blood.png")
blood.setAttribute("class","blood")
const page1 =document.getElementById("page1")
const page2 =document.getElementById("page2")
const page3 =document.getElementById("page3")
const page4 =document.getElementById("page4")
const enemy = document.createElement("img")
enemy.setAttribute("src","enemy.png")
enemy.setAttribute("class","enemy")
var score = 0
var mySong = document.getElementById("mySong")


function slideShow(){
    homePage.style.display="none"
    setTimeout(()=>{
        page1.style.display="flex";
        page1.style.animationName="appear"
        setTimeout(()=>{
            page1.style.display="none"
            page2.style.display="flex"
            page2.style.animationName="appear"
            setTimeout(()=>{
                page2.style.display="none"
                page3.style.display="flex"
                page3.style.animationName="appear"
                setTimeout(()=>{
                    page3.style.display="none"
                    page4.style.display="flex"
                    page4.style.animationName="appear"
                    setTimeout(()=>{
                      page4.style.display="none"
                      homePage.style.display="flex"
                      /*homePage.style.animationName="appear"*/
                     
       
                    },10000)
                },10000)
            },15000)
        },10000)
    },2000)
}
    
    

onbtn.addEventListener("click",()=>{

    if(homePage.style.display=="none" && gameScreen.style.display=="none") { 
    onbtn.style.color="#0f0"
    slideShow()
    mySong.play()
    lose.style.display="none"
    gameScreen.style.display="none"
       
    }else{
    onbtn.style.color="f00"
        homePage.style.display="none"
        gameScreen.style.display ="none"
        lose.style.display="none"
        mySong.pause()
    }
})


function playGame(){
if(page1.style.display=="none" && page2.style.display=="none" && page3.style.display=="none" && page4.style.display=="none"){
homePage.style.display="none"
        let timer =30;
    score=0;
    lose.style.display="none";
    gameScreen.style.display="block";
    
    const timeIncrement =  setInterval(()=>{
        timer--
        dispTime.innerHTML = timer;
        
    },1000);

   const enemyAppend=setInterval(()=>{
        gameScreen.appendChild(enemy)
        const randleft=Math.floor(Math.random()*4)*80
        const randtop=Math.floor(Math.random()*4)*80
        enemy.style.left = randleft +"px";
        enemy.style.top=randtop + "px";

    },1500);
    
const checkGame=setInterval(()=>{
    if(timer<=0) {
        clearInterval(timeIncrement)
        clearInterval(enemyAppend)
        clearInterval(checkGame)
        lose.style.display="flex";
        gameScreen.style.display="none"
        homePage.style.display="none"
        gameScore.innerHTML=score
            
 
        }else{
            lose.style.display="none";
            gameScreen.style.display="block"
        } 
    },1000)
 }
}

/*function shoot(){
    const audio = new Audio()
    audio.src = "gunShot.mp3"
    audio.play()
}*/

xbtn.addEventListener('click',()=>{
  
    let audio = new Audio();
    audio.src ="gunShot.mp3";
    audio.play();
    gameScreen.appendChild(blood)
    blood.style.left = target.style.left
    blood.style.top = target.style.top
    /*shoot()*/
    
    
    if(target.style.left===enemy.style.left &&  target.style.top===enemy.style.top) {
            score = score + 2
            dispScore.innerHTML = score
            }
})



function moveUp(){
    let left= parseInt(window.getComputedStyle(target).getPropertyValue("left"));
    if(left <= 160){
        left += 80
        target.style.left = left + "px";
    }
    
}

function moveRight(){
    let top= parseInt(window.getComputedStyle(target).getPropertyValue("top"));
    if(top <= 240){
        top += 80
        target.style.top = top + "px";
    }
    
}

function moveLeft(){
    let top= parseInt(window.getComputedStyle(target).getPropertyValue("top"));
    if(top > 0){
        top -= 80
        target.style.top = top + "px";
    }
    
}

function moveDown(){
    let left= parseInt(window.getComputedStyle(target).getPropertyValue("left"));
    if(left > 0){
        left -= 80
        target.style.left = left + "px";
    }
}
