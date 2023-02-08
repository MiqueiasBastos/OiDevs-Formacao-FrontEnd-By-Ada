import styled from "styled-components";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Grid, GridItem } from "./ui/Grid";
import { Highlights } from "./components/Highlights";
import { Feed } from "./components/Feed";
import { Tabs } from "./components/Tabs";
import { useState } from "react";
import { Marked } from "./components/Marked";
import { Reels } from "./components/Reels";

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

function App() {
    const [atualTab, setAtualTab] = useState("posts");

    return (
        <Grid templateColumns="244px 1fr">
            <GridItem>
                <Navbar />
            </GridItem>
            <GridItem>
                <ScrollView>
                    <ContentWrapper>
                        <Header />
                        <Highlights />
                        <Tabs atualTab={atualTab} onChangeTab={setAtualTab} />
                        {atualTab === "posts" && <Feed />}
                        {atualTab === "reels" && <Reels />}
                        {atualTab === "marked" && <Marked />}
                    </ContentWrapper>
                </ScrollView>
            </GridItem>
        </Grid>
    );
}

export default App;
