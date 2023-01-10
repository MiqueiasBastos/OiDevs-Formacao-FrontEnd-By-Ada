import { ReactElement, useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { CounterDisplay } from "./components/CounterDisplay";

function App(): ReactElement {
    const [counter, setCounter] = useState<number>(0);

    useEffect(changeBackgroundColor, [counter]);

    function handleIncrementButtonClick(): void {
        setCounter(counter + 1);
    }
    function handleDecrementButtonClick(): void {
        setCounter(counter - 1);
    }
    function HandleClearCounterClick(): void {
        setCounter(0);
    }

    function changeBackgroundColor(): void {
        let color: "#8da8cc" | "#a62e2e" | "#32a852";

        if (counter < 0) {
            color = "#a62e2e";
        } else if (counter > 0) {
            color = "#32a852";
        } else {
            color = "#8da8cc";
        }

        document.body.style.backgroundColor = color;
    }

    return (
        <main>
            <header>
                <h1>Meu Contador</h1>
            </header>
            <div className="counter-area">
                <Button title="-" onClick={handleDecrementButtonClick} />
                <CounterDisplay value={counter} />
                <Button title="+" onClick={handleIncrementButtonClick} />
            </div>
            <Button title="Zerar Contador" onClick={HandleClearCounterClick} />
            <footer>Desenvolvido com ♥ por Miquéias Bastos</footer>
        </main>
    );
}

export default App;
