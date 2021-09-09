import React, {useContext} from 'react'
import { DataContext } from '../../../data/dataContext'
import CardsStyles, { CardsRow, CardsWrap, FavWrap, FavTitle  } from './Cards.styles'
import BotCard from '../../molecules/BotCard/BotCard'

const Cards = () => {
    
    const {state, } = useContext(DataContext)
    const faveBotsList = state.filter( item => item.favorite === true)
    const unfaveBotsList = state.filter( item => item.favorite === false )

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
                    />
                ))}
            </CardsWrap>
        </CardsStyles>
            
    )
}

export default Cards