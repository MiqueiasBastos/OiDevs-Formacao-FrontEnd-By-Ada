import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 44px;
`;

export const AvatarWrapper = styled.div`
    margin-right: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 298px;
`;
export const FollowWrapper = styled.div`
    margin-top: 12px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 20px;
    height: 48px;
    align-items: center;
    margin-bottom: 20px;
`;
export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
`;

export const SocialInfos = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;

    div:not(:last-child) {
        margin-right: 40px;
    }
`;

export const ProfileInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
