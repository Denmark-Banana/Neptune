import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import { memoryApi } from '../../api';

interface IState {
  error: string;
  loading: boolean;
  result: Array<{}>;
}

class HomeContainer extends Component<{}, IState> {
  state = {
    error: '',
    loading: false,
    result: [],
  };

  async componentDidMount() {
    try {
      const { data: result } = await memoryApi.getMemory();
      console.log(this.state.result);
      this.setState({ result });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <HomePresenter result={result} error={error} loading={loading} />;
  }
}

export default HomeContainer;
