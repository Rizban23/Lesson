// 
let timerValue = 0;
  let timerInterval;

  function startTimer() {
    timerInterval = setInterval(function () {
      timerValue++;
      updateTimerDisplay();
    }, 1000);
  }

  function updateTimerDisplay() {
    let minutes = Math.floor(timerValue / 60);
    let seconds = timerValue % 60;

    document.getElementById("timerValue").innerText = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

// 

let btn = document.querySelector('button')
let res = 0
btn.onclick = ()=> {
  clearInterval(timerInterval);
    res = 0;
    let test_1_1 = document.querySelector('#test_1_1').checked
    let test_1_2 = document.querySelector('#test_1_2').checked
    let test_1_3 = document.querySelector('#test_1_3').checked
    let test_1_4 = document.querySelector('#test_1_4').checked
    let ltest_1_1 = document.querySelector('#ltest_1_1')
    let ltest_1_2 = document.querySelector('#ltest_1_2')
    let ltest_1_3 = document.querySelector('#ltest_1_3')
    let ltest_1_4 = document.querySelector('#ltest_1_4')
    
    let test_2_1 = document.querySelector('#test_2_1').checked
    let test_2_2 = document.querySelector('#test_2_2').checked
    let test_2_3 = document.querySelector('#test_2_3').checked
    let test_2_4 = document.querySelector('#test_2_4').checked
    let ltest_2_1 = document.querySelector('#ltest_2_1')
    let ltest_2_2 = document.querySelector('#ltest_2_2')
    let ltest_2_3 = document.querySelector('#ltest_2_3')
    let ltest_2_4 = document.querySelector('#ltest_2_4')


    let test_3_1 = document.querySelector('#test_3_1').checked
    let test_3_2 = document.querySelector('#test_3_2').checked
    let test_3_3 = document.querySelector('#test_3_3').checked
    let test_3_4 = document.querySelector('#test_3_4').checked
    let ltest_3_1 = document.querySelector('#ltest_3_1')
    let ltest_3_2 = document.querySelector('#ltest_3_2')
    let ltest_3_3 = document.querySelector('#ltest_3_3')
    let ltest_3_4 = document.querySelector('#ltest_3_4')


    if (test_1_1) {
        ltest_1_1.style.background = 'red';
    }else {
        ltest_1_1.style.background = 'none';
    }

    if (test_1_2) {
        ltest_1_2.style.background = 'green';
        res++;
    }else {
        ltest_1_2.style.background = 'none';
    }

    if (test_1_3) {
        ltest_1_3.style.background = 'red';
    }else {
        ltest_1_3.style.background = 'none';
    }

    if (test_1_4) {
        ltest_1_4.style.background = 'red';
    }else {
        ltest_1_4.style.background = 'none';
    }


    if (test_2_1) {
        ltest_2_1.style.background = 'red';
    }else {
        ltest_2_1.style.background = 'none';
    }

    if (test_2_3) {
        ltest_2_3.style.background = 'green';
        res++;
    }else {
        ltest_2_3.style.background = 'none';
    }

    if (test_2_2) {
        ltest_2_2.style.background = 'red';
    }else {
        ltest_2_2.style.background = 'none';
    }

    if (test_2_4) {
        ltest_2_4.style.background = 'red';
    }else {
        ltest_2_4.style.background = 'none';
    }

    if (test_3_3) {
        ltest_3_3.style.background = 'red';
    }else {
        ltest_3_3.style.background = 'none';
    }

    if (test_3_1) {
        ltest_3_1.style.background = 'green';
        res++;
    }else {
        ltest_3_1.style.background = 'none';
    }

    if (test_3_2) {
        ltest_3_2.style.input = 'red';
    }else {
        ltest_3_2.style.background = 'none';
    }

    if (test_3_4) {
        ltest_3_4.style.background = 'red';
    }else {
        ltest_3_4.style.background = 'none';
    }
    document.querySelector(".res").textContent =`Жалпы 3 суроо анын ${res} туура;` ;
}
startTimer();