import { Marked } from "./Marked";
import { Reels } from "./Reels";
import { Feed } from "./Feed";

export const TabContent = ({ current }) => {
    return (
        <>
            {current === "posts" && <Feed />}
            {current === "reels" && <Reels />}
            {current === "marked" && <Marked />}
        </>
    );
};
