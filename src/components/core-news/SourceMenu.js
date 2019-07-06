import React from 'react';
import styled from 'styled-components';
import sources from '../../config/sources';
import SourceThumbnail from './SourceThumbnail';
import Flex from '../Global/Flex';
import Surface from '../global/Surface';
import colors from '../../assets/styles/colors';


const Menu = styled(Surface)`
    padding: 15px 25px;
    width: 70vw;
    margin: 15px auto;
    background-color: ${colors.primary};
`

const MenuFlex = styled(Flex)`
  
  
`

const SourceMenu = () => {
    return(
        <Menu>
            <MenuFlex>
            {
                sources.map((source, i)=>{
                    return(
                        <SourceThumbnail sourceObj={source} key={i}/>
                    )
                })
            }
            </MenuFlex>
        </Menu>
    )
}
export default SourceMenu;