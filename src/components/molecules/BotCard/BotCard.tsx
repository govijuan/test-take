import React from 'react'
import { Row } from 'react-bootstrap'
import StyledBCard, { BotName, BotShortName } from './BotCard.styles'
import FavoriteStar from '../../atoms/FavoriteStar/FavoriteStar'
import BotImage from '../../atoms/BotImage/BotImage'
import { Link } from 'react-router-dom'

const BotCard = (props: any) => {
    const { favorite, name, shortName, image } = props
    return (
        <StyledBCard className='col-sm-4 col-md-3 col-lg-2'>
            <Row>
                <FavoriteStar favorite={favorite} className='float-left' shortName={shortName} />
            </Row>
            <Row className='justify-content-center'>
                <Link to={ '/chatbot/' + shortName }>
                    <BotImage imageSrc={image} />
                </Link>
            </Row>
            <Row>
                <Link to={ '/chatbot/' + shortName }>
                    <BotName>{name}</BotName>
                </Link>
            </Row>
            <Row>
                <BotShortName>{shortName}</BotShortName>
            </Row>
        </StyledBCard>
    )
}

export default BotCard