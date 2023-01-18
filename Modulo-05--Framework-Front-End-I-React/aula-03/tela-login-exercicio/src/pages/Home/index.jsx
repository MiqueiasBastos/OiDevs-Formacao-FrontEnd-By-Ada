import "./styles.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="container">
            <h1>Home</h1>
            <Button title="Sair" onClick={() => navigate("/")} />
        </div>
    );
}
export default Home;
