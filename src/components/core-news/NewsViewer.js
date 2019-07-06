import React, { useState } from 'react';
import styled from 'styled-components';
import Surface from '../global/Surface';
import { useDrop } from 'react-dnd-cjs'
import ItemTypes from './ItemTypes';
import Source from './Source';
import { MdBlock } from 'react-icons/md';

const Container = styled(Surface)`
    position: relative;
    width: 70vw;
    padding: 25px;
    margin: 0 auto;
    height: 70vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const ClearBtn = styled.div`
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 10px;
`

const NewsViewer = (props) => {
    const [sources, setSource] = useState([]);
    const [{}, drop ] = useDrop({
        accept: ItemTypes.SOURCE,
        drop: (item) => {
            _onDrop(item);
        },
    })

    const _onDrop = (a) =>{
        const isFound = sources.find((elem)=>(elem === a.sourceObj))
        if (isFound){
            // TODO: do a cool animation here 
            console.log('ALREADY IN THERE ')
        } else {
            setSource([...sources, a.sourceObj]);
        }
    }
    
    const _clear = () => {
        setSource([])
    }
    

    return(
        <div ref={drop}>
            <Container>
                {
                    sources.length === 0 ?
                    <p>Drop A Source Here</p>
                    :
                    <>
                    <ClearBtn onClick={_clear}>
                        Clear <MdBlock/>
                    </ClearBtn>
                    { 
                        sources.map((source, i)=>(
                            <Source source={source} key={i}/>
                        ))
                    }
                    </>
                }
            </Container>
            </div>
      
    )
}

export default NewsViewer;