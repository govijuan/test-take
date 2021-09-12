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
    @media (max-width: 976px){
        grid-column: 1 / 13;
        grid-row: 1 / 2;
    }
    @media (min-width: 977px){
        grid-column: 1 / 2;
        
    }
    @media (min-width: 1385px){
        grid-column: 1 / 5;
        
    }
`



export default RegionCardStyles;
