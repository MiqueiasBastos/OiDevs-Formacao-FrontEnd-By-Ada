import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { users } = location.state;
    return (
        <div className="container">
            <h1>Home</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
            <Button title="Sair" onClick={() => navigate("/")} />
        </div>
    );
};

export default Home;
