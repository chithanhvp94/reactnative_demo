import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchLocation from './components/FetchLocation';
import { Avatar } from './src/conponents';


export default class App extends React.Component {
  // getUserLocationHander() {
  //   alert('Pressed the button');
  //   // console.log('Pressed the button');
  // };

  // constructor() {
  //   super();
  //   this.state = {
  //     isActive: false
  //   };
  // }

  render() {
    // const isActive = this.state;

    return (
      // <View>
      //   <View style={{
      //     width: 200,
      //     height:100,
      //     backgroundColor: 'blue'
      //   }}></View>
      //   <View style={styles.container}>
      //     {/* <Text>Open up App.js to start working on your app!</Text>
      //     <FetchLocation onGetLocation={this.getUserLocationHander} /> */}
      //     <Avatar width={50} height={50} borderRadius={50 / 2} backgroundColor={'red'} />
      //     {/* <Avatar width={50} height={50} borderRadius={50 / 2} backgroundColor={'red'} /> */}
      //   </View>
      // </View>
      <View style={styles.container}>
        {/* <View style={[styles.rectangle, {backgroundColor: 'red'}]}><Text>1</Text></View>
        <View style={[styles.rectangle, {backgroundColor: 'green'}]}><Text>2</Text></View>
        <View style={[styles.rectangle, {backgroundColor: 'blue'}]}><Text>3</Text></View> */}
        <View style={styles.top}>
          <View style={styles.topLeft}>
          <View style={[styles.topLeftChild1, styles.topLeftChild]}></View>
          <View style={[styles.topLeftChild2, styles.topLeftChild]}></View>
          </View>
          <View style={styles.topRight}></View>
        </View>
        <View style={styles.bottom}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  },
  top: {
    flexDirection: 'row',
    flex: 6,
    // backgroundColor: 'red',
  },
  topLeft: {
    flexDirection: 'column',
    flex: 2,
    backgroundColor: 'black'
  },
  topLeftChild: {
    flexDirection: 'column',
    backgroundColor: 'white',
    // borderWidth: 5,
    // borderColor: 'black',
    margin: 5,
  },
  topLeftChild1: {
    flex: 1,
  },
  topLeftChild2: {
    flex: 3,
  },
  topRight: {
    flexDirection: 'row',
    flex: 5,
    backgroundColor: 'red',
  },
  bottom: {
    flexDirection: 'row',
    flex: 3,
    backgroundColor: 'yellow',
  },
});
