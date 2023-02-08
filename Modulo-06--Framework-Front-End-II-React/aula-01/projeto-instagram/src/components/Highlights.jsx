import styled from "styled-components";

import { highlights } from "../data";
import { HighlightItem } from "./HighlightItem";

const Wrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    padding-left: 24px;
    margin-bottom: 44px;
`;

export const Highlights = () => {
    return (
        <Wrapper>
            {highlights.map((highlight, index) => (
                <HighlightItem key={index} item={highlight} />
            ))}
        </Wrapper>
    );
};
