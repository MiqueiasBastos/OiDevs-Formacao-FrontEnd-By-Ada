import { useNavigate } from "react-router-dom";

import "./styles.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Link from "../../components/Link";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="box-login">
                <Title text="Login" />
                <Input label="Usuário" />
                <Input label="Senha" hideContent />
                <Button title="Entrar" onClick={() => navigate("/home")} />
                <Link text="Esqueceu a senha?" url="https://google.com" />
            </div>
        </div>
    );
}
export default Login;
