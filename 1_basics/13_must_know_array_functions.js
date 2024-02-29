/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push()
console.log(iveMembers.push('코드팩토리')); // 배열의 마지막에 '코드팩토리'(요소)를 추가하는 메서드
console.log(iveMembers);

console.log('---------------');
// pop()
console.log(iveMembers.pop()); // 배열의 마지막에 '코드팩토리'(요소)를 제거하는 메서드
console.log(iveMembers);

console.log('---------------');

// shift()
console.log(iveMembers.shift()); // 배열의 첫번째 '안유진'(요소)를 제거하는 메서드
console.log(iveMembers);

// unshift()
console.log(iveMembers.unshift('안유진')); // 배열의 맨 앞에 첫번째 '안유진'(요소)를 추가하는 메서드, 하나 이상 가능
console.log(iveMembers);

console.log('---------------');

console.log(iveMembers.splice(0, 3)); // 배열 자체를 수정하며(index 0 부터 3개의 인덱스를 젝), 제거된 요소들을 포함한 배열을 반환
console.log(iveMembers);

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// concat()
console.log(iveMembers.concat('코드팩토리')); // 원본 배열은 변경되지 않지만, value 추가
console.log(iveMembers);

// slice()
console.log(iveMembers.slice(0, 3)); // 원본 배열은 변경되지 않지만, 배열의 일부분을 추출하여 새로운 배열을 반환
console.log(iveMembers);

// spread operator
let iveMembers2 = [...iveMembers,];
console.log(iveMembers2);

let iveMembers3 = [iveMembers,];
console.log(iveMembers3);

console.log('---------------');
let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

// join()
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse()); // 내림차순

let numbers = [1, 9, 7, 5, 3,];
console.log(numbers);

// a, b를 비교했을 때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

// map()
console.log('---------------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if(x === '안유진') {
        return `아이브: ${x}`
    } else {
        return x;
    }
}));
console.log(iveMembers);

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0)); // 필터링하여 새로운 배열을 반환

// find()
console.log(numbers.find((x) => x % 2 === 0)); // 첫 번째로 발견된 요소를 찾아 반환

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));