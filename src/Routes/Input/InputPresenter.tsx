import React from 'react';
import styled from 'styled-components';
import Field from '../../Components/Field';

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
interface Iprops {
  onSubmit: (event: React.FormEvent) => void;
  submitSuccess: boolean;
  error: string;
  loading: boolean;
}

const InputPresenter: React.FunctionComponent<Iprops> = ({
  onSubmit,
  error,
  loading,
  submitSuccess,
}) => (
  <Container>
    <Title>Input Memory</Title>
    <Form onSubmit={onSubmit} method="post">
      <Field id="title" label="Title" />
      <Field id="place" label="Place" />
      <Field
        id="emotion"
        label="Emotion"
        editor="dropdown"
        options={['', 'Happy', 'Sad', 'Funny', 'Boring', 'Awesome']}
      />
      <Field id="description" label="Description" editor="multilinetextbox" />
      <Field id="submit" editor="submit" value="Submit" />
      {submitSuccess && <div>The form was successfully submitted!</div>}
      {submitSuccess === false && error && <div>Sorry, submitted fail</div>}
    </Form>
  </Container>
);

export default InputPresenter;
