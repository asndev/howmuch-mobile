import React, {
  Component,
  View,
  Text,
  ListView,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';

import Button from 'apsl-react-native-button'
import { fetchActivityList } from '../actions';
import { connect } from 'react-redux';

class ActivityList extends Component {

  componentWillMount() {
    this.props.dispatch(fetchActivityList(this.props.listId));
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const listId = this.props.listId;
    const activities = (this.props.activitylists &&
      this.props.activitylists.activities[listId]) || {};

    let rows = [];
    if (activities && activities.data) {
      const days = Object.keys(activities.data)
        .map(month => {
          return activities.data[month].data;
        })
        .map(e => {
          return Object.keys(e).map(k => e[k].data);
        });


      rows = days
        // worst code ever.
        .reduce((e,c) => e.concat(c))
        .reduce((e,c) => e.concat(c))
        .map(e => { return { name: new Date(e.timestamp).toUTCString() }});
    }

    this.state = {
      dataSource: ds.cloneWithRows(rows),
    };
  }

  renderRow(rowData) {

    return (
      <TouchableHighlight onPress={() => {}}>
        <View>
          <View style={styles.row}>
            <Text style={styles.text}>
              {rowData.name}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  buttonClicked() {
    console.log('button clicked');
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderSeparator={(sectionID, rowID) =>
            <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
        />
      </View>
    );
  }

}

function mapStateToProps(state) {
  const { activitylists } = state;
  return {
    activitylists
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  text: {
    flex: 1
  }
});

export default connect(mapStateToProps)(ActivityList);
