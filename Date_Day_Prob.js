const readLine = require("readline");
const prompt = require('prompt-sync')();
let Y = 2023;
let M = 1;
let Day = 1;

function check(date) {
  let extra = 0;
  let y = 1000 * (date[0] - '0') + 100 * (date[1] - '0') + 10 * (date[2] - '0') + (date[3] - '0');
  let m = 10 * (date[5] - '0') + (date[6] - '0');
  let day = 10 * (date[8] - '0') + (date[9] - '0');
  let cnt = 0;

  if (y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)) {
    if (m >= 1) {
      cnt = 366 - day;
    }
    if (m >= 2) {
      cnt -= 31;
    }
    if (m >= 3) {
      cnt -= 29;
    }
    if (m >= 4) {
      cnt -= 31;
    }
    if (m >= 5) {
      cnt -= 30;
    }
    if (m >= 6) {
      cnt -= 31;
    }
    if (m >= 7) {
      cnt -= 30;
    }
    if (m >= 8) {
      cnt -= 31;
    }
    if (m >= 9) {
      cnt -= 31;
    }
    if (m >= 10) {
      cnt -= 30;
    }
    if (m >= 11) {
      cnt -= 31;
    }
    if (m >= 12) {
      cnt -= 30;
    }
  } else {
    if (m >= 1) {
      cnt = 365 - day;
    }
    if (m >= 2) {
      cnt -= 31;
    }
    if (m >= 3) {
      cnt -= 28;
    }
    if (m >= 4) {
      cnt -= 31;
    }
    if (m >= 5) {
      cnt -= 30;
    }
    if (m >= 6) {
      cnt -= 31;
    }
    if (m >= 7) {
      cnt -= 30;
    }
    if (m >= 8) {
      cnt -= 31;
    }
    if (m >= 9) {
      cnt -= 31;
    }
    if (m >= 10) {
      cnt -= 30;
    }
    if (m >= 11) {
      cnt -= 31;
    }
    if (m >= 12) {
      cnt -= 30;
    }
  }

  extra = -(cnt) % 7;
  y++;

  if (y <= Y) {
    for (let j = y; j < Y; j++) {
      if (j % 400 === 0 || (j % 4 === 0 && j % 100 !== 0)) {
        extra--;
      }
      extra--;
    }
    extra--;
  } else {
    for (let j = Y; j < y; j++) {
      if (j % 400 === 0 || (j % 4 === 0 && j % 100 !== 0)) {
        extra++;
      }
      extra++;
    }
    extra--;
  }

  return ((extra % 7) + 7) % 7;
}


function solution(D) {
    let A = [
        {first: "Mon", second: 0},
        {first: "Tue", second: 0},
        {first: "Wed", second: 0},
        {first: "Thu", second: 0},
        {first: "Fri", second: 0},
        {first: "Sat", second: 0},
        {first: "Sun", second: 0}
    ];
    let m = new Map();
    for (let i = 0; i < D.length; i++) {
        let l = check(D[i].first);
        console.log(l);
        if (l !== -1) {
            m.set(l, (m.get(l) || 0) + 1);
            A[l].second += D[i].second;
        }
    }

    for(let i=0;i<7;i++){
        if(m.get(i)===0){
            A[i].second= (A[(i+1)%7].second + A[(i+6)%7].second)/2;
        }
    }
    return A;
}

function main() {
    let t = prompt();
    while (t--) {
        let n = prompt();
        let D = [];
        for (let i = 0; i < n; i++) {
            let input = prompt().split(' ');
            D.push({first: input[0], second: Number(input[1])});
        }
        let Ans = solution(D);
        for(let i=0;i<7;i++){
            console.log(Ans[i].first + ":" + Ans[i].second + " ");
        }
        console.log();
    }
}

main()