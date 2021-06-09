/**
 *  [JavaScript] 데이터 타입
 * 
 *  구조
 * 
 *  1. 수 (Number)
 *  2. 문자열 (String)
 *  3. 불린 (Boolean)
 *  4. 기호 (Symbol)    ES6에 새롭게 추가
 *  5. 객체 (Object)
 *      5.1 함수 (Function)
 *      5.2 배열 (Array)
 *      5.3 날짜 (Date)
 *      5.4 정규식 (RegExp)
 *  6. 널 (Null)
 *  7. 정의되지 않음 (Undefined)
 */


/**
 * 수 (Number)
 */
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ   수 (Number)   ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")
console.log("");

console.log(3 /2);
// 1.5

console.log(Math.floor(3 / 2));
// 1

console.log(0.1 + 0.2);
// 0.30000000000000004 말도안돼 ㅠ

console.log(0.2 + 0.1 === 0.3);
// false

console.log((0.1 + 0.2).toFixed(1));
// 0.3

console.log(parseInt('123.45'));
// 123

console.log(parseFloat('123.45'));
// 123.45

/**
 *  문자열 (String)
 */
 console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ   문자열 (String)   ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")
 console.log("");


var str1 = '안녕하세요';
var str2 = "ba91";

var str3 = str1 + ' 저는 ' + str2 + ' 입니다';
var str4 = `${str1} 저는 ${str2} 입니다`;

console.log(str3);
console.log(str4);
console.log("str3 글자수 : " + str3.length);

/**
 *  불린 (Boolean)
 */
 console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ   불린 (Boolean))   ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")
 console.log("");

var boolTest = true;
var boolTest2 = '';
var boolTest3 = NaN;
var boolTest4 = undefined;
var boolTest5 = 234;
var boolTest6 = "isTrue?";

console.log(typeof(boolTest));
// boolean

console.log(Boolean(boolTest2));
// false

console.log(Boolean(boolTest3));
// false

console.log(Boolean(boolTest4));
// false

console.log(Boolean(boolTest5));
// true

console.log(Boolean(boolTest6));
// true

/**
 *  null & undefined
 */
 console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ   null & undefined   ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")
 console.log("");

 var undefinedTest;
 var nullTest = null;

 console.log(typeof(undefinedTest));
 // undefined

 console.log(typeof(nullTest));
 // object