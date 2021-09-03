import React from 'react'
import { StyledSButton, StyledStar } from './FavoriteStar.styles'
import FullStar from '../../../resources/images/star.png'
import EmptyStar from '../../../resources/images/favorite.png'

const FavoriteStar = (props: StarProps) => {
    const { favorite, className } = props
    return (
        <StyledSButton className={className} >
            <StyledStar src={favorite ? FullStar : EmptyStar} />
        </StyledSButton>
    )
} 

type StarProps ={
    favorite: boolean,
    className: string
}

export default FavoriteStar