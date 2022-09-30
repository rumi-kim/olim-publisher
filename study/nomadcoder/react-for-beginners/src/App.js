import { useState } from "react";

function App() {
  const locallength = localStorage.length;
  const [update, setUpdate] = useState(false);
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState(onLoad());
  const [localKey, setLocalKey] = useState(locallength);
  const onChange = (event) => setToDo(event.target.value);
  const onDelete = (idx) => {
    const listLength = toDoList.length;

    localStorage.removeItem(idx);

    setToDoList([
      ...toDoList.slice(0, idx),
      ...toDoList.slice(idx + 1, listLength),
    ]);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo == "") {
      return;
    }
    // react.js는 함수를 보낼때 현재의 state를 첫번째 argument로 보낸다.=> 새로운 state를 만드는데 사용할 수 있다.
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

    if (localLen > 0) {
      for (let i = 0; i < localLen; i++) {
        let key = JSON.parse(localStorage.key(i));
        let data = localStorage.getItem(key);
        localValArr.push(data);
      }
    }

    return localValArr;
  }

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
          <li key={index}>
            {!update ? (
              <div>
                <p onClick={() => setUpdate(true)}>{toDoItem}</p>

                <button
                  onClick={() => {
                    onDelete(index);
                  }}
                >
                  ❌
                </button>
              </div>
            ) : (
              "ddd"
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
