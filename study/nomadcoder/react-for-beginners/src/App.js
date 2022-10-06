import { useState } from "react";
// import toDoItem from "c:/users/ahreu/downloads/todolist(bread)/src/components/todoitem";

function App() {
  const locallength = localStorage.length;
  const [update, setUpdate] = useState(false);
  const [updateVal, setUpdateVal] = useState("");
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

    setToDoList((currentArr) => [...currentArr, toDo]);

    // save localstorage
    localStorage.setItem(localKey, toDo);
    setLocalKey(localKey + 1);

    setToDo("");
  };

  const onEditVal = (e) => onUpdate(e.target.value);

  const onUpdate = (e) => {
    console.log(e)
  }

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
                  del
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
