import { ContextProvider } from "./context/GlobalContext";
import { Routes } from "./Routes";

function App() {
    return (
        <ContextProvider>
            <Routes />
        </ContextProvider>
    );
}

export default App;
