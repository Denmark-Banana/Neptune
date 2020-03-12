import React from 'react';
import { IErrors, IFormContext, FormContext } from './Form';
import styled from 'styled-components';

type Editor = 'textbox' | 'multilinetextbox' | 'dropdown' | 'submit';

const Container = styled.div``;
const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;
const Input = styled.input``;
const TextArea = styled.textarea``;
const Select = styled.select``;
const Option = styled.option``;

export interface IFieldProps {
  /* The unique field name */
  id: string;

  /* The label text for the field */
  label?: string;

  /* The editor for the field */
  editor?: Editor;

  /* The drop down items for the field */
  options?: string[];

  /* The field value */
  value?: any;
}

export const Field: React.FunctionComponent<IFieldProps> = ({
  id,
  label,
  editor,
  options,
  value,
}) => (
  <FormContext.Consumer>
    {(context: IFormContext | undefined) => (
      <Container>
        {label && <Label htmlFor={id}>Enter {label}</Label>}
        {editor!.toLowerCase() === 'textbox' && (
          <Input
            id={id}
            type="text"
            value={value}
            onChange={(e: React.FormEvent<HTMLInputElement>) => 
              context?.setValues({ [id]: e.currentTarget.value })
            }
            onBlur={(e: React.FormEvent<HTMLInputElement>) => console.log(e)}
            /* TODO : validate field value */
          />
        )}
        {editor!.toLowerCase() === 'multilinetextbox' && (
          <TextArea
            id={id}
            value={value}
            onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
              context?.setValues({ [id]: e.currentTarget.value })
            }
            onBlur={(e: React.FormEvent<HTMLTextAreaElement>) => console.log(e)}
          />
        )}
        {editor!.toLowerCase() === 'dropdown' && (
          <Select
            id={id}
            name={id}
            value={value}
            onChange={(e: React.FormEvent<HTMLSelectElement>) =>
              context?.setValues({ [id]: e.currentTarget.value })
            }
            onBlur={(e: React.FormEvent<HTMLSelectElement>) => console.log(e)}
          >
            {options &&
              options.map(option => (
                <Option key={option} value={option}>
                  {option}
                </Option>
              ))}
          </Select>
        )}
        {editor!.toLowerCase() === 'submit' && (
          <Input
            id={id}
            type="submit"
            value={value}
            onChange={(e: React.FormEvent<HTMLInputElement>) => console.log(e)}
            onBlur={(e: React.FormEvent<HTMLInputElement>) => console.log(e)}
          />
        )}

        {/* TODO - display validation error */}
      </Container>
    )}
  </FormContext.Consumer>
);

Field.defaultProps = {
  editor: 'textbox',
};
