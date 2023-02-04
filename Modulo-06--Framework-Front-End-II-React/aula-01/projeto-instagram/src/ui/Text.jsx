import styled from "styled-components";

export const Text = styled.span`
    display: block;
    color: ${(props) => props.color || "#FFF"};
    font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;
