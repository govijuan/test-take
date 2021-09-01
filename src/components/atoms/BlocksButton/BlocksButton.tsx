import React from 'react'
import StyledBButton, { Icon } from './BlocksButton.styles'
import OrganizeBlocks from '../../../resources/images/organize-blocks.png'

const BlocksButton = (props: BButtonProps) => (
    <StyledBButton {...props}>
        <Icon src={OrganizeBlocks} />
    </StyledBButton>
)

type BButtonProps = {}

export default BlocksButton