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

const InputPresenter: React.FunctionComponent<Iprops> = ({ error, loading }) => (
  <Container>
    <Title>Input</Title>
  </Container>
);

export default InputPresenter;
