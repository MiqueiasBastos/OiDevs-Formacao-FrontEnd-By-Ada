import { useState } from "react";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

function App() {
    const [currentPage, setCurrentPage] = useState("login");

    return (
        <>
            {currentPage == "login" && (
                <Login
                    onLogin={() => setCurrentPage("home")}
                    onSignUpPageClick={() => setCurrentPage("signup")}
                />
            )}
            {currentPage == "home" && (
                <Home onLogout={() => setCurrentPage("login")} />
            )}
            {currentPage == "signup" && (
                <SignUp onLoginPageClick={() => setCurrentPage("login")} />
            )}
        </>
    );
}

export default App;
