import styled from 'styled-components'
import BotPageDCard from '../../atoms/BotPageDCard/BotPageDCard';

const BotMainContentStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 30px;
    row-gap: 30px;
    @media (max-width: 767px){
        grid-template-rows: repeat(4, 1fr);
    }
    @media (min-width: 768px){
        grid-template-rows: [row-start] repeat(2, 1fr) [row-end];
    }
    @media (min-width: 768px) and (max-width: 1384px){
        grid-template-columns: repeat(2, 1fr)
    }
`
export const AUDataCard = styled(BotPageDCard)`
    @media (max-width: 767px){
        grid-column: 1 / 12;
        grid-row: 2 / 3
    }
    @media (min-width: 768px){
        grid-column: 2 / 3;
        grid-row: row-start / 2;
    }
    @media (min-width: 1385px){
        grid-column: 4 / 12;
    }
`

export const RMesssagesCard = styled(BotPageDCard)`
    @media (max-width: 767px){
        grid-column: 1 / 12;
        grid-row: 3 / 4
    }
    @media (min-width: 768px){
        grid-column: 1 / 2;
        grid-row: 2 / row-end;
    }
    @media (min-width: 1385px){
        grid-column: 1 / 7;
    }
    
    
`
export const SMessagesCard = styled(BotPageDCard)`
    @media (max-width: 767px){
        grid-column: 1 / 12;
        grid-row: 4 / -1;
    }
    @media (min-width: 768px){
        grid-column: 2 / 3;
        grid-row: 2 / row-end;
    }
    @media (min-width: 1385px){
        grid-column: 7 / 12;
    }

`


export default BotMainContentStyles;
