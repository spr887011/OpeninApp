import logo from "./logo.svg";
import "./App.css";
import SignIn from "./Pages/Dashboard/signin/signin";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard"
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
