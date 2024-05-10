import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Day from "./components/Day";
import FutureLog from "./components/FutureLog";
// import Login from "./components/Login"

import Todo from "./pages/TODO/index"

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/index" element={<Index />} /> */}
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/day" element={<Day />} />
        <Route path="/futureLog" element={<FutureLog />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
