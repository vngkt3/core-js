/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;

console.log(typeof String(YEAR)); //명시적 형변환
console.log(typeof (YEAR + '')); //암시적 형변환

// undefined, null
let days = null;
console.log(days + '');

let friends = undefined;
console.log(friends + '');

// boolean

let isClicked = true;
console.log(String(isClicked));
/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined => NAN

let friend;
console.log(Number(friend));

// null => 0

let money = null;
console.log(Number(money));

// boolean

let isMarried = true;
console.log(Number(isMarried));

// string

let num = '100';
console.log(Number(num));
console.log(num * 1);
console.log(num / 1);
console.log(+num);

// numeric string

const width = '120.5px';
console.log(parseInt(width, 10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend));
console.log(Boolean(0));
console.log(Boolean(friend));
console.log(Boolean(friend));

// 이건 회고팀에 다시 질문하기
const 배열에한개만 = new Array(2);
const 배열에한개만a = [10, 100, 1000];
console.log('배열에한개만[0] : ' + 배열에한개만[0]); //이거 배열에 값을 한개만 넣은건데 왜 결과값은 2가 아니라 undefined 가 나오는거지..?

const 배열에여러개 = new Array(2, 22);
const 배열에여러개a = [10, 100, 1000];
console.log('배열에여러개[0] : ' + 배열에여러개[0]); //이거는 정상적으로 나온다!
//Array(2,22) 는 결국 Array=[2,22]로 초기화 되기 떄문에 값이 정상적으로 나옴 근데 Array(2)는 그냥 공간이 두개인 배열 [ , ]만 만듦
