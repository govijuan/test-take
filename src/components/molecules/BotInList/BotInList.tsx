import React from 'react'
import StyledListBot, { StarContainer, BotName, StyledCreated, ListCard } from './BotInList.styles'
import {Link} from 'react-router-dom'
import FavoriteStar from '../../atoms/FavoriteStar/FavoriteStar'
import BotImage from '../../atoms/BotImage/BotImage'
import { formatedDate } from '../../../helpers/dateHelpers' 

const BotInList = (props: any) => {
    const { favorite, name, image, shortName, created } = props
    const formattedCreated = formatedDate(created)
    return (
        <StyledListBot>
            <StarContainer>
                <FavoriteStar favorite={favorite} shortName={shortName}/>
            </StarContainer>
            <Link to={ '/chatbot/' + shortName } className='list-bot-link'>
                <ListCard className='botInfo'>
                    <div className='rt-list-flex-Item'>
                        <BotImage imageSrc={image} className='small-img' />
                        <BotName>{name}</BotName>
                    </div>
                    <StyledCreated>
                        Created at {formattedCreated}
                    </StyledCreated>
                </ListCard>
            </Link>
        </StyledListBot>
    )
}

export default BotInList