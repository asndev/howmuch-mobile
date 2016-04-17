import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

import ActivityLists from './ActivityLists';
import Button from './common/Button';
import { doLogin } from '../actions';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    };
  }

  componentDidMount() {
    if (this.props.user != null) {
      this.onSuccessLogin();
    }
  }

  onSignUpPress() {
    console.info('on sign up press');
  }

  onSuccessLogin() {
    const { user, navigator } = this.props;

    this.props.navigator.replace({
      title: 'Your Lists',
      component: ActivityLists,
      passProps: { user, navigator },
    });
  }

  onLogin() {
    console.info('on sign in press');
    this.setState({errorMessage: ''});

    const { username, password } = this.state;
    this.props.dispatch(doLogin(username, password));
  }

  render() {
    const token = this.props.user && this.props.user.token;
    return (
      <View style={styles.container}>
        <Text>Logged in user: {token}</Text>

        <View style={styles.inputView}>
          <TextInput
            placeholder={'username'}
            style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
            />
        </View>

        <View style={styles.inputView}>
          <TextInput
            placeholder={'password'}
            secureTextEntry={true}
            style={styles.input}
            value={this.state.password}
            onChangeText={(text) => this.setState({password: text})}
            />
        </View>

        <Text style={styles.error}>{this.state.errorMessage}</Text>
        <Button
          text={'login'}
          onPress={this.onLogin.bind(this)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 20,
  },
  input: {
    padding: 4,
    height: 40,
    width: 250,
    alignSelf: 'center'
  },
  inputView: {
    borderBottomWidth: 1.5,
    borderColor: '#363636',
    marginBottom: 10,
    marginTop: 10
  },
  buttons: {
    flexDirection: 'row'
  },
  error: {
    color: 'red'
  }
});

export default LoginForm;
