import React from 'react'
import RegionCardStyles from './RegionCard.styles'
import { getIdiomTxt } from '../../../helpers/regionHelpers';

const RegionCard = (props: RegionCardType) => {
    const { culture, className } = props
    const language = getIdiomTxt(culture)
    return (
        <RegionCardStyles className={className}>
            <span className='small-txt'>Region and idiom</span>
            <span>{language}</span>
            <br/>
            <span className='small-txt'>Timezone</span>
            <span>(UTC - 03:00) Brasilia</span>
        </RegionCardStyles>
    )
};

interface RegionCardType {
    culture: string | undefined,
    className?: string
}

export default RegionCard
