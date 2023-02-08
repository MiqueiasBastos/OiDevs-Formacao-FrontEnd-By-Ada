import styled from "styled-components";

const Wrapper = styled.div`
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    ${(props) => (props.border ? "padding: 3px;" : "")}
    ${(props) => (props.border ? "border: 1px solid #363636;" : "")}
    border-radius: 50%;
    overflow: hidden;
    box-sizing: content-box;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;

        object-fit: cover;
    }
`;

export const Avatar = ({ image, size, border }) => {
    return (
        <Wrapper size={size} border={border}>
            <img src={image} alt="" />
        </Wrapper>
    );
};
