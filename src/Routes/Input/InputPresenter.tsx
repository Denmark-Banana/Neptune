import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const Form = styled.form`
  margin-top: 25px;
  width: 100%;
  max-width: 320px;
  margin-bottom: 12px;
`;

const Input = styled.input`
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

interface Iprops {
  onFormSubmit: (event: React.FormEvent) => void;
  error: string;
  loading: boolean;
}

const InputPresenter: React.FunctionComponent<Iprops> = ({
  onFormSubmit,
  error,
  loading,
}) => (
  <Container>
    <Title>Input Memory</Title>
    <Form onSubmit={onFormSubmit} method="post">
      <Input placeholder="title" />
      <Input placeholder="description" />
      <Input placeholder="place" />
      <Input placeholder="emotion" />
      <Input type="submit" value="Submit" />
    </Form>
  </Container>
);

export default InputPresenter;
