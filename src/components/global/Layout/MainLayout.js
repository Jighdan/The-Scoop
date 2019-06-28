import React, { Component } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from './Header/Header';
import colors from '../../../assets/styles/colors';
import { UserContext } from '../../../context/UserContext';


const ContentContainer = styled.div`
    min-height: 100vh;
    background-color: ${colors.background};
    z-index: -1;
    padding-top: 91px;
    box-sizing: border-box;
    overflow-y: scroll;
`

class Layout extends Component {

    render(){
        const {
            children,
            title
        } = this.props;
        return(
            <div>
                    <Head key='LayoutHead'>
                        <title>{
                            title ?
                            title :
                            'The Scoop'
                            }</title>
                        
                    </Head>
                    <Header />
                    <ContentContainer>
                        {children}
                    </ContentContainer>
            </div>
        )
    }
}
export default Layout;