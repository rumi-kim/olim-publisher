import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (event) => setKeyword(event.target.value);
  
  console.log('I run all the time'); //=>state가 변할 때마다 실행

  // useEffect : 코드가 딱 한번만 실행될 수 있도록 보호해준다. 
  useEffect(() => {  // 맨 처음 한 번만 실행.
    console.log("I run only once");
  }, []);

  // useEffect(() => { 
  //   if(keyword !== "" && keyword.length > 5){
  //     console.log("I run when 'keyword' changes", keyword )
  //   }
  // }, [keyword]); //=>keyword에 변화가 있을 경우마다 실행


  useEffect(() => { 
      console.log("I run when 'keyword' changes.")
  }, [keyword]);

  useEffect(() => {  // 맨 처음 한 번만 실행.
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => { 
    console.log("I run when 'keyword' & 'counter' changes.")
}, [keyword, counter]);




  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );

}

export default App;
