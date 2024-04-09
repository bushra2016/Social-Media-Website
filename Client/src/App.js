import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Homepage from "./Components/login-system/login";
import Home from "./Components/Home/Home";
import Register from "./Components/login-system/register";
import  Notifications  from "./Components/Notifications/Notifications";
import PersonalProfile from "./Components/PersonalProfile/PersonalProfile"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/Notifications" element={<Notifications />}></Route>
          <Route path="/PersonalProfile" element={<PersonalProfile />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
