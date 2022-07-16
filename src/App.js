import { Routes, Route } from "react-router-dom";
import WebNav from "./components/navbar/WebNav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <>
    <WebNav />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/thanks" element={<Thanks />} />
      <Route path="/cabs" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
