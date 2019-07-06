import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd-cjs';
import ItemTypes from './ItemTypes';
import Surface from '../global/Surface';
import Source from './Source';

const StyledSourceThumbnail = styled(Surface)`
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;
    padding: 5px;
    border-radius: 4px;
`
const SourceImg =styled.img`
    height: 30px;
    width: auto;
    margin-right: 5px;
`

const SourceThumbnail = (props) => {
    const { sourceObj } = props;
    const [{ isDragging }, drag] = useDrag({
        item: {sourceObj, type: ItemTypes.SOURCE },
        end: dropResult => {
            if (dropResult){
                console.log(`Dropped ${sourceObj.name} into ${JSON.stringify(dropResult)}`)
            }   
          
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
            getDropResult: monitor.getDropResult(),
        })
    })
    return(
        <div ref={drag}>
            <StyledSourceThumbnail style={sourceObj.theme}>  
                <SourceImg src={sourceObj.logo}/>
                <h1>{sourceObj.name}</h1>
            </StyledSourceThumbnail>
        </div>
    )
}

export default SourceThumbnail