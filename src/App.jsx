import debug from "debug";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateHolidayForm from "./pages/CreateHolidayForm";
import HolidaysTable from "./pages/HolidaysTable";
import Login from "./pages/Login";

const log = debug("holidays:client:App");
localStorage.debug = "holidays:*";

function App() {
  const [token, setToken] = useState("");
  log("token: %o", token);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HolidaysTable />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/secret" element={<CreateHolidayForm token={token} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
