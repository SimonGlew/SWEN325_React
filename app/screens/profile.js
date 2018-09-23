import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import { Dimensions } from 'react-native';

var profileImage = require('./noavatar.png')

let screen = Dimensions.get('window');

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '', user: null, error: '' }
  }

  attemptLogin() {
    if (this.state.username == 'a' && this.state.password == 'a') {
      this.setState({ username: '', password: '', user: '123' })
      this.props.navigation.navigate('Calendar', { user: '123' })
    } else {
      this.setState({ error: 'Incorrect Username or Password' })
    }
  }

  register() {

  }

  render() {
    if (this.state.user == null) {
      return (
        <View style={styles.container}>
          <View style={styles.filler} />
          <Text style={styles.title}>
            Login
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ username: text })}
            value={this.state.username}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
          />
          <Text style={styles.errorTextStyle}>{this.state.error}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.leftButton} onPress={() => this.attemptLogin()}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightButton} onPress={() => this.register()}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.ProfileContainer}>
          <View style={styles.ProfileHeader}>
            <Image source={{uri: 'https://vjlhonka.fi/wp-content/uploads/2018/01/user_icon.png'}} style={{width: 100, height: 100}}/>
            <Text style={styles.title}>
              Profile for {this.state.user}
            </Text>
            <View style={styles.ProfileInformation}>
              <Text style={styles.title}>
                Profile
              </Text>
            </View>
          </View>
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  filler: {
    height: screen.height * 0.2
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    backgroundColor: '#edf3ff',
    width: screen.width - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 25,
    marginVertical: 10,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
    width: screen.width
  },
  leftButton: {
    width: '35%',
    height: 50,
    backgroundColor: '#66adff',
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: 10
  },
  rightButton: {
    width: '35%',
    height: 50,
    backgroundColor: '#66adff',
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10%',
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  errorTextStyle: {
    color: '#E64A19',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  ProfileContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  ProfileHeader: {
    flex: 1,
    height: screen.height * 0.3,
    width: screen.width,
  },
  ProfileInformation: {
    flex: 0,
    height: screen.height * 0.7,
    width: screen.width
  }
});