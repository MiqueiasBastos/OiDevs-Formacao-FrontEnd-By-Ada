import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${({ templateColumns }) => templateColumns};
    overflow: hidden;
`;

export const GridItem = styled.div`
    height: 100vh;
`;
