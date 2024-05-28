import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Day from "./pages/Day";

import Month from "./pages/MONTH";
import Year from "./pages/YEAR";
import TodoPage from "./pages/TODO/index"

import Event from "./pages/EVENTS/Event";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day" element={<Day />} />
        <Route path="/month" element={<Month />} />
        <Route path="/year" element={<Year />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/events/:eventID" element={<Event />} />
        {/* <Route path="/notes" element={<Notes />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
