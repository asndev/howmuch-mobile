import React from 'React';
import NavigatorIOS from 'NavigatorIOS';
import StyleSheet from 'StyleSheet';

import Login from './components/Login';

import { connect } from 'react-redux';

class HowMuchNavigator extends React.Component {

  render() {
    const { user } = this.props.settings;
    const { dispatch, navigator } = this.props;

    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: Login,
          title: 'Login',
          passProps: { user, dispatch },
        }}
        />
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  const { settings } = state;

  return {
    settings
  };
}

export default connect(mapStateToProps)(HowMuchNavigator);
