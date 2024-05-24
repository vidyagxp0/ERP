import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./pages/Dashboard/DashBoard";
import Linechart from "./Components/Charts/Linechart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="App">
        <LoginPage />
      </div> */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="charts" element={<Linechart />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
