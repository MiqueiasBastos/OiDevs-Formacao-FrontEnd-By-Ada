import styled from "styled-components";
import { Text } from "../../ui/Text";
import { Icon } from "../Icon";

export const TabsWrapper = styled.div`
    border-top: 1px solid #262626;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const ItemWrapper = styled.div`
    height: 52px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${({ isCurrentTab }) => isCurrentTab && "border-top: 2px solid #FFF"};

    &:not(:last-child) {
        margin-right: 60px;
    }
`;

export const ItemIcon = styled(Icon)`
    margin-right: 5px;
`;

export const ItemText = styled(Text)`
    letter-spacing: 1px;
    text-transform: uppercase;
`;
