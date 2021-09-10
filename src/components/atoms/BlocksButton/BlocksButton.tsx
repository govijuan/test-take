import React, {useContext} from 'react'
import StyledBButton, { Icon } from './BlocksButton.styles'
import { DataContext } from '../../../data/dataContext'
import OrganizeBlocks from '../../../resources/images/organize-blocks.png'

const BlocksButton = (props: BButtonProps) => {
    const { dispatch } = useContext(DataContext)
    return (
        <StyledBButton {...props} onClick={ () => dispatch({type: 'showCards'})}>
            <Icon src={OrganizeBlocks} />
        </StyledBButton>
    )
}

type BButtonProps = {}

export default BlocksButton