import styled from 'styled-components'
import Card from '../Card/Card'

const RegionCardStyles = styled(Card)`
    
    color: ${ props => props.theme.darkTextColor };
    text-align: left;
    &&>div{
        display: flex;
        flex-direction: column;
        padding: ${ props => props.theme.cardsBigPadding };
    }
    .small-txt{
        font-size: 0.9rem;
    }
    grid-row: row-start / 2;
    @media (max-width: 767px){
        grid-column: 1 / 12;
        grid-row: 1 / 2;
    }
    @media (min-width: 768px){
        grid-column: 1 / 2;
        
    }
    @media (min-width: 1385px){
        grid-column: 1 / 4;
        
    }
`



export default RegionCardStyles;
