flag = 0;
function winCheck() {
  btn1 = document.getElementById("btn1").textContent;
  btn2 = document.getElementById("btn2").textContent;
  btn3 = document.getElementById("btn3").textContent;
  btn4 = document.getElementById("btn4").textContent;
  btn5 = document.getElementById("btn5").textContent;
  btn6 = document.getElementById("btn6").textContent;
  btn7 = document.getElementById("btn7").textContent;
  btn8 = document.getElementById("btn8").textContent;
  btn9 = document.getElementById("btn9").textContent;
  let status = document.getElementById("status");
  //Player x win conditions starts

  if (
    (btn1 == "x" || btn1 == "X") &&
    (btn2 == "x" || btn2 == "X") &&
    (btn3 == "x" || btn3 == "X")
  ) {
    status.textContent = "Player X won";
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
    window.alert("Player X won");
    disableALl();
  } else if (
    (btn4 == "x" || btn4 == "X") &&
    (btn5 == "x" || btn5 == "X") &&
    (btn6 == "x" || btn6 == "X")
  ) {
    status.textContent = "Player X won";
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
    window.alert("Player X won");
    disableALl();
  } else if (
    (btn7 == "x" || btn7 == "X") &&
    (btn8 == "x" || btn8 == "X") &&
    (btn9 == "x" || btn9 == "X")
  ) {
    status.textContent = "Player X won";
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    window.alert("Player X won");
    disableALl();
  } else if (
    (btn1 == "x" || btn1 == "X") &&
    (btn5 == "x" || btn5 == "X") &&
    (btn9 == "x" || btn9 == "X")
  ) {
    status.textContent = "Player X won";
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    window.alert("Player X won");
    disableALl();
  } 
  else if (
    (btn3 == "x" || btn3 == "X") &&
    (btn5 == "x" || btn5 == "X") &&
    (btn7 == "x" || btn7 == "X")
  ) {
    
    status.textContent = "Player X won";
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
    window.alert("Player X won");
    disableALl();
  } else if (
    (btn1 == "x" || btn1 == "X") &&
    (btn4 == "x" || btn4 == "X") &&
    (btn7 == "x" || btn7 == "X")
  ) {
    status.textContent = "Player X won";
    btn2.disabled = true;
    btn3.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
    window.alert("Player X won");
    disableALl();
  } else if (
    (btn2 == "x" || btn2 == "X") &&
    (btn5 == "x" || btn5 == "X") &&
    (btn8 == "x" || btn8 == "X")
  ) {
    status.textContent = "Player X won";
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn9.disabled = true;
    window.alert("Player X won");
    disableALl();
  } else if (
    (btn3 == "x" || btn3 == "X") &&
    (btn6 == "x" || btn6 == "X") &&
    (btn9 == "x" || btn9 == "X")
  ) {
    status.textContent = "Player X won";
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    window.alert("Player X won");
    disableALl();
  }
  //Player 0 win condition starts
  else if (
    (btn1 == "o" || btn1 == "O") &&
    (btn2 == "o" || btn2 == "O") &&
    (btn3 == "o" || btn3 == "O")
  ) {
    status.textContent = "Player O won";
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
    window.alert("Player O won");
    disableALl();
  } else if (
    (btn4 == "o" || btn4 == "O") &&
    (btn5 == "o" || btn5 == "O") &&
    (btn6 == "o" || btn6 == "O")
  ) {
    status.textContent = "Player O won";
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
    window.alert("Player O won");
    disableALl();
  } else if (
    (btn7 == "o" || btn7 == "O") &&
    (btn8 == "o" || btn8 == "O") &&
    (btn9 == "o" || btn9 == "O")
  ) {
    status.textContent = "Player O won";
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    window.alert("Player O won");
    disableALl();
  } else if (
    (btn1 == "o" || btn1 == "O") &&
    (btn5 == "o" || btn5 == "O") &&
    (btn9 == "o" || btn9 == "O")
  ) {
    status.textContent = "Player O won";
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    window.alert("Player O won");
    disableALl();
  } else if (
    (btn3 == "o" || btn3 == "O") &&
    (btn5 == "o" || btn3 == "O") &&
    (btn7 == "o" || btn7 == "O")
  ) {
    status.textContent = "Player O won";
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
    window.alert("Player O won");
    disableALl();
  } else if (
    (btn1 == "o" || btn1 == "O") &&
    (btn4 == "o" || btn4 == "O") &&
    (btn7 == "o" || btn7 == "O")
  ) {
    status.textContent = "Player O won";
    btn2.disabled = true;
    btn3.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
    window.alert("Player O won");
    disableALl();
  } else if (
    (btn2 == "o" || btn2 == "O") &&
    (btn5 == "o" || btn5 == "O") &&
    (btn8 == "o" || btn8 == "O")
  ) {
    status.textContent = "Player O won";
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn9.disabled = true;
    window.alert("Player O won");
    disableALl();
  } else if (
    (btn3 == "o" || btn3 == "O") &&
    (btn6 == "o" || btn6 == "O") &&
    (btn9 == "o" || btn9 == "O")
  ) {
    status.textContent = "Player O won";
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    window.alert("Player O won");
    disableALl();
  }
  //Now lets create the tie condition
  else if (
    (btn1 == "X" || btn1 == "0") &&
    (btn2 == "X" || btn2 == "0") &&
    (btn3 == "X" || btn3 == "0") &&
    (btn4 == "X" || btn4 == "0") &&
    (btn5 == "X" || btn5 == "0") &&
    (btn6 == "X" || btn6 == "0") &&
    (btn7 == "X" || btn7 == "0") &&
    (btn8 == "X" || btn8 == "0") &&
    (btn9 == "X" || btn9 == "0")
  ) {
    status.textContent = "Match Tie";
    window.alert("Match Tie");
    disableALl();
  } else {
    if (flag == 1) {
      status.textContent = "Player X turn";
    } else {
      status.textContent = "Player O turn";
    }
  }
}
function reset() {
  location.reload();
  btn1 = document.getElementById("btn1").textContent;

  document.getElementById("btn2").textContent = "";
  document.getElementById("btn3").textContent = "";
  document.getElementById("btn4").textContent = "";
  document.getElementById("btn5").textContent = "";
  document.getElementById("btn6").textContent = "";
  document.getElementById("btn7").textContent = "";
  document.getElementById("btn8").textContent = "";
  document.getElementById("btn9").textContent = "";
}

function flag1() {
  if (flag == 1) {
    document.getElementById("btn1").textContent = "X";
    document.getElementById("btn1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("btn1").textContent = "O";
    document.getElementById("btn1").disabled = true;
    flag = 1;
  }
}
function flag2() {
  if (flag == 1) {
    document.getElementById("btn2").textContent = "X";
    document.getElementById("btn2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("btn2").textContent = "O";
    document.getElementById("btn2").disabled = true;
    flag = 1;
  }
}
function flag3() {
  if (flag == 1) {
    document.getElementById("btn3").textContent = "X";
    document.getElementById("btn3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("btn3").textContent = "O";
    document.getElementById("btn3").disabled = true;
    flag = 1;
  }
}
function flag4() {
  if (flag == 1) {
    document.getElementById("btn4").textContent = "X";
    document.getElementById("btn4").disabled = true;
    flag = 0;
  } else {
    document.getElementById("btn4").textContent = "O";
    document.getElementById("btn4").disabled = true;
    flag = 1;
  }
}
function flag5() {
  if (flag == 1) {
    document.getElementById("btn5").textContent = "X";
    document.getElementById("btn5").disabled = true;
    flag = 0;
  } else {
    document.getElementById("btn5").textContent = "O";
    document.getElementById("btn5").disabled = true;
    flag = 1;
  }
}
function flag6() {
  if (flag == 1) {
    document.getElementById("btn6").textContent = "X";
    document.getElementById("btn6").disabled = true;
    flag = 0;
  } else {
    document.getElementById("btn6").textContent = "O";
    document.getElementById("btn6").disabled = true;
    flag = 1;
  }
}
function flag7() {
  if (flag == 1) {
    document.getElementById("btn7").textContent = "X";
    document.getElementById("btn7").disabled = true;
    flag = 0;
  } else {
    document.getElementById("btn7").textContent = "O";
    document.getElementById("btn7").disabled = true;
    flag = 1;
  }
}
function flag8() {
  if (flag == 1) {
    document.getElementById("btn8").textContent = "X";
    document.getElementById("btn8").disabled = true;
    flag = 0;
  } else {
    document.getElementById("btn8").textContent = "O";
    document.getElementById("btn8").disabled = true;
    flag = 1;
  }
}
function flag9() {
  if (flag == 1) {
    document.getElementById("btn9").textContent = "X";
    document.getElementById("btn9").disabled = true;
    flag = 0;
  } else {
    document.getElementById("btn9").textContent = "O";
    document.getElementById("btn9").disabled = true;
    flag = 1;
  }
}
let disableALl = () => {
  document.getElementById("btn1").disabled = true;
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn3").disabled = true;
  document.getElementById("btn4").disabled = true;
  document.getElementById("btn5").disabled = true;
  document.getElementById("btn6").disabled = true;
  document.getElementById("btn7").disabled = true;
  document.getElementById("btn8").disabled = true;
  document.getElementById("btn9").disabled = true;
};
