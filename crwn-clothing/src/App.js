import Home from "./routes/home/home.componenet";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}/>
    </Routes>
  );
};

export default App;
