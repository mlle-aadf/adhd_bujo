import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Day from "./components/Day";
import FutureLog from "./components/FutureLog";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/day" element={<Day />} />
        <Route path="/futureLog" element={<FutureLog />} />
      </Routes>
    </Router>
  );
}

export default App;
