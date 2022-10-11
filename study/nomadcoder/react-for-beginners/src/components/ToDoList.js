import { useState } from "react";

function ToDoList({toDoItem,index,toDoList,setToDoList}) {

  const [update, setUpdate] = useState(false);
  const [updateVal, setUpdateVal] = useState("");

  const onEditVal = (e) => setUpdateVal(e.target.value);

  const onUpdate = (idx) => {
    let listLength = toDoList.length;

    if (updateVal !== "") {
      const newItem = updateVal;
      localStorage.setItem(`${idx}`, newItem); // 새로운 value값으로 다시 세팅

      setToDoList([
        ...toDoList.slice(0, idx), newItem,
        ...toDoList.slice(idx + 1, listLength),
      ]);
    }

    setUpdateVal(""); //초기화


  };

  const onDelete = (idx) => {
    const listLength = toDoList.length;
    localStorage.removeItem(idx);
    setToDoList([
      ...toDoList.slice(0, idx),
      ...toDoList.slice(idx + 1, listLength),
    ]);
  };

  return (
    <li key={index} id={index}>
      {!update ? (
        <div>
          <span onClick={() => setUpdate(true)}>{toDoItem}</span>
          <button
            onClick={() => {
              onDelete(index);
            }}
          >
            delete
          </button>
        </div>
      ) : (
        <div>
          <input
            defaultValue={updateVal == "" ? toDoItem : updateVal}
            onChange={onEditVal}
          ></input>
          <button
            onClick={() => {
              onUpdate(index);
              setUpdate(false)
            }}
          >
            update
          </button>
          <button>cancel</button>
        </div>
      )}
    </li>
  );
}

export default ToDoList;
