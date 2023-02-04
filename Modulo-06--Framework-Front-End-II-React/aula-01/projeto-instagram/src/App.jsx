import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Grid, GridItem } from "./ui/Grid";

function App() {
    return (
        <Grid templateColumns="244px 1fr">
            <GridItem>
                <Navbar />
            </GridItem>
            <GridItem>
                <Header />
            </GridItem>
        </Grid>
    );
}

export default App;
