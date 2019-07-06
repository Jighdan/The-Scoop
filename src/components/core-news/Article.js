import React from 'react';
import styled from 'styled-components';
import Flex from '../Global/Flex'
import Surface from '../Global/Surface';
import { MdAccessTime, MdPerson } from 'react-icons/md'

const Piece = styled.h2`
    text-align: left;
    color: #000000;
`
const ThisArticle = styled(Surface)`
    width: 80%;
    margin: 20px;
    padding: 15px;
    color: #000000;
    cursor: pointer;
`
const Title = styled(Piece)`
    font-size: 1.25rem;
    font-weight: 800;
    padding-left: 14px;
    margin-bottom: 10px;
    color: #000000;
`
const AuthorName = styled.span`
    padding-left: 4px;
    color: #000000;
`
const Author = styled(Flex)`
    margin-bottom: 5px;
    color: #000000;
`
const PostedAt = styled(Flex)`
    width: 100%;
    justify-content: none;
    color: #000000;
`
const Time = styled.h4`
    padding-left: 3px;
    color: #000000;
`
const TitleAndIndexContainer = styled(Flex)`
    margin-left: 4px;
    color: #000000;
`
const Index = styled.span`
    padding-bottom: 1px;
    border-bottom: 1px solid #000000;
    color: #000000;
`

const Article = (props) => {

    const { article, index } = props;

    const {
        title,
        author,
        timestamp,
        link,
    } = article;

    const IconStyle = {height: '19px', width: '19px', paddingRight: '3px'};
    const d = new Date(timestamp);
    const postedAt = d.toDateString();

    return(
            <ThisArticle>
                <a href={link} target='_blank'>
                    <Flex direction='column' align='flex-start'>

                        <TitleAndIndexContainer>
                            <Index>{index}</Index>
                            <Title>{title}</Title>
                        </TitleAndIndexContainer>

                        <Author>
                            <MdPerson style={IconStyle}/> : 
                            <AuthorName>{author}</AuthorName>
                        </Author>

                        <PostedAt>
                            <MdAccessTime style={IconStyle}/> : 
                            <Time>{postedAt}</Time>
                        </PostedAt>

                    </Flex>
                </a>
            </ThisArticle>
    )
}

export default Article;