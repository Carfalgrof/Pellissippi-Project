import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, ScrollView, FlatList } from 'react-native';

export default function HomePage() {

    const [job, setJob] =useState([
        { name: 'job1', key: '1'},
        { name: 'job2', key: '2'},
        { name: 'job3', key: '3'},
        { name: 'job4', key: '4'},
        { name: 'job5', key: '5'},
        { name: 'job6', key: '6'},
        { name: 'job7', key: '7'},
        { name: 'job8', key: '8'},
        { name: 'job9', key: '9'},
        { name: 'job10', key: '10'},
    ]);


    const pressHandler = (key) => {
        console.log(key);
    }

    return (
        <View style={styles.container}>
            
            <FlatList 
                data={job}
                renderItem={({ item}) => (
                    <TouchableOpacity onPress={() => pressHandler(item.key)}>
                        <Text style={styles.item}>{item.name}</Text>

                    </TouchableOpacity>

                )}
            />


            {/* <ScrollView>
            { job.map((item) => {
                return (
                    <View key={item.key}>
                        <Text style={styles.item}>{item.name}</Text>
                    </View>
                )
            })}
            </ScrollView> */}


        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        paddingTop: 40,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        width: '95%'

    },
    item : {
        backgroundColor: 'yellow',
        marginTop: 24,
        padding: 30,
        fontSize: 24,
        textAlign: 'center',


    }
})