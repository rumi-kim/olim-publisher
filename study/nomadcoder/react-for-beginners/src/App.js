import { useState } from "react";

function App() {
  // const localLeng = 
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState(onLoad());
  const [localKey, setLocalKey] = useState(0);
  const onChange = (event) => setToDo(event.target.value);
  const onDelete = (idx) => {
    const toDoListLength = toDoList.length;
    const removeItem = toDoList.at(idx);

    localStorage.removeItem(idx);

    // setToDoList([...toDoList.slice(0, idx), ...toDoList.slice(idx + 1, toDoListLength ) ]);

    // setToDoList
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo == "") {
      return;
    }

    // react.js는 함수를 보낼때 현재의 state를 첫번째 argument로 보낸다.=> 새로운 state를 만드는데 사용할 수 있다.
    setToDoList((currentArr) => [toDo, ...currentArr]);

    // save localstorage
    localStorage.setItem(localKey, toDo);
    setLocalKey(localKey + 1);

    setToDo("");
  };

  function onLoad() {
    //localStorage에서 값 가져오기
    let localLength = localStorage.length;
    console.log(localLength)
    let localValArr = [];


    if (localLength > 0){
      for (let i = 0; i < localLength; i++) {
        let key = localStorage.key(i);
        let val = localStorage.getItem(key);
        // console.log(key,val)
        localValArr.push(val)
      }
    }

    localValArr.sort(function (a, b) {
      if (a.idx > b.idx) {
        return 1; 
      }
      if (a.idx < b.idx) {
        return -1;
      }
      return 0;
    });  
    return localValArr;
  }

  // console.log(toDoList)

    console.log(localKey)
  
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
      <ul>
        {toDoList.map((toDoItem, index) => (
          <li key={index} id={index}>
            {toDoItem}
            <button
              onClick={() => {
                onDelete(index);
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
