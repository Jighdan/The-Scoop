import Surface from "../src/components/Global/Surface";
import Flex from '../src/components/Global/Flex';
import styled from 'styled-components';
import Layout from "../src/components/global/Layout/MainLayout";
import Source from "../src/components/core-news/Source";
import { getArticles } from '../src/utils/firestore/querries/getArticles';
import sources from '../src/config/sources';

const SourceContainer = styled(Flex)`
  padding-top: 30px;
  width: 80vw;
  margin: 0 auto;
`

export default function indexPage(){

  return(
  <Layout>
      <SourceContainer>
        {
          sources.map((source)=>(
            <Source source={source} key={source.name}/>
          ))
        }
      </SourceContainer>
  </Layout>
)
};
