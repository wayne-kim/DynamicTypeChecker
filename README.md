# DynamicTypeChecker

동적 타입 검증 클래스

## 사용법
1. DynamicTypeChecker 클래스를 상속한다.
2. setType 메소드를 사용한다.

### setType(속성이름, 속성타입[, 데이터])
* 속성이름 : string
* 속성타입
  * 기본타입의 경우 : typeof 연산자가 제공하는 문자열 형태와 동일하게 작성
  * 참조타입의 경우 : 클래스명, 모듈명 또는 {}
* 데이터 : 옵션

자세한 사용법은 test.js 참조