const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('input');
const todoList = document.getElementById('todo-list');
const TODOS_KEY = 'todos';

let toDos = [];


//save todo in localStorage function
function saveToDos(){ 
  // localStorage.setItem(TODOS_KEY, toDos ) ==> a,b,c,d ...

  // JSON.stringify() => Object / Array 등의 javascript 코드들을 string으로 변환해줌 (localStorage에는 텍스트만 저장 가능 ) ==>["1","2","3","4","5","6","7"]
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos) )
}


// delete btn function 
function deleteToDo(event){

  // 어떤 버튼을 클릭했는지 알기위해 event target property 사용
  //event.target => 클릭된 HTML node 
  const li = event.target.parentElement
  // console.log(li.id)
  li.remove();

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //클릭한 요소의 id가 아닌 아이템만 남김
  saveToDos();

}


// paint todo function 
function paintToDo(newTodo){
  const li = document.createElement('li');
  li.id = newTodo.id;

  // create text box
  const span = document.createElement('span');
  span.innerText = newTodo.text;

  // create delete btn 
  const button = document.createElement('button');
  button.innerText = "❌"
  button.addEventListener('click',deleteToDo);

  li.appendChild(span);
  li.appendChild(button);

  // paint in '.todo-list' (ul)
  todoList.appendChild(li)

}


function handleToDoSubmit(event){ //form submit event 
  event.preventDefault(); //form 의 submit event 기본 동작 막기

  const newTodo = toDoInput.value; // save new input value 

  toDoInput.value = ''; //input 초기화 

 const newTodoObj = { // 삭제시 어떤 요소를 삭제하는지 알 수 있기위해 각각 id값을 부여 
  text : newTodo,
  id:Date.now(), // Date 함수로 랜덤한 숫자 추출

 }

  toDos.push(newTodoObj); //push newTodo to array 

  paintToDo(newTodoObj); // paint newTodo 

  saveToDos(); //save newTodo in localStorage 

}

toDoForm.addEventListener('submit',handleToDoSubmit);


// 화면에 그려줄 localStorage 가져옴 
const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null){ //localStorage에 savedToDos가 있다면

  
  // string으로 저장된 키값을 살아있는 객체로 변환해주는 parse 사용
  const parsedToDos = JSON.parse(savedToDos);

  toDos = parsedToDos; // 기존에 저장된 toDos 배열을 덮어쓰지 않고 이어서 push하기 위해 update

  // parsedToDos 배열의 각 item에 대해 함수 실행 
  parsedToDos.forEach(paintToDo);

  // parsedToDos.forEach((idx, item) => console.log('this is the turn of', idx, item))

}


// filter function 은 기존의 배열을 변경하는 것이 아니라 새 배열을 만드는 것

function sexyFilter(){ // filter should return true 
  // true값이 리턴된 요소만 새 array 에 포함시킨다.

}


