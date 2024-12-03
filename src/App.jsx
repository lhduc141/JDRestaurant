import { Route, Routes } from "react-router-dom";
import "./App.css";
import UMainPage from "./routes/UMainPage/UMainPage";

function App() {
  return (
    <Routes>
      <Route index path="/auth" element={<UMainPage />} />
    </Routes>
  );
}

export default App;
