import styled from "styled-components";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { Grid, GridItem } from "../../ui/Grid";
import { Highlights } from "../../components/Highlights";
import { Feed } from "../../components/Feed";
import { Tabs } from "../../components/Tabs";
import { useState } from "react";
import { Marked } from "../../components/Marked";
import { Reels } from "../../components/Reels";

const ScrollView = styled.div`
    width: 100%;
    overflow-y: scroll;
    height: 100%;
`;
const ContentWrapper = styled.div`
    max-width: 975px;
    margin: 0 auto;
    padding: 30px 20px;
`;

export const Home = ({ onLogout }) => {
    const [currentTab, setCurrentTab] = useState("posts");
    return (
        <Grid templateColumns="244px 1fr">
            <GridItem>
                <Navbar onLogout={onLogout} />
            </GridItem>
            <GridItem>
                <ScrollView>
                    <ContentWrapper>
                        <Header />
                        <Highlights />
                        <Tabs
                            currentTab={currentTab}
                            onChangeTab={setCurrentTab}
                        />
                        {currentTab === "posts" && <Feed />}
                        {currentTab === "reels" && <Reels />}
                        {currentTab === "marked" && <Marked />}
                    </ContentWrapper>
                </ScrollView>
            </GridItem>
        </Grid>
    );
};
