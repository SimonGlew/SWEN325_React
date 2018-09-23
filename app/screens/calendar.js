import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList
} from 'react-native';

import { Icon } from 'react-native-elements';

import EventCalendar from './eventCalendar'

import moment from 'moment';

export default class Calendar extends Component {
    constructor(props) {
        super(props)
        let date = moment().startOf('day').valueOf()

        let events = []
        for (let i = 0; i < 24; i++) {
            events.push({ local: false, id: date + "_" + i, time: i, readableTime: this._formatTime(i), event: '' })
        }

        this.state = {
            events: events,
            date: { date: date, readable: this._formatDate(date) }
        }
    }

    componentWillUnmount() {
        this.loadingEvents = false
    }


    _formatTime(time) {
        if (time < 12) {
            if (time == 0) time = 12
            return time + 'am'
        }
        else {
            time = time % 12
            if (time == 0) time = 12
            return time + 'pm'
        }
    }

    _formatDate(date) {
        return moment(date).format("ddd Do MMM YYYY")
    }

    goBackDate() {
        let newDate = moment(this.state.date.date)
        newDate = newDate.subtract(1, 'd')

        let events = this.makeNewEventArray(newDate)

        this.setState({ events: events, date: { date: newDate.valueOf(), readable: this._formatDate(newDate) } })
    }

    goForwardDate() {
        let newDate = moment(this.state.date.date)
        newDate = newDate.add(1, 'd')
        
        let events = this.makeNewEventArray(newDate)

        this.setState({ events: events, date: { date: newDate.valueOf(), readable: this._formatDate(newDate) } })
    }

    makeNewEventArray(date){
        let events = []
        for (let i = 0; i < 24; i++) {
            events.push({ local: false, id: date + "_" + i, time: i, readableTime: this._formatTime(i), event: '' })
        }

        this.getEventsForDB(date)
        return events
    }

    getEventsForDB(date){
        return null
    }

    _renderEvent = ({ item }) => (
        <EventCalendar
            local={item.local}
            id={item.id}
            time={item.time}
            readableTime={item.readableTime}
            event={item.event}
            navigation={this.props.navigation}
        />
    );

    _keyExtractor = (item, index) => item.id ? item.id.toString() : null;

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flex: 1 }}>
                    <View>
                        <FlatList data={this.state.events} keyExtractor={this._keyExtractor} renderItem={this._renderEvent} />
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Icon name="ios-arrow-back" type="ionicon" size={30} iconStyle={styles.leftButton} underlayColor={'#66adff'} color={'white'} onPress={() => this.goBackDate()} />
                    <Text style={styles.title}>
                        {this.state.date.readable}
                    </Text>
                    <Icon name="ios-arrow-forward" type="ionicon" size={30} iconStyle={styles.rightButton} color={'white'} underlayColor={'#66adff'} onPress={() => this.goForwardDate()} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        flexGrow: 1,
        alignSelf: 'center'
    },
    footer: {
        height: 60,
        backgroundColor: '#66adff',
        flex: 0,
        width: '100%',
        flexDirection: 'row',
    },
    leftButton: {
        paddingLeft: 20
    },
    rightButton: {
        paddingRight: 20
    }
});