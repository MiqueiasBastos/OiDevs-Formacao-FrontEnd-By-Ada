import { Avatar } from "./Avatar";
import { Button } from "./Button";
import { Text } from "../ui/Text";

export const Header = () => {
    return (
        <>
            <Avatar />
            <Text bold>@adatechbr</Text>
            <Button>
                <Text color="#000" bold>Seguindo</Text>
            </Button>
            <Button>
                <Text color="#000" bold>Enviar mensagem</Text>
            </Button>
            <Text>211 publicações</Text>
            <Text>44,2 mil seguidores</Text>
            <Text>2 seguindo</Text>
        </>
    );
};
