import styled from 'styled-components'

const StyledForm = styled.form`

    @media (min-width: 576px) {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    @media (max-width: 575px){
        display: grid;
        grid-template-rows: repeat( 2, 1fr );
        grid-template-columns: 33% 33% 16.5% 16.5%;
        row-gap: 15px;
    }
    @media (min-width: 977px){
        justify-content: flex-end;
        flex: 3;
    }
`
export default StyledForm