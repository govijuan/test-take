import React from "react";
import { ListStyles, ListWrap, FavWrap, CardsRow, FavTitle } from "./List.styles";
import BotInList from "../../molecules/BotInList/BotInList";
import { Bot } from "../../../types/BotListTypes";

const List = (props: any) => {
    const { botsList } = props
    const faveBotsList: Bot[] = botsList.filter( (item: Bot) => item.favorite === true)
    const unfaveBotsList: Bot[] = botsList.filter( (item: Bot) => item.favorite === false )
    return (
        <ListStyles>
            <CardsRow>
                <FavTitle>Favorites</FavTitle>
            </CardsRow>
            <FavWrap>
                {faveBotsList.map((item) => (
                    <BotInList
                        key={item.shortName}
                        favorite={item.favorite}
                        name={item.name}
                        image={item.image}
                        shortName={item.shortName}
                        created={item.created}
                    />
                ))}
            </FavWrap>
            <ListWrap>
                {unfaveBotsList.map((item) => (
                    <BotInList
                        key={item.shortName}
                        favorite={item.favorite}
                        name={item.name}
                        image={item.image}
                        shortName={item.shortName}
                        created={item.created}
                    />
                ))}
            </ListWrap>
        </ListStyles>
    )
}

export default List