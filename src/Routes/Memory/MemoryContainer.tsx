import React, { Component } from 'react';
import MemoryPresenter from './MemoryPresenter';

interface IState {
  error: string;
  loading: boolean;
}

class MemoryContainer extends Component<{}, IState> {
  state = {
    error: '',
    loading: true,
  };
  render() {
    const { error, loading } = this.state;
    return <MemoryPresenter error={error} loading={loading} />;
  }
}

export default MemoryContainer;
