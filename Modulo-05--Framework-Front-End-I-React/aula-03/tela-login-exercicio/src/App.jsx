import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
    return (
        // Build <Router basename="/OiDevs-Formacao-FrontEnd-By-Ada/Modulo-05--Framework-Front-End-I-React/aula-03/tela-login-exercicio/build/">
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
