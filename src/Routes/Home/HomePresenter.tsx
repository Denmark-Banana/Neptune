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

const HomePresenter: React.FunctionComponent<Iprops> = ({ error, loading }) => (
  <Container>
    <Title>Home</Title>
  </Container>
);

export default HomePresenter;
