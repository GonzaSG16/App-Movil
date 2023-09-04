import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalComponent from './components/ModalComponent.js';

export default function App() {
  const [textValue, setTextValue] = useState('');
  const [itemsList, setItemsList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onHandleChangeItem = (text) => setTextValue(text);

  const addItem = () => {
    if (textValue.trim() !== '') {
      setItemsList((prevItems) => [
        ...prevItems,
        { id: Math.random().toString(), value: textValue, completed: false },
      ]);
      setTextValue('');
    }
  };

  const toggleComplete = (itemId) => {
    setItemsList((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const renderListItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => toggleComplete(item.id)}
        style={styles.completeButton}
      >
        {item.completed ? (
          <Ionicons name="checkmark-circle" size={24} color="green" />
        ) : (
          <Ionicons name="radio-button-off" size={24} color="gray" />
        )}
      </TouchableOpacity>
      <Text style={[styles.itemText, item.completed && styles.completedText]}>
        {item.value}
      </Text>
      <TouchableOpacity
        onPress={() => {
          setSelectedItem(item);
          setModalVisible(true);
        }}
      >
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const onHandleDelete = () => {
    if (selectedItem) {
      setItemsList((prevItems) =>
        prevItems.filter((item) => item.id !== selectedItem.id)
      );
      setSelectedItem(null);
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Item de la lista"
          placeholderTextColor="#ff0000"
          style={styles.input}
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <Button title="ADD" color="#ff0000" onPress={addItem} />
      </View>
      <FlatList
        data={itemsList}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
        style={styles.listContainer}
      />
      <ModalComponent
        modalVisible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
          setSelectedItem(null);
        }}
        onConfirm={onHandleDelete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: '#eeeeee',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderBottomColor: '#ff0000',
    borderBottomWidth: 1,
    flex: 1,
    height: 40,
    color: '#ff0000',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  listContainer: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderBottomColor: '#ff0000',
    borderBottomWidth: 1,
  },
  itemText: {
    flex: 1,
    fontSize: 18,
    color: '#ff0000',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  completeButton: {
    marginRight: 10,
  },
});
