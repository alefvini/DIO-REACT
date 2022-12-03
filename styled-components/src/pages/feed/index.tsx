import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={80} nome="Alef Vinícius" image="https://images-ext-1.discordapp.net/external/39_KVxs3A8kMYySBeS8JwIzsd0XXPKS6v_v4BWt-JYo/https/wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"/>
                <UserInfo percentual={27} nome="Alef Vinícius" image="https://images-ext-1.discordapp.net/external/39_KVxs3A8kMYySBeS8JwIzsd0XXPKS6v_v4BWt-JYo/https/wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"/>
                <UserInfo percentual={89} nome="Alef Vinícius" image="https://images-ext-1.discordapp.net/external/39_KVxs3A8kMYySBeS8JwIzsd0XXPKS6v_v4BWt-JYo/https/wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"/>
                <UserInfo percentual={57} nome="Alef Vinícius" image="https://images-ext-1.discordapp.net/external/39_KVxs3A8kMYySBeS8JwIzsd0XXPKS6v_v4BWt-JYo/https/wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"/>
                <UserInfo percentual={12} nome="Alef Vinícius" image="https://images-ext-1.discordapp.net/external/39_KVxs3A8kMYySBeS8JwIzsd0XXPKS6v_v4BWt-JYo/https/wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"/>
            </Column>
        </Container>
    </>)
}

export { Feed }