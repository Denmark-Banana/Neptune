import React from 'react';
import styled from 'styled-components';
import { Form, IFields } from '../../Components/Form';
import { Field } from '../../Components/Field';

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
interface Iprops {
  error: string;
  loading: boolean;
}

const InputPresenter: React.FunctionComponent<Iprops> = ({
  error,
  loading,
}) => {
  const fields: IFields = {
    title: {
      id: 'title',
      label: 'Title',
    },
    place: {
      id: 'place',
      label: 'Place',
    },
    emotion: {
      id: 'emotion',
      label: 'Emotion',
      editor: 'dropdown',
      options: ['', 'Happy', 'Sad', 'Funny', 'Boring', 'Awesome'],
    },
    description: {
      id: 'description',
      label: 'Description',
      editor: 'multilinetextbox',
    },
    submit: {
      id: 'submit',
      editor: 'submit',
      value: 'Submit',
    },
  };
  return (
    <Container>
      <Title>Input Memory</Title>
      <Form
        action="/memory"
        fields={fields}
        render={() => (
          <>
            <Field {...fields.title} />
            <Field {...fields.place} />
            <Field {...fields.emotion} />
            <Field {...fields.description} />
            <Field {...fields.submit} />
          </>
        )}
      />
    </Container>
  );
};

export default InputPresenter;
