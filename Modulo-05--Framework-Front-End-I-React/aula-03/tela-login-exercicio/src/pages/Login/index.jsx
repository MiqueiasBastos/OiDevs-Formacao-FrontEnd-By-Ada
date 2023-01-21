import "./styles.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Link from "../../components/Link";
import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";

const Login = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("Login");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [userNotFound, setUserNotFound] = useState(false);
    const [incorrectPassword, setIncorrectPassword] = useState(false);
    
    const [showError, setShowError] = useState(false);

    const [userDatabase, setUserDatabase] = useState([
        {
            username: "miqueias",
            password: "123",
        },
        {
            username: "raniel",
            password: "oidevs",
        },
    ]);

    function handleLogin() {
        let user = userDatabase.find((user) => user.username === username);

        if (!user) {
            setUserNotFound(true);
            setIncorrectPassword(true);
            setShowError(true);
            return;
        }

        if (user.password !== password) {
            setUserNotFound(false);
            setIncorrectPassword(true);
            setShowError(true);
            return;
        }
        setUserNotFound(false);
        setIncorrectPassword(false);
        setShowError(false);
        navigate("/home", {
            state: {
                users: userDatabase,
            },
        });
    }

    return (
        <div className="container">
            <div className="box-login">
                <Title text={title} />
                {showError && <ErrorMessage message="Usuário ou senha inválidos" />}
                <Input
                    label="Usuário"
                    colorLabel={userNotFound ? "#a13854" : "white"}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    label="Senha"
                    value={password}
                    colorLabel={incorrectPassword ? "#a13854" : "white"}
                    onChange={(e) => setPassword(e.target.value)}
                    hideContent
                />
                <Button title="Entrar" onClick={handleLogin} />
                <Button
                    title="Alterar Título"
                    onClick={() => setTitle("Novo Titulo")}
                    bgColor="blue"
                />
                <Link text="Esqueceu a senha?" url="https://google.com" />
            </div>
        </div>
    );
};
export default Login;
