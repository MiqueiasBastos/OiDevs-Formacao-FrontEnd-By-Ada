import styled, { css } from "styled-components";

const textStyle = css`
    display: inline-block;
    color: ${({ color }) => color || "#FFF"};
    font-weight: ${({ bold }) => (bold ? "700" : "normal")};
    font-size: ${({ size }) => (size ? `${size}px` : "16px")};
    ${({ center }) => center && "text-align: center;"};
`;

export const Text = styled.span`
    ${textStyle}
`;

export const TextLink = styled.a`
    ${textStyle}
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        text-decoration-thickness: 1px;
    }
`;
