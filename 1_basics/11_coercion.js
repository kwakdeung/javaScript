/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2); // 982
console.log('98' + '2'); // 982
console.log('98' * 2); // 196
console.log(98 * 2); // 196
console.log('98' - 2); // 96

/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof + '1', + '1');

console.log('---------------------');
/**
 * Boolean 타입으로 변환
 */
// !는 논리 부정 연산자, 피연산자를 부정함.
// !!''은 먼저 빈 문자열('')을 부정하여(true를 false로, false를 true로 바꿈) false를 얻음
// 다시 한 번 부정하여(false를 true로, true를 false로 바꿈) true를 얻음
console.log(!!'asdfsdfasdfdadsf');

console.log(!!'');

console.log(!!0);
console.log(!!'0');
console.log(!!'false');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{});
console.log(!![]);

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환하다.
 */