import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./User/pages/Landing";
import Register from "./User/pages/Register";
import Login from "./User/pages/Login";
import Home from "./User/pages/Home";
import ToggleBar from "./Form/components/ToggleBar";
import Forms from "./Form/pages/Forms";
import EntryForm from "./Submission/pages/EntryForm";
import SubmittedPage from "./Submission/pages/SubmittedPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/home" Component={Home} />
          <Route path="/new-form" Component={ToggleBar} />
          <Route path="/view-forms" Component={Forms} />
          <Route path="/form/:formId" Component={EntryForm} />
          <Route path="/success" Component={SubmittedPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
