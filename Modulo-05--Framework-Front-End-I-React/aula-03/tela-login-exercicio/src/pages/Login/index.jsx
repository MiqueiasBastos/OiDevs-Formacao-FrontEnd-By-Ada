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
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [userDatabase, setUserDatabase] = useState([
        {
            username: 'miqueias',
            password: '123'
        },
        {
            username: 'raniel',
            password: 'oidevs'
        }
    ])

    function handleLogin(){
        let auth = false;

        userDatabase.forEach(user=>{
            if(user.username === username && user.password === password) {
                auth = true;
            }
        })

        if(auth) {
            navigate("/home")
        } else {
            window.alert("Usuário ou senha incorretos");
        }


    }
    return (
        <div className="container">
            <div className="box-login">
                <Title text={title} />
                {username && <Subtitle text={`Usuário: ${username}`} />}
                <Input
                    label="Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    label="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    hideContent
                />
                <Button title="Entrar" onClick={handleLogin} />
                <Button title="Alterar Título" onClick={() => setTitle("Novo Titulo")} bgColor="blue" />
                <Link text="Esqueceu a senha?" url="https://google.com" />
            </div>
        </div>
    );
};
export default Login;
