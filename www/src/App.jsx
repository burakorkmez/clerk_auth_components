import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ComponentPage from "./pages/ComponentPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/component/:id" element={<ComponentPage />} />
    </Routes>
  );
}

export default App;
