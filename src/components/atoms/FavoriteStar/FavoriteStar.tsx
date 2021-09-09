import React, {useContext} from 'react'
import { DataContext } from '../../../data/dataContext'
import { StyledSButton, StyledStar } from './FavoriteStar.styles'
import FullStar from '../../../resources/images/star.png'
import EmptyStar from '../../../resources/images/favorite.png'

const FavoriteStar = (props: any) => {
    const { dispatch } = useContext(DataContext)
    const { favorite, className, shortName } = props
    const dispatchType = favorite ? 'unFavorite' : 'favorite'
    return (
        <StyledSButton className={className} onClick={() => dispatch({type: dispatchType, shortName: shortName})} >
            <StyledStar src={favorite ? FullStar : EmptyStar} />
        </StyledSButton>
    )
}

export default FavoriteStar