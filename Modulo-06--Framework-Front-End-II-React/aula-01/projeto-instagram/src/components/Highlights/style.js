import styled from "styled-components";
import { Text } from "../../ui/Text";

export const HighlightsWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    padding-left: 24px;
    margin-bottom: 44px;
`;

export const ItemWrapper = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    width: 125px;
    cursor: pointer;
`;

export const ItemText = styled(Text)`
    margin-top: 15px;
    width: 85px;
    text-overflow: ellipsis;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
`;
