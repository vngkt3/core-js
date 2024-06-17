/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자 F&&
let AandB = a && b;
console.log('AandB : ', AandB);

// 논리곱 할당 연산자 Logical And Assignment
// a &&= b

// 논리합(또는) 연산자 T||
let AorB = a || b;
console.log('AorB : ', AorB);

// 논리합 할당 연산자 logical OR Assignment
// a ||= b

// 부정 연산자
let reverseValue = !value;
console.log('reverseValue : ', reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
//let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
//let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

let userName = prompt('누구세요?').toLowerCase();

if (userName === 'cancel') {
  console.log('Canceled');
} else if (userName === 'other') {
  console.log("I don't know you");
} else if (userName === 'admin') {
  let password = prompt('password').toLowerCase();

  if (password === 'cancel') {
    console.log('Canceled');
  } else if (password === 'other') {
    console.log('Wrong password');
  } else if (password === 'themaster') {
    console.log('Welcome!');
  } else {
    console.log('인증에 실패하였습니다.');
  }
} else {
  console.log('취소되었습니다.');
}
