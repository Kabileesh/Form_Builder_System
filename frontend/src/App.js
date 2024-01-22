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
import ResponseList from "./Submission/pages/ResponseList";
import Response from "./Submission/pages/Response";
import PrivateRoute from "./Routes/PrivateRoute";
import RouteSetup from "./Routes/RouteSetup";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/forms/*"
            element={
              <PrivateRoute>
                <RouteSetup />
              </PrivateRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="new-form" element={<ToggleBar />} />
            <Route path="view-forms" element={<Forms />} />
            <Route path="form/:formId" element={<EntryForm />} />
            <Route path="success" element={<SubmittedPage />} />
            <Route path="view-responses/:formId" element={<ResponseList />} />
            <Route path="response" element={<Response />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
