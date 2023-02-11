import styled from "styled-components";

export const Loading = styled.div`
    display: inline-block;
    width: ${({ size }) => size || 64}px;
    height: ${({ size }) => size || 64}px;
    margin: 0 auto;

    &:after {
        content: " ";
        display: block;
        width: ${({ size }) => size || 64}px;
        height: ${({ size }) => size || 64}px;
        margin: ${({ size }) => size / 4 || 8}px;
        border-radius: 50%;
        border: ${({ size }) => size / 10 || 6}px solid #fff;
        border-color: #fff #fff transparent transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
