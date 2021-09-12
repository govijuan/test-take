import styled from 'styled-components'
import BotPageDCard from '../../atoms/BotPageDCard/BotPageDCard';

const BotMainContentStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 30px;
    row-gap: 30px;
    @media (max-width: 976px){
        grid-template-rows: repeat(4, 1fr);
    }
    @media (min-width: 977px){
        grid-template-rows: [row-start] repeat(2, 1fr) [row-end];
    }
    @media (min-width: 977px) and (max-width: 1384px){
        grid-template-columns: repeat(2, 1fr)
    }
`
export const AUDataCard = styled(BotPageDCard)`
    @media (max-width: 976px){
        grid-column: 1 / 13;
        grid-row: 2 / 3
    }
    @media (min-width: 977px){
        grid-column: 2 / 3;
        grid-row: row-start / 2;
    }
    @media (min-width: 1385px){
        grid-column: 5 / 13;
    }
`

export const RMesssagesCard = styled(BotPageDCard)`
    @media (max-width: 976px){
        grid-column: 1 / 13;
        grid-row: 3 / 4
    }
    @media (min-width: 977px){
        grid-column: 1 / 2;
        grid-row: 2 / row-end;
    }
    @media (min-width: 1385px){
        grid-column: 1 / 8;
    }
    
    
`
export const SMessagesCard = styled(BotPageDCard)`
    @media (max-width: 976px){
        grid-column: 1 / 13;
        grid-row: 4 / -1;
    }
    @media (min-width: 977px){
        grid-column: 2 / 3;
        grid-row: 2 / row-end;
    }
    @media (min-width: 1385px){
        grid-column: 8 / 13;
    }

`


export default BotMainContentStyles;
