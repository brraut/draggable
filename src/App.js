import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Modal from "./Modal";
import ModalPage from "./ModalPage";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/modalPage" element={<ModalPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
