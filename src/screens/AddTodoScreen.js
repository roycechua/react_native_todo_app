import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AddTodoScreen = ({navigation}) => {
  const [todoText, setTodoText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25}}>Task to do:</Text>
      <TextInput
        placeholder={'Write a todo...'}
        style={styles.TextInputStyle}
        autoCapitalize={'sentences'}
        autoCorrect={false}
        value={todoText}
        onChangeText={(text) => setTodoText(text)}
      />
      <TouchableOpacity
        style={styles.addTodoButton}
        onPress={() => navigation.navigate('Home', { todo: todoText })}
      >
        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
          Add Todo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'stretch',
    justifyContent:'center'
  },
  addTodoButton: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 10,
  },
  TextInputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 15,
  },
});

export default AddTodoScreen;
