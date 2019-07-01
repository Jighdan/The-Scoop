import React from 'react';
import styled from 'styled-components';
import Flex from '../Global/Flex';

const Piece = styled.h2`
    text-align: left;
`
const ThisArticle = styled(Flex)`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
`
const Title = styled(Piece)`
    font-size: 1.5rem;
`

const Article = (props) => {
    const { article } = props;
    const {
        title,
        author,
        timestamp
    } = article
    const d = new Date(timestamp);
    const postedAt = d.toDateString();
    return(
        <ThisArticle>
            <Flex direction='column' align='flex-start'>
                <Title>{title}</Title>
                <Piece>By: <b>{author}</b></Piece>
                <Piece>Posted At: {postedAt}</Piece>
            </Flex>

        </ThisArticle>
    )
}

export default Article;