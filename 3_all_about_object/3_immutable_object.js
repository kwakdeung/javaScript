/**
 * Immutable Object
 */
const yuJin = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;   
    },
};

console.log(yuJin);

/**
 * Extensible: 확장 가능한지 여부를 확인
 */
console.log(Object.isExtensible(yuJin));

yuJin['position'] = 'vocal';

console.log(yuJin);

Object.preventExtensions(yuJin); // 확장 안되게 보호

console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브';
console.log(yuJin);

delete yuJin['position'];
console.log(yuJin);

/**
 * Seal: 봉인 - 값을 추가, 삭제가 안됨.(writable: false, configurable: false)
 */
const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;   
    },
};
console.log(yuJin2);

console.log(Object.isSealed(yuJin2));

Object.seal(yuJin2);

console.log(Object.isSealed(yuJin2));

yuJin2['groupName'] = '아이브'; // 추가 안됨.
console.log(yuJin2);

delete yuJin2['name']; // 삭제 안됨.
console.log(yuJin2);

Object.defineProperty(yuJin2, 'name', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

/**
 * Freezed: Immutable Object에서 가장 높은 등급
 * Extensible + Seal + writable: false
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;   
    },
};
console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3['groupName'] = '아이브';
console.log(yuJin3);

delete yuJin3['name'];
console.log(yuJin3);

// Object.defineProperty(yuJin3, 'name', {
//     value: '코드팩토리',
// });
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));

const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung']));