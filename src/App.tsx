import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/click" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
