import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Login from "./routes/Auth/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
}

export default App;
