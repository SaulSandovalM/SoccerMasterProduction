import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/IonIcons';

const {width, height} = Dimensions.get('window')

export default class Menu extends Component {
  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarImage}>
            <Text style={styles.text}>Saul</Text>
          </View>
          <Icon name="exchange" color="white" size={25}/>
        </View>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.textWithIcon}>
            <View style={styles.withIcon}>
              <Icon style={styles.iconWithText} name="download" color="white" size={28}/>
              <Text style={styles.text}>Descargele</Text>
            </View>
            <Icon style={styles.rightIcon} name="angle-right" color="white" size={25}>
          </View>
          <View style={styles.textWithIcon}>
            <View style={styles.withIcon}>
              <IonIcons style={styles.iconWithText} name="md-chackmark" color="white" size={28}/>
              <Text style={styles.text}>Lista</Text>
            </View>
            <Icon style={styles.rightIcon} name="angle-right" color="white" size={25}>
          </View>
          <View style={styles.items, styles.itemSelected}>
            <Text style={styles.text}>Home</Text>
          </View>
          <View style={styles.noSelectedItems}>
            <Text style={styles.text}>mi</Text>
          </View>
          <View style={styles.noSelectedItems}>
            <Text style={styles.text}>mama</Text>
          </View>
          <View style={styles.noSelectedItems}>
            <Text style={styles.text}>me</Text>
          </View>
          <View style={styles.noSelectedItems}>
            <Text style={styles.text}>mima</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#191919'
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 2 + 59,
    borderColor: '#000',
    borderBottomWidth: 3,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 20
  },
  avatarImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#b3b3b3',
    fontSize: 15,
  },
  textWithIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderColor: '#000',
    borderBottomWidth: 3
  },
  withIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContainer: {
    width: width / 2 + 59
  },
  rightIcon: {
    paddingRight: 20
  },
  iconWithText: {
    marginRight: 10,
    paddingLeft: 20
  },
  items: {
    paddingVertical: 15,
    paddingLeft: 20,
    marginTop: 5
  },
  itemSelected: {
    borderColor: 'red',
    borderLeftWidth: 5
  },
  noSelectedItems: {
    paddingVertical: 15,
    paddingLeft: 25
    marginTop: 5
  }
})
