import React from 'React';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';

const setup = () => {
  class Root extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({
          isLoading: false
        }))
      };
    }

    render() {
      if (this.state.isLoading) {
        return null;
      }
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
