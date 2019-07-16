import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd-cjs'
import styled from 'styled-components';
import sources from '../../config/sources';
import SourceThumbnail from './SourceThumbnail';
import Flex from '../Global/Flex';
import Surface from '../global/Surface';
import colors from '../../assets/styles/colors';
import ItemTypes from './ItemTypes';


const Menu = styled(Surface)`
    padding: 15px 25px;
    width: 70vw;
    margin: 15px auto;
    background-color: ${colors.primary};
    overflow-x: scroll;
`

const MenuFlex = styled(Flex)`
  
`

const SourceMenu = (props) => {

    const [ sourceList, setSourceList ] = useState([...sources]);

    const _onSourceDrop = item => {
        setSourceList([...sourceList, item.source])
        console.log('STATE ====> ' + sourceList)
    }

    const [{}, dropMenu] = useDrop({
        accept: ItemTypes.SOURCE,
        drop: (item) => {
            _onSourceDrop(item)
            console.log('DROPPED SOURCE BACK INTO MENU :' + JSON.stringify(item.source));
            return item;
        }
      })

    const _popFromSourceList = (obj) => {
        const found = sourceList.find((source)=>{
            return source === obj;
        });
        if (found) {    
            const index = sourceList.indexOf(found);
            sourceList.splice(index, 1);
            setSourceList([...sourceList]);
        }
    }
    
    return(
        <div ref={dropMenu}>
        <Menu>
            <MenuFlex>
            {
                sourceList.map((source, i)=>{
                    return(
                        <SourceThumbnail sourceObj={source} key={i}
                        _pop={_popFromSourceList} 
                        />
                    )
                })
            }
            </MenuFlex>
        </Menu>
        </div>
    )
}
export default SourceMenu;