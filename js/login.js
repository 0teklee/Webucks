const inputCheck = document.getElementsByClassName("Input");
const loginChange = document.getElementsByClassName("loginButton");
const loginLink = document.getElementsByTagName("a")[0];
// const emailRegex = 이메일 형식 정규식
//   /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

// 로그인 체크
function loginChecker() {
  if (
    inputCheck[0].value !== "" &&
    inputCheck[0].value.includes("@") &&
    // (inputCheck[0].value.match(emailRegex) 이메일 형식 검사
    inputCheck[1].value !== "" &&
    8 <= inputCheck[1].value.length
  ) {
    loginChange[0].style = "background:#378bcc";
    loginLink.href = "list.html";
    return;
  }
  loginChange[0].style = "background:#add3eb";
  loginLink.removeAttribute("href");
  loginLink.removeAttribute("style");
}

//id, pw input에 이벤트 리스너, 로그인 체크 콜백 함수
inputCheck[0].addEventListener("keyup", loginChecker);
inputCheck[1].addEventListener("keyup", loginChecker);
document.body.addEventListener("keypress", function (e) {
  if (loginLink.href !== "") {
    if (e.key === "Enter") {
      window.open("list.html");
    }
  }
});

// //조건 완료시 보더 변경
// function idChecker () {
//   if( 아이디 조건이 이메일 형식인가 ){

//   }
// }
// function pwChecker () {
//   if () {

//   }
// }
