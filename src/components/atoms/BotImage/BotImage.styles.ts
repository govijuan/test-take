import styled from 'styled-components'

export const StyledBImage = styled.img`
    width: 100%;
    height: 100%;
`

const ImageCrop = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    overflow: hidden;
    padding: 0;
    &&.small-img{
        width: 30px;
        height: 30px;
    }
`

export default ImageCrop