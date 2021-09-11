import React from 'react'
import ImageCrop, { StyledBImage } from './BotImage.styles'

const BotImage = (props: BotImageProps) => {
    const { imageSrc } = props
    return (
        <ImageCrop {...props}>
            <StyledBImage src={imageSrc} />
        </ImageCrop>
    )
}

type BotImageProps = {
    imageSrc: string | undefined,
    className?: string
}

export default BotImage