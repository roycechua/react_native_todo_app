import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const EditTodoScreen = ({route, navigation}) => {
  const {id, task} = route.params.existing_todo;
  

  const [todoText, setTodoText] = useState(task);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25}}>Enter the new todo:</Text>
      <TextInput
        placeholder={task}
        style={styles.TextInputStyle}
        autoCapitalize={'sentences'}
        autoCorrect={false}
        value={todoText}
        onChangeText={(text) => setTodoText(text)}
      />
      <TouchableOpacity
        style={styles.updateTodoButton}
        onPress={() => navigation.navigate('Home', { updated_todo: {id: id, task: todoText} })}
      >
        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
          Update Todo
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
    justifyContent: 'center',
  },
  updateTodoButton: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#F0AD4E',
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

export default EditTodoScreen;
