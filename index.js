//全体をリロードしてリセット
const btnreset = document.querySelector(".res")
btnreset.addEventListener("click", () => {
  if (confirm("ゲームをやめますか？")) {
    location.reload();
  }
});
//名前Aを確定
const addA = document.querySelector(".addA")
const playerA = document.querySelector(".playerA")
let inputA = document.querySelector(".inputA")
const maxLen = 10;
inputA.addEventListener('input', () => {
  let val = inputA.value;
  if (val.length > maxLen) {
    inputA.value = val.slice(0, maxLen);
  }
});

function styleA() {
    addA.style.display = "none"
    playerA.textContent = currentA
}
addA.addEventListener("click", () => {
    currentA = inputA.value
    //ここで名前がないと入力前に返す
    if (currentA) {
        styleA()
    }
})
inputA.addEventListener("keydown", (e) => {
    console.log(e.key);
    currentA = inputA.value
    if (e.key == "Enter") {
        if (currentA) {
            styleA()
        }

    }
})
//名前Bを確定
const addB = document.querySelector(".addB")
const playerB = document.querySelector(".playerB")
const inputB = document.querySelector(".inputB")
let currentB = inputB.value
inputB.addEventListener('input', () => {
  let val = inputB.value;
  if (val.length > maxLen) {
    inputB.value = val.slice(0, maxLen);
  }
});
function styleB() {
    addB.style.display = "none"
    playerB.textContent = currentB
}
addB.addEventListener("click", () => {
    currentB = inputB.value
    //ここで名前がないと入力前に返す
    if (currentB) {
        styleB()
    }
})
inputB.addEventListener("keydown", (e) => {
    currentB = inputB.value
    if (e.key == "Enter") {
        if (currentB) {
            styleB()
        }

    }
})
//Aの+と-を押すと数値が変わる
const plusA = document.querySelector('.plusA')
const minusA = document.querySelector(".minusA")
const scorA = document.querySelector(".pointA")
let A = 0
plusA.addEventListener("click", () => {
    A += 1
    scorA.textContent = `${A}点`
})
minusA.addEventListener("click", () => {
    //if文で数値がマイナスにならないように条件分岐
    if (A >= 1) {
        A -= 1
        scorA.textContent = `${A}点`
    }
})

//Bの+と-を押すと数値が変わる
const plusB = document.querySelector('.plusB')
const minusB = document.querySelector(".minusB")
const scorB = document.querySelector(".pointB")
let B = 0
plusB.addEventListener("click", () => {
    B += 1
    scorB.textContent = `${B}点`
})
minusB.addEventListener("click", () => {
    //if文で数値がマイナスにならないように条件分岐
    if (B >= 1) {
        B -= 1
        scorB.textContent = `${B}点`
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const timeDisplay = document.querySelector('.time');
    const startStopBtn = document.querySelector('.playb');
    const resetBtn = document.querySelectorAll('.playb')[1];
    const result=document.querySelector(".endres")
    let timer = null;
    //             ↓この値が分を管理
    let timeLeft = 5 * 60;

    function updateDisplay() {
        const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
        const seconds = String(timeLeft % 60).padStart(2, '0');
        timeDisplay.textContent = `${minutes}:${seconds}`;
    }

    function startTimer() {
        if (!timer && timeLeft > 0) {
            timer = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateDisplay();
                } else {
                    clearInterval(timer);
                    timer = null;
                    const sound=document.querySelector(".sound")
                    sound.play()
                    startStopBtn.textContent = 'スタート';
                    if(A>B){
                        result.textContent=`${currentA}の勝ち`
                    }
                    if(A<B){
                        result.textContent=`${currentB}の勝ち`
                    }
                    if(A==B){
                        result.textContent="引き分け"
                    }
                    document.querySelector(".end-screen").style.display = 'flex';
                }

            }, 1000);
            startStopBtn.textContent = 'ストップ';
        }
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
            startStopBtn.textContent = 'スタート';
        }
    }

    startStopBtn.addEventListener('click', () => {
        if (timer) {
            stopTimer();
        } else {
            startTimer();
        }
    });

    resetBtn.addEventListener('click', () => {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        //         ↓ここで値が分を管理
        timeLeft = 5 * 60;
        updateDisplay();
        startStopBtn.textContent = 'スタート';
    });

    document.querySelector('.end-screen').style.display = 'none';


    updateDisplay();
});

const resultres=document.querySelector(".resultres").addEventListener("click",()=>{
        location.reload()
})