import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import StatusBar from 'StatusBar';
import HowMuchNavigator from './HowMuchNavigator';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
         />
        <HowMuchNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


export default App;
