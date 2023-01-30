import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Subtitle from "../../components/Subtitle";
import { useEffect } from "react";
import { useState } from "react";
import Title from "../../components/Title";

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [startSessionDate, setStartSessionDate] = useState(null);
    const [contador, setContador] = useState(0);
    const [colorButton, setColorButton] = useState("#8da8cc");
    const [image, setImage] = useState(null);

    useEffect(() => {
        const dateStart = Date.now();
        localStorage.setItem("startSession", dateStart);
        setStartSessionDate(dateStart);

        fetch(
            `https://source.unsplash.com/collection/928423/480x480/?sig=${Date.now()}`
        )
            .then((response) => response.blob())
            .then((image) => setImage(URL.createObjectURL(image)));

        return () => {
            const startSession = localStorage.getItem("startSession");

            if (startSession) {
                localStorage.removeItem("startSession");
            }
        };
    }, []);

    useEffect(() => {
        let color;
        if (contador % 2 === 0) {
            color = "#1d8029";
        } else {
            color = "#1f68b5";
        }
        setColorButton(color);
    }, [contador]);

    const { users } = location.state;
    return (
        <div className="container">
            <div className="box-home">
                <Title text="Página Inicial" />
                {startSessionDate &&
                    `Início da Sessão: ${new Date(
                        startSessionDate
                    ).toLocaleString("pt-BR")}`}

                    {image ? (
                        <img src={image} alt="" style={{
                            marginTop: 10
                        }} />
                    ) : (
                        <p>Carregando imagem...</p>
                    )}
                <Subtitle text="Lista de Usuários" />
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                </ul>
                <Button title="Sair" onClick={() => navigate("/")} />

                <Button
                    title={`Cliques: ${contador}`}
                    onClick={() => setContador(contador + 1)}
                    bgColor={colorButton}
                />
            </div>
        </div>
    );
};

export default Home;
