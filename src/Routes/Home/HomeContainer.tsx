import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import { memoryApi } from '../../api';

interface IState {
  error: string;
  loading: boolean;
  result: object;
}

class HomeContainer extends Component<{}, IState> {
  state = {
    error: '',
    loading: true,
    result: {}
  };

  async componentDidMount() {
    try{
      const data = await memoryApi.Memory();
      console.log(data)
      this.setState({ result: data });
    } catch(e) {
      console.log(e);
    } finally {
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const { error, loading } = this.state;
    return <HomePresenter error={error} loading={loading} />;
  }
}

export default HomeContainer;
