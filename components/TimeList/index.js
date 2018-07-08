import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { List, ListItem, Button} from 'react-native-elements'

export default class TimeList extends React.Component {
  addItem(item){
    this.setState({items: this.state.items.concat(item)});
  }
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.state = {
      items : [
        {
          title: 'Calories',
          icon: {type: 'material-community', name: 'food', color: '#184ea5' },
          time: '2:00pm'
        },
        {
          title: 'Concerta',
          icon: {type: 'material', name: 'mood', color: '#184ea5' },
          time: '10:30am'
        }
      ],
    }
  }
  render() {
    return (
      <View>
        <Text style={TimeList.styles.span0} >Hello there</Text>
        <List>
          {
            this.state.items.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={item.icon}
                subtitle={
                  <View>
                    <Text style={TimeList.styles.timeText}> {item.time} </Text>
                  </View>
                }
              />
            ))
          }
        </List>
        <Button title="Add Item" leftIcon={{ name : 'add-box' }} />
      </View>
    )
  }
  static styles = StyleSheet.create({
    span0 : {
      color: '#F0FFA0',
      backgroundColor: '#2252C1',
      fontSize: 24
    },
    span1 : {
      backgroundColor: '#00ff00',
      color: 'black',
    },
    span2 : {
      backgroundColor: '#3384ff',
      color: '#aa00aa',
    },
    timeText : {
      color: 'red',
    }
  });
};
