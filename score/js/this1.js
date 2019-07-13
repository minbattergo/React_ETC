//this : global this
function person() {
    this.arms = 2;
    this.legs = 2;
}
//this의 3가지 범위
// 자기자신을 가르키는 this, json객체에서 부모를 가르키는 this, global this

// arms의 출력 결과는 무엇인가?
// console.log(arms);
// Person() 실행결과는 무엇인가? 그 이유는?
console.log(person());

// arms의 출력 결과는 무엇인가?  여기서 사용된 this는 무엇인가?
console.log(arms);