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

man.setType("stack", Array);
man.setStack = [];
// console.log(man)

// 문자열로 선언됨
// man.setName = 1 // 정상적으로 에러가 발생해야함

// 숫자로 선언됨
// man.setAge = "1" // 정상적으로 에러가 발생해야함

// 객체로 선언됨
// man.setType("option", {}, {fixable : true});
// man.setOption = "1";
// console.log(man.getOption);

// Man으로 선언됨
// man.setType("friend", Man);
// man.setFriend = new Man("wayne", 26);
// man.setFriend = 1; // 정상적으로 에러가 발생해야함

// 함수 정의
man.setType("methodshow", Function);
man.setShow = function(){
  console.log(this.getName, this.getAge);
}
man.show();
// man.setShow = 1

class Developer extends DynamicTypeChecker {
  constructor(experience){
    super()

    this.setType("experience", "number");
    this.setExperience = 2;
  }
}

// Developer로 선언됨
// man.setType("experience", Developer, new Developer(2));
// man.setExperience = "1"

/*
  #생각1 에 대한 테스트
  일반 대입과 TypeChecker를 사용한 성능 차이는 얼마나 심할까?
  결과적으로 써도 될 것으로 보인다. 
  대입에 필요한 시간이 절대적으로 얼마 필요하지 않기 때문에, 이 시간이 조금 더 길어졌다고 해서 큰 문제가 되지 않는 것으로 보인다.

  아니... 다시 생각해보니까 아닌것 같다.

  음... 다시 생각해보니까. 값을 대입하는 경우가 적절한 경우에는 괜찮을 거 같다.
  어차피 값을 호출할 때에는 단순히 값만 가져오고
  값을 대입할 때에만 타입을 검증하니까.
*/

// let iteratorTime = 100000;
// let test1 = {};
// console.time("일반 대입")
// for(let i = 0 ; i < iteratorTime; i++)
// test1.test = i;
// console.timeEnd("일반 대입")

// let test2 = new DynamicTypeChecker();
// console.time("대입할 때 마다, 검증")
// test2.setType("test", "number");
// for(let i = 0 ; i < iteratorTime; i++)
//   test2.setTest = i;
// console.timeEnd("대입할 때 마다, 검증");