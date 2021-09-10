import React, {useContext} from 'react'
import { DataContext } from '../../../data/dataContext'
import CardsStyles, { CardsRow, CardsWrap, FavWrap, FavTitle  } from './Cards.styles'
import BotCard from '../../molecules/BotCard/BotCard'

const Cards = () => {
    
    const {state, } = useContext(DataContext)
    const { botsList } = state
    const faveBotsList = botsList.filter( item => item.favorite === true)
    const unfaveBotsList = botsList.filter( item => item.favorite === false )

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