import { useNavigate } from "react-router-dom";

import "./styles.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Link from "../../components/Link";
import { useState } from "react";
import Subtitle from "../../components/Subtitle";

const Login = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("Login");
    const [user, setUser] = useState("");
    return (
        <div className="container">
            <div className="box-login">
                <Title text={title} />
                {user && <Subtitle text={`Usuário: ${user}`} />}
                <Input
                    label="Usuário"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <Input label="Senha" hideContent />
                <Button title="Entrar" onClick={() => navigate("/home")} />
                <Button title="Alterar Título" onClick={() => setTitle("Novo Titulo")} bgColor="blue" />
                <Link text="Esqueceu a senha?" url="https://google.com" />
            </div>
        </div>
    );
};
export default Login;
