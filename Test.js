const DynamicTypeChecker = require("./DynamicTypeChecker");

class Man extends DynamicTypeChecker {
  constructor(name, age){
    //부모 클래스 호출
    super();

    //타입 정의
    this.setType("name", "string", name);
    this.setType("age", "number");

    //초기화
    // this.setName = name;
    this.setAge = age;
  }
}

let man = new Man("김은찬", 26);
console.log(man);

//기본 자료형 테스트
man.setAge = 26;
console.log(man.getAge);

man.setAge = 27;
console.log(man.getAge);

// 에러 테스트, 아래 주석 제거하면 에러를 반환해야함.
//man.setAge = "27";

man.setName = "Wayne";
console.log(man.getName);

// 에러 테스트, 아래 주석 제거하면 에러를 반환해야함.
// man.setName = 123;

//참조 자료형 테스트

//배열
man.setType("stack", Array);

man.setStack = [];
man.getStack.push(1);
man.getStack.push(2);
console.log(man.getStack);

man.setStack = [];
man.getStack.push("1");
man.getStack.push("2");
console.log(man.getStack);

// 에러 테스트, 아래 주석 제거하면 에러를 반환해야함.
// man.setStack = "1"

//리터럴 객체
man.setType("option", {}, {fixable : true});
console.log(man.getOption)
// 에러 테스트, 아래 주석 제거하면 에러를 반환해야함.
// man.setOption = "1";

//선언된 참조 자료형
man.setType("friend", Man);
man.setFriend = new Man("백경당", 26);
console.log(man.getFriend)
// 에러 테스트, 아래 주석 제거하면 에러를 반환해야함.
// man.setFriend = 1;

// 함수
man.setType("methodshow", Function);
man.setShow = function(){
  console.log(this.getName, this.getAge);
}
man.show();
// 에러 테스트, 아래 주석 제거하면 에러를 반환해야함.
// man.setShow = 1

man.setType("methodisAdult", Function, function(){
  if(this.getAge > 19)
    return true;
  return false;
});
// console.log(man);
if(man.isAdult())
  console.log("성인");
else
  console.log("미성년자");
// 에러 테스트, 아래 주석 제거하면 에러를 반환해야함.
// man.setIsAdult= "성인인가봄"


// 상속 받은 참조 자료형 Developer로 선언됨
class Developer extends Man {
  constructor(name, age, experience){
    super(name, age);
    
    this.setType("experience", "number", experience);
  }
}
let developer = new Developer("김은찬", 26, 2);
developer.setExperience = 3;
console.log(developer.getExperience)
// 에러 테스트, 아래 주석 제거하면 에러를 반환해야함.
// developer.setExperience = "3"