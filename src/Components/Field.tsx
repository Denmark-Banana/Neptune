import React from 'react';
import { IErrors, IValues, IFormContext, FormContext } from './Form';
import styled from 'styled-components';

type Editor = 'textbox' | 'multilinetextbox' | 'dropdown' | 'submit';

const Container = styled.div`
  margin-bottom: 25px;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;
const Input = styled.input``;
const TextArea = styled.textarea``;
const Select = styled.select``;
const Option = styled.option``;

export interface IValidation {
  rule: (values: IValues, fieldName: string, args: any) => string;
  args?: any;
}
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

  /* The field validator function and argument */
  validation?: IValidation;
}

export const Field: React.FunctionComponent<IFieldProps> = ({
  id,
  label,
  editor,
  options,
  value,
}) => {
  /**
   * Gets the inline styles for editor
   * @param {IErrors} errors - All the errors from the form
   * @returns {any} - The style object
   */
  const getEditorStyle = (errors: IErrors | undefined): any =>
    getError(errors) ? {  border: '1px solid red' } : {};

  /**
   * Gets the validation error for the filed
   * @param {IErrors} errors - All the errors form the form
   * @returns {string} - The validation error
   */
  const getError = (errors: IErrors | undefined): string =>
    errors ? errors[id] : '';

  return (
    <FormContext.Consumer>
      {(context: IFormContext | undefined) => (
        <Container>
          {label && <Label htmlFor={id}>Enter {label}</Label>}
          {editor!.toLowerCase() === 'textbox' && (
            <Input
              id={id}
              type="text"
              value={value}
              style={getEditorStyle(context?.errors)}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                context?.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={() => context?.validate(id)}
            />
          )}
          {editor!.toLowerCase() === 'multilinetextbox' && (
            <TextArea
              id={id}
              value={value}
              style={getEditorStyle(context?.errors)}
              onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                context?.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={() => context?.validate(id)}
            />
          )}
          {editor!.toLowerCase() === 'dropdown' && (
            <Select
              id={id}
              name={id}
              value={value}
              style={getEditorStyle(context?.errors)}
              onChange={(e: React.FormEvent<HTMLSelectElement>) =>
                context?.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={() => context?.validate(id)}
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
            <Input id={id} type="submit" value={value} />
          )}

          {getError(context?.errors) && (
            <div style={{ color: 'red', fontSize: '80%' }}>
              <p>{getError(context?.errors)}</p>
            </div>
          )}
        </Container>
      )}
    </FormContext.Consumer>
  );
};

Field.defaultProps = {
  editor: 'textbox',
};
