import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';


class App extends Component {
  render() {
    const {user} = this.props.settings;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Foo
        </Text>
        <Text style={styles.instructions}>
          {user && user.token}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

function mapStateToProps(state) {
  const { settings } = state;

  return {
    settings
  };
}

export default connect(mapStateToProps)(App);
