import React from 'react'
import ImageCrop, { StyledBImage } from './BotImage.styles'

const BotImage = (props: BotImageProps) => {
    const { imageSrc } = props
    return (
        <ImageCrop>
            <StyledBImage src={imageSrc} />
        </ImageCrop>
    )
}

type BotImageProps = {
    imageSrc: string
}

export default BotImage