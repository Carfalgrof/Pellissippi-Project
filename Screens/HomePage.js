import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function HomePage() {
    const [jobs, setJobs] = useState(generateJobs());

    const pressHandler = (key) => {
        console.log("oh baby click me harder, job: "+key);
    }

    const favoriteHandler = (key) => {
        // Handle favorite button press event
        console.log("YOU FAVORITE THIS JOB THANK YOU VERY MUCH,JOB NUMBER:  "+key);
    }

    // Function to generate job data
    function generateJobs() {
        const generatedJobs = [];
        for (let i = 1; i <= 10; i++) {
            generatedJobs.push({
                name: `job${i}`,
                key: `${i}`,
                restaurant: `Restaurant ${String.fromCharCode(64 + i)}`,
                pay: `$${10 + i}/hr`,
                distance: `${i*i} miles`,
                datetime: `March ${i}, 2024, ${8 + i}:00 AM`
            });
        }
        return generatedJobs;
    }

    return (
        <LinearGradient colors={['red', 'yellow', 'green', 'blue', 'purple']} style={styles.linearGradient}>
            <View style={styles.container}>
                <FlatList 
                    data={jobs}
                    renderItem={({ item }) => (
                        <TouchableOpacity key={item.key} onPress={() => pressHandler(item.key)} style={styles.item}>
                            <Text style={styles.jobName}>{item.name}</Text>
                            <Text>{item.restaurant}</Text>
                            <Text>{item.pay}</Text>
                            <Text>{item.distance}</Text>
                            <Text>{item.datetime}</Text>
                            <TouchableOpacity onPress={() => favoriteHandler(item.key)} style={styles.favoriteButton}>
                                <Text style={styles.favoriteButtonText}>Favorite</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
        marginHorizontal: 20,
    },
    item: {
        marginTop: 24,
        padding: 30,
        fontSize: 24,
        textAlign: 'center',
        backgroundColor: "#8C9427",
        position: 'relative', // Added to position the favorite button
        borderRadius: 20,

    },
    jobName: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    favoriteButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent background
        padding: 5,
        borderRadius: 5,
    },
    favoriteButtonText: {
        color: '#fff',
    },
});