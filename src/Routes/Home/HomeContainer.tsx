import React, { Component } from 'react';
import HomePresenter from './HomePresenter';

interface IState {
  error: string;
  loading: boolean;
}

class HomeContainer extends Component<{}, IState> {
  state = {
    error: '',
    loading: true,
  };
  render() {
    const { error, loading } = this.state;
    return <HomePresenter error={error} loading={loading} />;
  }
}

export default HomeContainer;
