import styled from "styled-components";
import { NavItem } from "./NavItem";
import { Title } from "./Title";

import { itemsMenu } from "../data";

const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    height: 100%;
    justify-content: space-between;
    padding: 8px 12px 20px;
    border-right: 1px solid #262626;
`;

const Box = styled.div``;

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <Box>
                <Title />
                {itemsMenu.map((item) => (
                    <NavItem
                        key={item.title}
                        text={item.title}
                        icon={item.icon}
                        notification={item.notification}
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
