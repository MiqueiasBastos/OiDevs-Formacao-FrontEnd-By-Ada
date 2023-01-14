import "./styles.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Link from "../../components/Link";

function Login() {
    return (
        <div className="container">
            <div className="box-login">
                <Title text="Login" />
                <Input label="Usuário" />
                <Input label="Senha" hideContent />
                <Button title="login" />
                <Link text="Esqueceu a senha?" url="https://google.com" />
            </div>
        </div>
    );
}
export default Login;
