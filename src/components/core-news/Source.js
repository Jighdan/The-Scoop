import React, { Component } from 'react';
import styled from 'styled-components';
import Surface from '../global/Surface';
import { getArticles } from '../../utils/firestore/querries/getArticles';
import Flex from '../Global/Flex';
import Article from './Article';
import colors from '../../assets/styles/colors';


const TitleContainer = styled.div`
    display: inline-flex;
    position: absolute;
    width: inherit;
    height: 50px;
    background-color: ${colors.grey};
    justify-content: center;
    align-items: center;
    border-radius: 5px 5px 0px 0px;
`

const SourceTitle = styled.h2`
    font-size: 2rem;
    color: #ffffff;

`
const Container = styled(Surface)`
    margin-right: 10px;
    margin-left: 10px;
    width: 550px;
    height: 80vh;
    border-radius: 5px;
    overflow-y: scroll;
    
`
const ContentContainer = styled.div`
    padding-top: 45px;
    background-color: ${colors.notquitewhite}

`


export default class Source extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: true,
        }
    }
    async componentDidMount(){
        await this._getArticlesForThisSource();

    }
    _getArticlesForThisSource = async () => {
        const { source } = this.props
        const articles = await getArticles(source.name)
        this.setState({articles: articles},()=>{
            this.setState({loading: false});
        })
    }

    render(){
        
        const {
            name,
            logo
        }  = this.props.source;
        return(
            <Container borderRadius='10px'>
                <TitleContainer>               
                        <SourceTitle>{name}</SourceTitle>
                        <img src={logo}/>
                </TitleContainer>
                <ContentContainer>
                    {
                        this.state.loading ? 
                        <h1>loading</h1>
                        :
                        
                        this.state.articles.map((article)=>{
                            return(
                                <Article article={article}/>
                            )

                        })
                    }   
                </ContentContainer>
            </Container>
        )
    }
}