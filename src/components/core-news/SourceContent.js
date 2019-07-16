import React, { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd-cjs'
import styled from 'styled-components';
import Surface from '../global/Surface';
import { getArticles } from '../../utils/firestore/queries/getArticles';
import Article from './ArticleComponents/ArticleStandard';
import colors from '../../assets/styles/colors';
import Flex from '../Global/Flex';
import ItemTypes from './ItemTypes';
const Loader = require('../../assets/images/DataLoading.svg')

const Container = styled(Surface)`
    position: relative;
    display: inline-block;
    margin-right: 10px;
    margin-left: 10px;
    width: 450px;
    max-height: 70vh;
    border-radius: 5px;
    overflow-y: scroll;
    scroll-behavior: smooth;
`
const TitleContainer = styled.a`
    display: flex;
    position: absolute;
    top: 0;
    width: 100%;
    height: 50px;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px 5px 0px 0px;
`
const SourceTitle = styled.h2`
    font-size: 2rem;
    color: #ffffff;
    justify-self: center;
    margin-left: 50px;
    user-select: none;
`
const ContentContainer = styled.div`
    width: 100%;
    padding-top: 45px;
    background-color: ${colors.notquitewhite};
`
const Logo = styled.img`
    height: 50px;
    user-select: none;
`
const LoaderContainer = styled(Flex)`
    margin-top: 100px;
    width: 100%;
`


const Source = (props) => {
    const [loading, setLoading] = useState(true);
    const[articles, setArticles] = useState([]);

    const { source, _pop } = props;
    const {
        name,
        logo,   
        link,
        theme
    }  = props.source;
    const [{}, dragSource] = useDrag({
        item: { source, type: ItemTypes.SOURCE},
        end: item => {
            _pop(item);
        }
        
      })

    const _getArticlesForThisSource = async () => {
        const articles = await getArticles(source.name)
        articles.sort()
        setArticles(articles);
        setLoading(false);
    }


    useEffect(()=>{
        const effect = async () => {
            await _getArticlesForThisSource()
        }
        effect();
    }, []);

    return(
        <Container borderRadius='10px' key={name}>    
            <TitleContainer style={theme} href={link} target='_blank' ref={dragSource}>    
                <Logo src={logo}/>           
                <SourceTitle style={{color: theme.color}}>{name}</SourceTitle>     
            </TitleContainer>     
            <ContentContainer>
                {
                    loading ? 
                    <LoaderContainer justify='center'>
                        <img src={Loader}/>
                    </LoaderContainer>
                    :
                    articles.map((article, i)=>{
                        return(
                            <Article article={article} 
                            key={`${name}-article-${i}`}
                            index={i + 1}/>
                        )

                    })
                }   
            </ContentContainer>
        </Container>
    )
}

export default Source 
