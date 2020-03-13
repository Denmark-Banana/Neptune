import React, { Component } from 'react';
import styled from 'styled-components';
import { IFieldProps } from './Field';
import axios from 'axios';

const Container = styled.div``;
const SForm = styled.form`
  margin-top: 25px;
  width: 100%;
  max-width: 320px;
  margin-bottom: 12px;
`;

export interface IFormContext extends IFormState {
  /* Function that allows values in the value state to be set */
  setValues: (values: IValues) => void;

  /* Function that validates a field */
  validate: (fieldName: string) => void;
}
/*
 * The context which allows state and functions to be shared with Field.
 * Note that we need to pass createContext a default value which is why undefined is unioned in the type
 */
export const FormContext = React.createContext<IFormContext | undefined>(
  undefined,
);

/**
 * Validates wheter a field has a value
 * @param {IValues} values - All the field values in the form
 * @param {string} fieldName - The field to validate
 * @returns {string} - The error message
 */
export const required = (values: IValues, fieldName: string): string =>
  values[fieldName] === undefined ||
  values[fieldName] === null ||
  values[fieldName] === ''
    ? 'This must be populated'
    : '';

/**
 * Validates whether a field is a valid title
 * @param {IValues} values - All the field values in the form
 * @param {string} fieldName - The field to validate
 * @param {number} length - The maximum number of characters
 * @returns {string} - The error message
 */
export const maxLength = (
  values: IValues,
  fieldName: string,
  length: number,
): string =>
  values[fieldName] && values[fieldName].length > length
    ? `This can not exceed ${length} characters`
    : '';

export interface IFields {
  [key: string]: IFieldProps;
}
interface IFormProps {
  /* The http path that the form will be posted to */
  action: string;

  /* The props for all the fields on the form */
  fields: IFields;

  /* A prop which allows content to be injected */
  render: () => React.ReactNode;
}

export interface IValues {
  /* key value pairs for all the filed values with key being the filed name */
  [key: string]: any;
}

export interface IErrors {
  /* The validation error messages for each field (key is the field name) */
  [key: string]: string;
}

export interface IFormState {
  /* The field values */
  values: IValues;

  /* The filed validation error messages */
  errors: IErrors;

  /* form submission 성공 여부 */
  submitSuccess?: boolean;
}

export class Form extends Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    const errors: IErrors = {};
    const values: IValues = {};
    this.state = {
      values,
      errors,
    };
  }

  /**
   * Stores new field values in state
   * @param {IValues} values - The new field values
   */
  setValues = (values: IValues) => {
    this.setState({ values: { ...this.state.values, ...values } });
  };

  /**
   * Executes the validation rule for the field and updates the form erros
   * @param {string} fieldName - The field to validate
   * @returns {string} - The error message
   */
  private validate = (fieldName: string): string => {
    let newError: string = '';

    if(this.props.fields[fieldName] && this.props.fields[fieldName].validation) {
      newError = this.props.fields[fieldName].validation!.rule(
        this.state.values,
        fieldName,
        this.props.fields[fieldName].validation!.args
      )
    }
    this.state.errors[fieldName] = newError;
    this.setState({
      errors: { ...this.state.errors, [fieldName]: newError }
    });

    return newError;
  };

  /**
   * Returns whether there are any errors in the errors object that is passed in
   * @param {IErrors} errors - The field errors
   */
  haveErrors(errors: IErrors) {
    let haveError: boolean = false;
    Object.keys(errors).map((key: string) => {
      if (errors[key].length > 0) {
        haveError = true;
      }
    });
    return haveError;
  }

  /**
   * Handles form submission
   * @param {React.FormEvent<HTMLFormElement>} e - The form event
   */
  handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    
    if (this.validateForm()) {
      const submitSuccess: boolean = await this.submitForm();
      this.setState({ submitSuccess });
    }
  };

  /**
   * Executes the validation rules for all the fields on the form and sets the error state
   * @returns {boolean} - form validation check 성공 여부
   */
  validateForm(): boolean {
    const errors: IErrors = {};
    Object.keys(this.props.fields).map((fieldName: string) => {
      errors[fieldName] = this.validate(fieldName);
    });
    this.setState({ errors });
    return !this.haveErrors(errors);
  }

  /**
   * Submits the form to the http api
   * @returns {boolean} - form submission 성공 여부
   */
  async submitForm(): Promise<boolean> {
    try{
      const response = await axios(this.props.action, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        data: JSON.stringify(this.state.values)
      });
      //TODO: need to print Server Validation Message for field
      if (response.status >= 400 ) return false;
      else {
        return true;
      }
    } catch(error){
      console.error(error);
      return false;
    } 
  }

  render() {
    const { submitSuccess, errors } = this.state;
    const context: IFormContext = {
      ...this.state,
      setValues: this.setValues,
      validate: this.validate
    };
    return (
      <FormContext.Provider value={context}>
        <SForm onSubmit={this.handleSubmit} noValidate={true}>
          <Container>
            {this.props.render()}
            {submitSuccess && <div>The form was successfully submitted!</div>}
            {submitSuccess === false && !this.haveErrors(errors) && (
              <div>Sorry, an unexpected error has occurred</div>
            )}
            {submitSuccess === false && this.haveErrors(errors) && (
              <div>
                Sorry, the form is invalid. Please review, adjust and try again
              </div>
            )}
          </Container>
        </SForm>
      </FormContext.Provider>
    );
  }
}
