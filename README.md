# 채널톡 과제

## 요구조건들 

* :white_check_mark: react, webpack을 베이스로 사용하여 개발
* :white_check_mark: 보일러 플레이트(create-react-app 등)를 사용하지 않아야 함.
* :white_check_mark: 버튼을 누르면 각 필드별 오름차순, 내림차순 정렬이 되어야 함.
  * 코드, 수도, 이름, 대륙, 전화번호 각 필드를 선택하면 필드별 정렬되게 하였습니다.
* :white_check_mark: 검색 창이 있어 통합 검색이 되어야 함. (Case insensitive, 부분일치)
  * 나라 "이름" 으로 대/소문자 및 부분 일치 검색 가능하게 하였습니다.
* :white_check_mark: 각 나라의 데이터 Row에 삭제 버튼이 있어 누르면 삭제되어야 함.
* :white_check_mark: 나라 정보를 입력해서 Row를 추가할 수 있어야 함.
* :white_check_mark: 모든 상태(나라 목록, 정렬 상태, 검색어 등)는 데이터 관리 라이브러리(Redux, MobX 등)에 저장되어야 함.
* :white_check_mark: Network 통신은 redux middleware를 통해 되어야 함.
  * redux-thunk 미들웨어 사용하였습니다.
* :white_check_mark: 일부만 로딩 후 스크롤 아래로 갈 시 추가 로딩
  * IntersectionObserver API 사용하였습니다.
* :white_check_mark: form 라이브러리(redux-form, formik 등) 사용
  * react-hook-form 라이브러리 사용하였습니다.
* :white_check_mark: cross browsing 적용
  * IE11, 크롬, 파이어폭스, 엣지, 네이버 웨일에서 테스트하였습니다.
  * 사파리 및 오페라는 Mac이 아니라 테스트 불가한점 양해부탁드립니다.
* :white_check_mark: 검색 기능 (Rate limiting(debounce, throttle) 적용하여 타이핑 시 바로 검색)
  * debounce 적용하였습니다.

<br>

## 그 외 설명

* 나라를 추가하는 부분은, 바로 보일 수 있도록 가장 앞에 추가하였습니다.
* 검색 부분은 따로 조건이 없어 이름을 기준으로 하였습니다.
* 일정한 양만 불러오는 무한 스크롤 기능은, 데이터를 부분적으로 서버에서 불러오는 기능이 없어서 일단 다 불러와서 저장한 다음 20개씩 불러오는 방식으로 구현하였습니다.

<br>

## 실행

```bash
git clone https://github.com/baeharam/joy-work.git
cd joy-work
yarn start
```

입력한 후에 `localhost:5500` 으로 들어가면 됩니다.