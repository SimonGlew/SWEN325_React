import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';


export default class EventCalendar extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate("EventChange", { id: this.props.id, time: this.props.time, readableTime: this.props.readableTime, event: this.props.event })}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {this.props.id}
                        {this.props.time}
                        {this.props.readableTime}
                        {this.props.event ? this.props.events : 'No Event'}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderStyle: 'solid',
        borderWidth: 1
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});