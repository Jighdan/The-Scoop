import Flex from '../src/components/Global/Flex';
import styled from 'styled-components';
import Layout from "../src/components/global/Layout/MainLayout";
import Source from "../src/components/core-news/Source";
import sources from '../src/config/sources';
import NewsContainer from '../src/components/core-news/NewsContainer';

const SourceContainer = styled(Flex)`
  padding-top: 30px;
  width: 80vw;
  margin: 0 auto;
`

export default function indexPage(){

  return(
  <Layout>
  {/* 
      <SourceContainer justify='center'>
        {
          sources.map((source)=>(
            <Source source={source} key={source.name}/>
          ))
        }
      </SourceContainer>
  */}
    <NewsContainer/>
  </Layout>
)
};
