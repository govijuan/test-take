import React from 'react'
import CardsStyles, { CardsRow, CardsWrap, FavWrap, FavTitle  } from './Cards.styles'
import BotCard from '../../molecules/BotCard/BotCard'
import { Bot } from '../../../types/BotListTypes'

const Cards = (props: any) => {
    const { botsList } = props
    const faveBotsList: Bot[] = botsList.filter( (item: Bot) => item.favorite === true)
    const unfaveBotsList: Bot[] = botsList.filter( (item: Bot) => item.favorite === false )
    return (
        <CardsStyles>
            <CardsRow>
                <FavTitle>Favorites</FavTitle>
            </CardsRow>
            <FavWrap>
                {faveBotsList.map((item) => (
                    <BotCard 
                        key={item.shortName} 
                        favorite={item.favorite} 
                        name={item.name} 
                        shortName={item.shortName}
                        image={item.image}
                    />
                ))}
            </FavWrap>
            <CardsWrap>
                {unfaveBotsList.map((item) => (
                    <BotCard 
                        key={item.shortName}
                        favorite={item.favorite}
                        name={item.name}
                        shortName={item.shortName}
                        image={item.image}
                    />
                ))}
            </CardsWrap>
        </CardsStyles>
            
    )
}

export default Cards