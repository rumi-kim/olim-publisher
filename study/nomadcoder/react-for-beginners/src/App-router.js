import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

// 1. 유저가 홈 화면으로 갈때 사용할 Route
// 2. /movie 로 갈때 사용할 Route

// 한번에 하나의 Route만 렌더링 하기 위해서 Routes(Switch)태그 사용 
function App() {
  return <Router>
    <Routes>
      <Route path="/movie" element={<Detail />}>
      </Route>
      <Route path="/" element={<Home />}>
      </Route>
    </Routes>
  </Router>;
}

export default App;
