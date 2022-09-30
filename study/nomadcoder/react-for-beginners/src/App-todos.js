import { useState } from "react";

function App() {
  
  const onLoad = () => {
    
    let localStorageLength = localStorage.length;
    if(localStorageLength > 0){
      for(let i=0; i<localStorageLength; i++){
        let localKey = localStorage.key(i);
        let localVal = localStorage.getItem(localKey);
        // console.log(localKey, localVal);
      }
    }


    let savedToDos = [];

    for(let i=0; i<localStorage.length; i++){
      let key = localStorage.key(i);
      let keyVal = localStorage.getItem(key);

      savedToDos.push(keyVal);
    }
    // console.log(savedToDos)
    return savedToDos;
  }


  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState(onLoad()); // ==> Array
  const [keyNumber, setKeyNumber] = useState(0);
  // console.log(toDos)

  // console.log(keyNumber)
  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return false;
    }

    //현재의 toDos를 받아와서 새로운 toDos Array를 반환
    setToDos((currentArray) => [toDo, ...currentArray]); 


    // save localstorage
    localStorage.setItem(keyNumber, toDo);
    setKeyNumber(keyNumber + 1);


    //init input value
    setToDo("");

  };

  const onDelete = (e) => {
    console.log(e.target)
  }

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
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
        {toDos.map((item, idx) => (
          <li key={idx} id={idx}>{item} <button onClick={onDelete}>❌</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
