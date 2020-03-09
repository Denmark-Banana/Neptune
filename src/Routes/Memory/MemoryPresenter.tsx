import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1``;

interface Iprops {
  error: string;
  loading: boolean;
}

const DetailPresenter: React.FunctionComponent<Iprops> = ({ error, loading }) => (
  <Container>
    <Title>Detail</Title>
  </Container>
);

export default DetailPresenter;
