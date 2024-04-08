import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Homepage from "./Components/login-system/login";
import Home from "./Components/Home/Home";
import Register from "./Components/login-system/register";
import  Notifications  from "./Components/Notifications/Notifications";
import Messenger from "./Components/messenger/Messenger";
import SearchBar from "./Components/Search/SearchBar";
import PeopleSearch from "./Components/peopleSearch/PeopleSearch";
import PostsCountrySearch from "./Components/postsCountrySearch/PostsCountrySearch";



function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/Notifications" element={<Notifications />}></Route>
          <Route path="/messenger" element={<Messenger />}></Route>
          <Route path="/Search" element={<SearchBar />}></Route>
          <Route path="/postsCountrySearch" element={<PostsCountrySearch />}></Route>
          <Route path="/peopleSearch" element={<PeopleSearch />}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
