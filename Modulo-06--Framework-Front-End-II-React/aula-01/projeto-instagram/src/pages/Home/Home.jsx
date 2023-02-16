import { useState } from "react";
import * as S from "./style";

import { Tabs } from "../../components/Tabs";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { Highlights } from "../../components/Highlights";
import { TabContent } from "../../components/TabContent";
import { Grid, GridItem } from "../../ui/Grid";
import { PhotoModal } from "../../components/PhotoModal";

export const Home = () => {
    const [currentTab, setCurrentTab] = useState("posts");
    return (
        <>
            <PhotoModal />
            <Grid templateColumns="244px 1fr">
                <GridItem>
                    <Navbar />
                </GridItem>
                <GridItem>
                    <S.ScrollView>
                        <S.ContentWrapper>
                            <Header />
                            <Highlights />
                            <Tabs
                                currentTab={currentTab}
                                onChangeTab={setCurrentTab}
                            />
                            <TabContent current={currentTab} />
                        </S.ContentWrapper>
                    </S.ScrollView>
                </GridItem>
            </Grid>
        </>
    );
};
