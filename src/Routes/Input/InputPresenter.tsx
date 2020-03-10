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
  onSubmit: (event: React.FormEvent) => void;
  error: string;
  loading: boolean;
}

const InputPresenter: React.FunctionComponent<Iprops> = ({
  onSubmit,
  error,
  loading,
}) => (
  <Container>
    <Title>Input Memory</Title>
    <Form name="frm" action="/memory" onSubmit={onSubmit} method="post">
      <Input name="title" placeholder="title" />
      <Input name="description" placeholder="description" />
      <Input name="place" placeholder="place" />
      <Input name="emotion" placeholder="emotion" />
      <Input type="submit" value="Submit" />
    </Form>
  </Container>
);

export default InputPresenter;
