import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

// Pages
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

export const Routes = () => {
    const context = useContext(GlobalContext);
    const { currentPage } = context.state;

    return (
        <>
            {currentPage == "login" && <Login />}
            {currentPage == "home" && <Home />}
            {currentPage == "signup" && <SignUp />}
        </>
    );
};
