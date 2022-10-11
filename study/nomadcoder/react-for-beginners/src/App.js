import { useState } from "react";
import ToDoList from "./components/ToDoList";

function App() {
  const locallength = localStorage.length;
 //새로운 value를 update할때 쓸 변수
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState(onLoad());
  const [localKey, setLocalKey] = useState(locallength);

  // onDelete 실행 후 다시 리세팅된 toDoList를 다시 localStorage에 순서대로 세팅
  localStorage.clear();
  for (let i = 0; i < toDoList.length; i++) {
    localStorage.setItem(i, toDoList[i]);
  }

  const onChange = (event) => setToDo(event.target.value);
  
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo == "") {
      return;
    }

    setToDoList((currentArr) => [...currentArr, toDo]);

    // save localstorage
    localStorage.setItem(localKey, toDo);
    setLocalKey(localKey + 1);

    setToDo("");
  };
  
  function onLoad() {
    //localStorage에서 값 가져오기
    let localLen = localStorage.length;
    let localValArr = [];
    let localKeyArr = [];

    for (let i = 0; i < localLen; i++) {
      let key = localStorage.key(i);
      // let data = localStorage.getItem(key);
      localKeyArr.push(Number(key));
    }

    localKeyArr.sort(function (a, b) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });

    for (let i = 0; i < localKeyArr.length; i++) {
      let keyName = `${localKeyArr[i]}`;
      let data = localStorage.getItem(keyName);
      localValArr.push(data);
    }

    return localValArr;
  }

  console.log(onLoad())

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul className="list">
        {toDoList.map((toDoItem, index) => (
          <ToDoList 
          toDoItem={toDoItem}
          index={index}
          key={index}
          toDoList={toDoList}
          setToDoList={setToDoList}
          />
        ))}
      </ul>
    </div>
  );


}

export default App;