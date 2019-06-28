import React from 'react';
import styled from 'styled-components';

const StyledSurface = styled.div`
    max-width: 100vw;
    width: auto;
    height: auto;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    margin: ${props => props.margin ? props.margin : '0px'};
    z-index: 1;
`
const Surface = (props) => {
    const {
        children,
        margin
    } = props;
    return(
        <StyledSurface margin={margin}>
            {children}
        </StyledSurface>
    )
};

export default Surface;