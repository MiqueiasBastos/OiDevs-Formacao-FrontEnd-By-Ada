import styled from "styled-components";
import { NavItem } from "./NavItem";
import { Title } from "./Title";

const items = [
    { title: "Página Inicial", icon: "home" },
    { title: "Pesquisa", icon: "search" },
    { title: "Explorar", icon: "discovery" },
    { title: "Reels", icon: "reels" },
    { title: "Mensagens", icon: "messages" },
    { title: "Notificações", icon: "notifications" },
    { title: "Criar", icon: "create" },
];

const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    height: 100%;
    justify-content: space-between;
    padding: 8px 12px 20px;
`;

const Box = styled.div``;

export const Navbar = (props) => {
    return (
        <NavbarWrapper>
            <Box>
                <Title />
                {items.map((item) => (
                    <NavItem
                        key={item.title}
                        text={item.title}
                        icon={item.icon}
                    />
                ))}
                <NavItem
                    text="Perfil"
                    image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
            </Box>
            <Box>
                <NavItem text="Mais" icon="menu" />
            </Box>
        </NavbarWrapper>
    );
};
