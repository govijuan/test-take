import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const ListStyles = styled.div`
    padding: 25px 0 15px;
`
export const FavTitle = styled.h2`
    color: ${ props => props.theme.txtLightColor };
    text-align: left;
`
export const CardsRow = styled(Row)`

`

export const ListWrap = styled(CardsRow)`
    padding: ${ props => props.theme.cardsRowPadding } 0 10px;
    border-top: 1px solid ${ props => props.theme.linesColor };
`

export const FavWrap = styled(CardsRow)`
    padding: 10px 0 ${ props => props.theme.cardsRowPadding };
`