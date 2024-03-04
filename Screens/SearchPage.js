import React, { useState } from 'react';
import { View, Text, TextInput, Picker, CheckBox, Switch, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const SearchPage = () => {
  const [zipcode, setZipcode] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [shiftDuration, setShiftDuration] = useState('');
  const [restaurantType, setRestaurantType] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [shiftStatus, setShiftStatus] = useState('');
  const [languages, setLanguages] = useState('');
  const [certifications, setCertifications] = useState('');
  const [specialRequirements, setSpecialRequirements] = useState('');
  const [shiftFrequency, setShiftFrequency] = useState('');
  const [tipSharing, setTipSharing] = useState(false);
  const [pay, setPay] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Zipcode</Text>
        <TextInput
          style={styles.input}
          value={zipcode}
          onChangeText={setZipcode}
          placeholder="Enter zipcode"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={setDate}
          placeholder="Enter date"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Time</Text>
        <TextInput
          style={styles.input}
          value={time}
          onChangeText={setTime}
          placeholder="Enter Time"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Job Role</Text>
        <TextInput
          style={styles.input}
          value={jobRole}
          onChangeText={setJobRole}
          placeholder="Enter Job Role"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Shift Duration</Text>
        <TextInput
          style={styles.input}
          value={shiftDuration}
          onChangeText={setShiftDuration}
          placeholder="Enter Shift Duration"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Restaurant Type</Text>
        <TextInput
          style={styles.input}
          value={restaurantType}
          onChangeText={setRestaurantType}
          placeholder="Enter Restaurant Type"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Experience Level</Text>
        <TextInput
          style={styles.input}
          value={experienceLevel}
          onChangeText={setExperienceLevel}
          placeholder="Enter Experience Level"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Shift Status</Text>
        <TextInput
          style={styles.input}
          value={shiftStatus}
          onChangeText={setShiftStatus}
          placeholder="Enter Shift Status"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Languages</Text>
        <TextInput
          style={styles.input}
          value={languages}
          onChangeText={setLanguages}
          placeholder="Enter Languages"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Certifications</Text>
        <TextInput
          style={styles.input}
          value={certifications}
          onChangeText={setCertifications}
          placeholder="Enter Certifications"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Special Requirements</Text>
        <TextInput
          style={styles.input}
          value={specialRequirements}
          onChangeText={setSpecialRequirements}
          placeholder="Enter Special Requirements"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Shift Frequency</Text>
        <TextInput
          style={styles.input}
          value={shiftFrequency}
          onChangeText={setShiftFrequency}
          placeholder="Enter Shift Frequency"
        />
      </View>
      <Text>Tip Sharing</Text>
      <Switch
        value={tipSharing}
        onValueChange={setTipSharing}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pay</Text>
        <TextInput
          style={styles.input}
          value={pay}
          onChangeText={setPay}
          placeholder="Enter Pay"
        />
      </View>
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 50,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    padding: 20,

  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});

