import React from 'react'
import BotPageIconStyles, {IconImg} from './BotPageIcon.styles'

const BotPageIcon = (props: BPageIType) => {
    const { imageSrc, className } = props
    return(
        <BotPageIconStyles className={className}>
            <IconImg src={imageSrc} />
        </BotPageIconStyles>
    ) 
};

interface BPageIType{
    imageSrc: string,
    className?: string
}

export default BotPageIcon
