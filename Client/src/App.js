import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Homepage from "./Components/login-system/login";
import Home from "./Components/Home/Home";
import Register from "./Components/login-system/register";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Homepage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
