import styled from "styled-components";

export const Overlayer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 900px;
    height: 80%;
    background-color: #000;
`;
export const ImageWrapper = styled.div`
    height: 100%;
    width: 600px;
    border-right: 1px solid #262626;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px;
    border-bottom: 1px solid #262626;
    align-items: center;
    height: 60px;

    img {
        height: 40px;
        width: 40px;
        object-fit: cover;
        border-radius: 20px;
        margin-right: 10px;
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    padding: 20px;
`;

export const Comments = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 20px;
    border-top: 1px solid #262626;
`;
export const Comment = styled.div`
    display: flex;
    flex-direction: row;
    img {
        height: 30px;
        width: 30px;
        object-fit: cover;
        border-radius: 15px;
        margin-right: 10px;
    }
`;

export const CommentText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

export const Footer = styled.div`
    display: flex;
    height: 50px;
    justify-content: space-between;
    border-top: 1px solid #262626;
    padding: 5px 10px;
    input {
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        color: #fff;
        margin-left: 10px;
    }
`;
