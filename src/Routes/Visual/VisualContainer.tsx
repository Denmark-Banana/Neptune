import React, { Component } from 'react';
import VisualPresenter from './VisualPresenter';

interface IState {
  error: string;
  loading: boolean;
}

class VisualContainer extends Component<{}, IState> {
  state = {
    error: '',
    loading: true,
  };
  render() {
    const { error, loading } = this.state;
    return <VisualPresenter error={error} loading={loading} />;
  }
}

export default VisualContainer;
