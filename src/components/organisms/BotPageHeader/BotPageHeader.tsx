import React from 'react'
import StyledBHeader, {HRightDiv, HLeftDiv, BotNameWrap} from './BotPageHeader.styled'
import BotImage from '../../atoms/BotImage/BotImage'
import { formatedDate } from '../../../helpers/dateHelpers'

const BotPageHeader = (props:BotHeaderProps) => {
    const {image, name, shortName, created} = props
    const formatedCreated = created !== undefined ?  formatedDate(created) : ''
    return (
        <StyledBHeader>
            <HLeftDiv>
                <BotImage imageSrc={image} />
                <BotNameWrap>
                    <h2>{name}</h2>
                    <span>id: {shortName}</span>
                </BotNameWrap>
            </HLeftDiv>
            <HRightDiv>
                <span>Created at {formatedCreated}</span>
            </HRightDiv>
        </StyledBHeader>
    )
}

interface BotHeaderProps{
    image?: string | undefined,
    name?: string | undefined,
    shortName?: string | undefined,
    created?: string | undefined,
}

export default BotPageHeader