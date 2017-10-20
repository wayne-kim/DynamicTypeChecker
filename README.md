# DynamicTypeChecker

동적 타입 검증 클래스

## 사용법
1. DynamicTypeChecker 클래스를 상속한다.
2. setType 메소드를 사용한다.

### setType(속성이름, 속성타입[, 데이터])
* 속성이름 : string
  * 속성이름이 "method"로 시작하면, 메소드 정의로 취급합니다.
    * 타입 재정의는 setToString, 호출은 toString();
  * 이외의 속성이름은 setter/getter 패턴으로 정의됩니다.
* 속성타입
  * 기본타입의 경우 : typeof 연산자가 제공하는 문자열 형태와 동일하게 작성
  * 참조타입의 경우 : 클래스명, 모듈명 또는 {}
* 데이터 : 옵션
  * 타입 선언할 때, 값을 대입하려면 입력합니다.


테스트 내용은 Test.js 파일 참조