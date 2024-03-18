import React, { useState } from 'react';
import { View, Text, TextInput, CheckBox, Modal, Button, Switch, ScrollView, StyleSheet, TouchableOpacity, Platform, DatePickerIOS, TimePickerAndroid } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker'; // Import Picker from the correct package


const SearchPage = () => {
  const [zipcode, setZipcode] = useState('');
  const [date, setDate] = useState(new Date());
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
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedHours, setSelectedHours] = useState('01');
  const [selectedMinutes, setSelectedMinutes] = useState('00');
  const [isPM, setIsPM] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);


  const handleSearch = () => {
    // Implement your search logic here
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };


  const handleTimeChange = () => {
    setShowTimePicker(true);
  };

  const handlePickerCancel = () => {
    setShowTimePicker(false);
  };

  const handlePickerConfirm = () => {
    setShowTimePicker(false);
    const newTime = `${selectedHours}:${selectedMinutes} ${isPM ? 'PM' : 'AM'}`;
    setDate(new Date()); // Update the date to trigger re-render
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
        <TouchableOpacity onPress={showDatepicker}>
          <Text style={styles.input}>{date.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>

     <TouchableOpacity style={styles.inputContainer} onPress={handleTimeChange}>
        <Text style={styles.label}>Time</Text>
        <Text style={styles.input}>{`${selectedHours}:${selectedMinutes} ${isPM ? 'PM' : 'AM'}`}</Text>
      </TouchableOpacity>
      <Modal visible={showTimePicker} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedHours}
                onValueChange={(itemValue) => setSelectedHours(itemValue)}
                style={styles.picker}
              >
                {[...Array(12).keys()].map((hour) => (
                  <Picker.Item key={hour} label={`${hour + 1}`} value={hour < 9 ? `0${hour + 1}` : `${hour + 1}`} />
                ))}
              </Picker>
              <Text style={styles.separator}>:</Text>
              <Picker
                selectedValue={selectedMinutes}
                onValueChange={(itemValue) => setSelectedMinutes(itemValue)}
                style={styles.picker}
              >
                {Array.from(Array(60).keys()).map((minute) => (
                  <Picker.Item key={minute} label={minute < 10 ? `0${minute}` : `${minute}`} value={minute < 10 ? `0${minute}` : `${minute}`} />
                ))}
              </Picker>
            </View>
            <View style={styles.switchContainer}>
              <Text style={styles.switchText}>AM</Text>
              <Switch
                value={isPM}
                onValueChange={(value) => setIsPM(value)}
              />
              <Text style={styles.switchText}>PM</Text>
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={handlePickerCancel}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePickerConfirm}>
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    minWidth: 300,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    flex: 1,
    height: 200,
  },
  separator: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  switchText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  buttonText: {
    color: '#007bff',
    fontSize: 16,
    marginRight: 20,
  },
});

