//3. json객체에서는 this는 부모를 가르킨다.
/*
function Animal(type, legs) {
    this.type = type;
    this.legs = legs;
    this.logInfo = function() {
        console.log(this === myCat);
        console.log('The ' + this.type + ' has ' + this.legs + ' legs');
    }
}
var myCat = new Animal('Cat', 4);

console.log(myCat);
*/

var myCat = {
    type: 'Cat',
    legs: 4,
    logInfo: function() {
        console.log(this === myCat); //this는 부모를 가르킨다.
        console.log('The ' + this.type + ' has ' + this.legs + ' legs');
    }
}
// 리터럴 객체로 Animal 객체를 적으시오.


// 실행결과를 적으시오. function 안에 this는 무엇을 가르키는가?
myCat.logInfo();
console.log(myCat);

// 실행결과를 적으시오. this는 무엇을 가르키는가?
setTimeout(myCat.logInfo, 1000);