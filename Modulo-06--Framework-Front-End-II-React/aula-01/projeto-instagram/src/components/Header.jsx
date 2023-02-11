import { Avatar } from "./Avatar";
import { Button } from "../ui/Button";
import { Text, TextLink } from "../ui/Text";
import styled from "styled-components";

import { profileData } from "../data";
import { CounterLabel } from "./CounterLabel";
import { Icon } from "./Icon";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 44px;
`;

const AvatarWrapper = styled.div`
    margin-right: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 298px;
`;
const FollowWrapper = styled.div`
    margin-top: 12px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Infos = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 20px;
    height: 48px;
    align-items: center;
    margin-bottom: 20px;
`;
const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
`;

const SocialInfos = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;

    div:not(:last-child) {
        margin-right: 40px;
    }
`;

const ProfileInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Header = () => {
    return (
        <Wrapper>
            <AvatarWrapper>
                <Avatar image={profileData.imageProfile} size={150} />
            </AvatarWrapper>
            <Content>
                <Infos>
                    <Text size={20}>{profileData.user}</Text>
                    <ButtonsWrapper>
                        <Button icon="arrowDown">Seguindo</Button>
                        <Button>Enviar mensagem</Button>
                        <Button icon="follow" />
                    </ButtonsWrapper>
                    <Button bgColor="transparent" marginNone><Icon name="options" /></Button>
                </Infos>
                <SocialInfos>
                    <CounterLabel
                        number={profileData.publications}
                        label="publicações"
                    />
                    <CounterLabel
                        number={profileData.followers}
                        label="seguidores"
                    />
                    <CounterLabel
                        number={profileData.following}
                        label="seguindo"
                    />
                </SocialInfos>
                <ProfileInfos>
                    <Text size={14} bold>
                        {profileData.profileName}
                    </Text>
                    <Text size={14} color="#a8a8a8">
                        Educação
                    </Text>
                    <Text size={14}>{profileData.biography}</Text>
                    <TextLink size={14} color="#e0f1ff" bold>
                        {profileData.website}
                    </TextLink>
                </ProfileInfos>
                <FollowWrapper>
                    <Text color="#a8a8a8" size={12} bold>
                        Seguido(a) por{" "}
                        <Text color="#FFF" size={12} bold>
                            {profileData.followedBy.join(", ")}
                        </Text>{" "}
                        e outras {profileData.moreFollowers} pessoas
                    </Text>
                </FollowWrapper>
            </Content>
        </Wrapper>
    );
};
