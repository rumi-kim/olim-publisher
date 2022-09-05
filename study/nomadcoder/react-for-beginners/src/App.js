import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (event) => setKeyword(event.target.value);
  
  console.log('I run all the time');

  // useEffect : 코드가 딱 한번만 실행될 수 있도록 보호해준다. 
  useEffect(() => { 
    console.log("Call the API...");
  }, []);

  console.log("SEARCH FOR", keyword )

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );

}

export default App;
