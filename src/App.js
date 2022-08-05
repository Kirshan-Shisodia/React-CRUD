import NavBar from "./Components/Navbar";
import AddUser from "./Components/AddUser";
import AllUsers from "./Components/AllUsers";
import NotFound from "./Components/NotFound";
import EditUser from "./Components/EditUser";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      < NavBar />
      <Routes>
        <Route exact path="/" element={< AllUsers />} ></Route>
        <Route exact path="/addUser" element={< AddUser />}></Route>
        <Route element={< NotFound />}></Route>
        <Route exact path="/edit/:id" element={< EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
