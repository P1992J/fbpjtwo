import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';

import firebase from 'react-native-firebase';

import MyApp from './components/MyApp.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
    };
  }

  componentDidMount() {
    // firebase things?
  }

  render() {
    return (
      <View style = {{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin:10,
        backgroundColor: '#7E54FE',
        fontSize: 20,
        
        
      }}>
      <MyApp/>

      </View>

      /*
      <ScrollView>
        <View style={styles.container}>
          <Image source={require('./assets/RNFirebase.png')} style={[styles.logo]}/>
          <Text style={styles.welcome}>
            Welcome to {'\n'} React Native Firebase
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          {Platform.OS === 'ios' ? (
            <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
          ) : (
            <Text style={styles.instructions}>
              Double tap R on your keyboard to reload,{'\n'}
              Cmd+M or shake for dev menu
            </Text>
          )}
          <View style={styles.modules}>
            <Text style={styles.modulesHeader}>The following Firebase modules are pre-installed:</Text>
            {firebase.admob.nativeModuleExists && <Text style={styles.module}>admob()</Text>}
            {firebase.analytics.nativeModuleExists && <Text style={styles.module}>analytics()</Text>}
            {firebase.auth.nativeModuleExists && <Text style={styles.module}>auth()</Text>}
            {firebase.config.nativeModuleExists && <Text style={styles.module}>config()</Text>}
            {firebase.crashlytics.nativeModuleExists && <Text style={styles.module}>crashlytics()</Text>}
            {firebase.database.nativeModuleExists && <Text style={styles.module}>database()</Text>}
            {firebase.firestore.nativeModuleExists && <Text style={styles.module}>firestore()</Text>}
            {firebase.functions.nativeModuleExists && <Text style={styles.module}>functions()</Text>}
            {firebase.iid.nativeModuleExists && <Text style={styles.module}>iid()</Text>}
            {firebase.invites.nativeModuleExists && <Text style={styles.module}>invites()</Text>}
            {firebase.links.nativeModuleExists && <Text style={styles.module}>links()</Text>}
            {firebase.messaging.nativeModuleExists && <Text style={styles.module}>messaging()</Text>}
            {firebase.notifications.nativeModuleExists && <Text style={styles.module}>notifications()</Text>}
            {firebase.perf.nativeModuleExists && <Text style={styles.module}>perf()</Text>}
            {firebase.storage.nativeModuleExists && <Text style={styles.module}>storage()</Text>}
          </View>
        </View>
      </ScrollView>
      */
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
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 32,
    width: 120,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});
