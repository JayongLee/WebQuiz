# WebQuiz
Q. 아래 동작을 구현하려고 함 (그림 참고). 이에 대한 소스 코드를 작성하시오.

① 사용자가 웹 브라우저에서 INU 버튼을 누르면 (이벤트), 웹 브라우저는 JSON-SERVER 에게 데이터를 요청
 요청한 자원의 이름은 web이라 가정. 해당 JSON 객체를 [{ class: “web” }] 이라 가정
 fetch API 활용

② 저장된 데이터를 웹 브라우저의 localStorage에 저장

③ 저장이 완료된 이후 데이터를 화면에 출력 (출력 형태는 관계없음)

- React 사용 없이 JS로 구현하는 경우) html 파일 (body 부분)과 js 파일(html에서 script로 포함)을 각각 구현할 것
- React 라이브러리 사용하는 경우) App 컴포넌트부터 구현할 것

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <React.StrictMode>
 <App />
 </React.StrictMode>
);