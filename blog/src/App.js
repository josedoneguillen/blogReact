import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompShowBlogs from "./blog/ShowBlogs.js";
import CompCreateBlog from "./blog/CreateBlog.js";
import CompEditBlog from "./blog/EditBlog.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompShowBlogs />}></Route>
          <Route path="/create" element={<CompCreateBlog />}></Route>
          <Route path="/edit/:id" element={<CompEditBlog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
