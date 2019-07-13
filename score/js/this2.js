//2. 생성자 함수에서는 this가 자기자신을 가르키는 this
// 자기자신을 가르키는 this가 내부적으로 생성되고, this={}
// 만일 json객체가 리턴되지 않으면 this가 리턴된다.
function Person() { // 대문자이면 생성자를 써서 json 객체를 쓰겠다는 암시
    this.arms = 2;
    this.legs = 2;
    //return 1, return {} 두가지의 차이점이 중요
}

// 자바스크립트에서 객체를 생성하는 2가지 방법은 무엇인가? 아래는 어떤 방법인가?
var person = new Person();
// 실행 결과는 무엇인가? 실행결과에 대해서 설명하시오.
console.log(person);
// literal 객체로  person 객체를 생성하시오.

// 실행 결과는 무엇인가? 여기서 사용된 this는 무엇인가?
console.log(arms);
// 만일 this.arms, this.legs가 없다면 new Person()의 결과는 무엇인가?