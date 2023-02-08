import styled, { css } from "styled-components";

const textStyle = css`
    display: inline-block;
    /* background-color: red;
    font-size: 50px; */
    color: ${(props) => props.color || "#FFF"};
    font-weight: ${(props) => (props.bold ? "700" : "normal")};
    font-size: ${(props) => (props.size ? `${props.size}px` : "16px")};
`;

export const Text = styled.span`
    ${textStyle}
`;

export const TextLink = styled.span`
    ${textStyle}

    text-decoration: none;
    cursor: pointer;
    width: fit-content;
    &:hover {
        text-decoration: underline;
        text-decoration-line: underline;
        text-decoration-thickness: 1px;
    }
`;
