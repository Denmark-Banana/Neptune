import React, { Component } from 'react';
import InputPresenter from './InputPresenter';

interface IState {
  error: string;
  loading: boolean;
  submitSuccess: boolean;
}

class InputContainer extends Component<{}, IState> {
  state = {
    error: '',
    loading: true,
    submitSuccess: false
  };
  handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    if (this.validateForm()) {
      const submitSuccess: boolean = await this.submitForm();
      this.setState({ submitSuccess });
    }
  };

  validateForm(): boolean {
    // TODO - validate form
    return true;
  }

  async submitForm(): Promise<boolean> {
    // TODO - submit the form
    return true;
  }

  render() {
    const { submitSuccess, error, loading } = this.state;
    return (
      <InputPresenter
        onSubmit={this.handleSubmit}
        submitSuccess={submitSuccess}
        error={error}
        loading={loading}
      />
    );
  }
}

export default InputContainer;
