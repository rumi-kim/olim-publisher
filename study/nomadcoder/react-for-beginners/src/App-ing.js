import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [localKey, setLocalKey] = useState(0);

  const onChange = (event) => setToDo(event.target.value);
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
            {toDoItem} <button>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
