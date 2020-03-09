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

const VisualPresenter: React.FunctionComponent<Iprops> = ({ error, loading }) => (
  <Container>
    <Title>Visual</Title>
  </Container>
);

export default VisualPresenter;