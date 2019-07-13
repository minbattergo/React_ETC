/*let circleArea = function(pi, r) {
    let area = pi * r * r;
    return area;
};
*/
// 익명함수를 애로우펑션으로 변경가능
// function을 없애고 입력과 출력사이 =>
// 문장이 한줄일때는 중괄호와 retrun문 생략
// json객체를 리턴하려면 ()로 감싼다.
let circleArea = (pi, r) => pi * r * r;


// 위는 함수 표현식이다. 익명함수 부분을 애로우 펑션으로 바꾸시오

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"

/*
let res = a => b => a + b;
*/

