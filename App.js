/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";;

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import Video from "react-native-af-video-player";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

const url = 'https://vjs.zencdn.net/v/oceans.mp4'


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Video url={url} />
      </View>
    )
  }
}

