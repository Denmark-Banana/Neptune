import React, { Component } from 'react';
import InputPresenter from './InputPresenter';

interface IState {
  error: string;
  loading: boolean;
}

class InputContainer extends Component<{}, IState> {
  state = {
    error: '',
    loading: true,
  };

  render() {
    const { error, loading } = this.state;
    return (
      <InputPresenter
        error={error}
        loading={loading}
      />
    );
  }
}

export default InputContainer;
