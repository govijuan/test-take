import React from 'react'
import { Row } from 'react-bootstrap'
import StyledBCard, { BotName, BotShortName } from './BotCard.styles'
import FavoriteStar from '../../atoms/FavoriteStar/FavoriteStar'
import BotImage from '../../atoms/BotImage/BotImage'

const BotCard = (props: any) => {
    const { favorite, name, shortName, image } = props
    return (
        <StyledBCard className='col-sm-4 col-md-3 col-lg-2'>
            <Row>
                <FavoriteStar favorite={favorite} className='float-left' shortName={shortName} />
            </Row>
            <Row className='justify-content-center'>
                <BotImage imageSrc={image} />
            </Row>
            <Row>
                <BotName>{name}</BotName>
            </Row>
            <Row>
                <BotShortName>{shortName}</BotShortName>
            </Row>
        </StyledBCard>
    )
}

export default BotCard