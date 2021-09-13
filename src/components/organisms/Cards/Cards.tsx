import React, {Fragment} from 'react'
import CardsStyles, { CardsRow, CardsWrap, FavWrap, FavTitle  } from './Cards.styles'
import BotCard from '../../molecules/BotCard/BotCard'
import { Bot } from '../../../types/BotListTypes'

const Cards = (props: CardsTypes) => {
    const { faveBotsList, unfaveBotsList } = props
    return (
        <CardsStyles>
            {faveBotsList.length > 0 &&
                <Fragment>
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
                </Fragment>
            }
            
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

interface CardsTypes {
    faveBotsList: Bot[],
    unfaveBotsList: Bot[],
}

export default Cards