/* --------- */
/* Object    */
/* --------- */

const { permission } = require('process');

/* global isObject */

console.log(isObject);

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
  uid: 'user-id-zxk!@dksldksl',
  name: 'tiger',
  email: 'seonbeom2@gmail.com',
  isSignIn: false,
  permission: 'paid',
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn); // getter
console.log((authUser.permission = 'free')); // setter, 할당연산자 뒤에 값을 줌

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser['uid']);
console.log(authUser['name']);
console.log(authUser['emain']);
console.log(authUser['isSignIn']); // getter
console.log((authUser['permission'] = 'allPass')); //setter

Object.prototype.nickName = '호랑이';

//객체 안에 키가 있는지 확인 방법

// in 문

console.log('uid' in authUser);

for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(authUser[key]);
  }
}

// 객체의 key 만을 모아서 배열을 반환하는 메서드 Object.keys()

const keyList = Object.keys(authUser);

console.log(keyList);

// 객체의 value 만을 모아서 배열을 반환하는 메서드 Object.values()

const valueList = Object.values.apply(authUser);

console.log(valueList);

function getPropertiesList(obj) {
  let result = [];

  for (let key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      result.push(obj[key]);
    }
  }

  return result;
}

getPropertiesList(authUser);

// 프로퍼티 제거(remove) or 삭제(delete)
//          비워두기        메모리 날림

function removeProperty(obj, key) {
  if (isObject(obj)) {
    obj[key] = null;
  }
}

removeProperty(authUser, 'name');

function deleteProperty(obj, key) {
  if (isObject(obj)) {
    delete obj[key];
  }
}

deleteProperty(authUser, 'name');

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name, age, phone) {
  return {
    name: name,
    age: age,
    [calculateProperty]: phone,
  };
}

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// 키 밸류가 같다면 줄여 쓸 수 있다 name : name, 원래 이렇게 써야함
const student = {
  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

isEmptyObject({}); // true

isEmptyObject(student);

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

// 순서(order)를 바꿀 수 없음 변수명은 마음대로 지을수 있음

const arr = [10, 100, 1000, 10_000];

// const [a0, a1, a2, a3] = arr;
const [a0, ...rest] = arr;

for (let [key, value] of Object.entries(authUser)) {
  console.log(key, value);
}

// const a0 = arr[0]
// const a1 = arr[1]
// const a2 = arr[2]
// const a3 = arr[3]

const [first, second] = document.querySelectorAll('span');

// const first = spanList[0];
// const second = spanList[1];

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  함정민: 95,
  지유진: 110,
  이진용: 15,
  한상학: 300,
};

// 이렇게 별칭을 지정해 사용도 할 수 있다 키에 없지만 바로 기본값 설정도 가능
const { 함정민: 함, 지유진, 이진용, 한상학, 장주원 = 500 } = salaries;

// const 이진용 = salaries.이진용;
// const 지유진 = salaries.지유진;

// console.log(salaries.함정민);

console.log(함);

function createUserObject(obj) {
  const { name: n, age: a, gender: g, job: j = '홈프로텍터' } = obj;

  return {
    name: n,
    age: a,
    gender: g,
    job: j,
  };
}

const data = {
  name: 'beom',
  age: 40,
  gender: 'male',
  job: 'developer',
};

const person = createUserObject(data);

// 배열과 쓰는 방식은 같다 차이점은 대괄호 vs 중괄호

// 배열은 순서가 중요함 객체는 아님 => 그래서 선언할때 순서를 맘대로 해도 가능 대신 키와 변수명이 일치해야 값을 뽑아줌

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

// 순서를 고려하지 않음. key와 변수명이 동일해야 함. => 변수명 o
// 기본 값 사용 가능
const salaries = {
  함정민: 95,
  지유진: 110,
  이진용: 15,
  한상학: 300,
};

const {
  함정민: 함 = 100,
  지유진: 지,
  한상학: 한,
  이진용: 리,
  장주원: 장 = 500,
} = salaries;

// const 이진용 = salaries.이진용;
// const 지유진 = salaries.지유진;

function sum(a) {
  return 1 + a;
}

sum();

function createUserObject({
  name = '철수',
  age,
  gender,
  job: j = '홈프로텍터',
} = {}) {
  // const {name,age,gender,job} = obj;

  return { name, age, gender, job: j };
}

const data = {
  name: 'beom',
  age: 40,
  gender: 'male',
  job: 'developer',
  address: '서울시 중랑구',
  tel: '010-716....',
};

const person = createUserObject(data);

const {
  userName,
  age,
  gender,
  job,
  address = '서울시 중랑구',
  tel,
} = {
  userName: 'beom',
  age: 40,
  gender: 'male',
  job: 'developer',
  address: '서울시 중랑구',
  tel: '010-716....',
};

// const {acos} = Math;

// const acos = Math.acos;

let user = { name: 'John' };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);

let user2 = { name: 'John' };

let permissions3 = { canView: true };
let permissions4 = { canEdit: true };

Object.assign({}, user2, permissions1, permissions2);
