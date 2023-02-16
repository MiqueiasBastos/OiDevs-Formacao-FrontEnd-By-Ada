import { NavItem } from "./NavItem";
import { Logo } from "../Logo";

import { itemsMenu } from "../../data";

import * as S from "./style";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Navbar = () => {
    const context = useContext(GlobalContext);

    const handleLogout = () => {
        context.dispatch({ type: "CHANGE_CURRENT_PAGE", payload: "login" });
    };

    return (
        <S.NavbarWrapper>
            <S.BoxNavbar>
                <S.LogoWrapper>
                    <Logo />
                </S.LogoWrapper>
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
            </S.BoxNavbar>
            <S.BoxNavbar>
                <NavItem text="Sair" icon="logout" onClick={handleLogout} />
                <NavItem text="Mais" icon="menu" />
            </S.BoxNavbar>
        </S.NavbarWrapper>
    );
};
