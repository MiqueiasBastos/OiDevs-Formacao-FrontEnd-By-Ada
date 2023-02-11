import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Content = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 762px;
    gap: 32px;
`;
export const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    margin-bottom: 10px;
    border: 1px solid #333;
    padding: 25px 40px;
    background-color: #212121;
`;
export const LogoWrapper = styled.div`
    margin-top: 21px;
    margin-bottom: 12px;
`;
export const ButtonWrapper = styled.div`
    margin-top: 10px;
`;
export const CustomForm = styled.form`
    padding: 24px 0 10px 0;
`;
export const CustomInput = styled.input`
    width: 100%;
    padding: 9px 8px 7px 8px;
    border: 1px solid #585858;
    background-color: rgba(255, 255, 255, 0.1);
    margin-bottom: 10px;
    outline: none;
    color: #fff;
    border-radius: 1px;
    height: 35px;

    &::placeholder {
        color: rgba(255, 255, 255, 0.4);
    }

    &:disabled {
        background-color: rgba(255, 255, 255, 0.05);
        border-color: #454545;
    }
`;
export const Box = styled.div``;
export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: #333;
    margin: 20px 0;
`;
export const Footer = styled.div`
    margin: 30px 0;
`;
