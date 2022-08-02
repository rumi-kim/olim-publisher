
const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// login form submit function
function onLoginSubmit(event){ 
  event.preventDefault(); 

  // display none form when login submited
  loginForm.classList.add(HIDDEN_CLASSNAME);

  // save username value
  const username = loginInput.value;

  // save username to localStorage 
  localStorage.setItem(USERNAME_KEY,username);

  paintGreetings();
}


function paintGreetings(){

  // get username frome localStorage
  const username = localStorage.getItem(USERNAME_KEY); 

  greeting.innerText = `Hello ${username}`;

  // show greeting text
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

// check if username 
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){ // 저장된 username이 없을 경우
  loginForm.classList.remove(HIDDEN_CLASSNAME); //입력 폼 노출 
  loginForm.addEventListener('submit',onLoginSubmit) //입력 후 폼 제출시 함수 실행
}else{ //저장된 username이 존재할 경우 greeting text 노출
  paintGreetings();
}