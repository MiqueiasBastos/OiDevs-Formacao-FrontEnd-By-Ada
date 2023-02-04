import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: ${(props) => props.templateColumns};
`;

export const GridItem = styled.div``;
