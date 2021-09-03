import React from 'react'
import { Row } from 'react-bootstrap'
import StyledBCard, { BotName, BotShortName } from './BotCard.styles'
import FavoriteStar from '../../atoms/FavoriteStar/FavoriteStar'
import BotImage from '../../atoms/BotImage/BotImage'
import TestImage from '../../../resources/images/test-image.jpeg'

const BotCard = (props: BotCardProps) => {
    const { favorite, name, shortName } = props
    return (
        <StyledBCard className='col-sm-4 col-md-3 col-lg-2'>
            <Row>
                <FavoriteStar favorite={favorite} className='float-left'/>
            </Row>
            <Row className='justify-content-center'>
                <BotImage imageSrc={TestImage} />
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

type BotCardProps = {
    favorite: boolean,
    name: string,
    shortName: string,
}

export default BotCard