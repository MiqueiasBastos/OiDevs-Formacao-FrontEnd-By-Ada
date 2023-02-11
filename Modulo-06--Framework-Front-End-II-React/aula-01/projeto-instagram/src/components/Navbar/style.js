import styled from "styled-components";
import { Text } from "../../ui/Text";
import { Icon } from "../Icon";

export const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    height: 100%;
    justify-content: space-between;
    padding: 8px 12px 20px;
    border-right: 1px solid #262626;
`;

export const BoxNavbar = styled.div``;

export const NavItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 12px;
    border-radius: 24px;
    align-items: center;
    margin: 4px 0;
    transition: all 0.2s;
    position: relative;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.05);

        svg {
            transform: scale(1.1);
        }
        img {
            transform: scale(1.1);
        }
    }
`;

export const Image = styled.img`
    transition: all 0.2s;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    object-fit: cover;
    border: 2px solid #fff;
`;

export const IconItem = styled(Icon)`
    transition: all 0.2s;
`;

export const Notification = styled.div`
    background-color: red;
    color: white;
    width: 16px;
    height: 16px;
    font-size: 12px;
    z-index: 1;
    line-height: 16px;
    text-align: center;
    border-radius: 8px;
    position: absolute;
    font-family: "Segoe UI", sans-serif;
    left: 26px;
    top: 8px;
`;

export const TextItem = styled(Text)`
    margin-left: 16px;
`;

export const LogoWrapper = styled.div`
    padding: 25px 12px 16px;
    margin-bottom: 19px;

    svg {
        margin-top: 7px;
    }
`;
