import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({route, navigation}) => {
  const {todo, updated_todo} = route.params;

  const [todoID, setTodoID] = useState(0);
  // const [todos, setTodos] = useState([
  //   {id: 1, task: 'Some task 1', isTaskDone: false},
  //   {id: 2, task: 'Some task 2', isTaskDone: false},
  // ]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (route.params?.todo) {
      // If a new todo was given
      setTodos([...todos, {id: todoID, task: todo, isDone: false}]);
      setTodoID(todoID + 1);
    }
    if (route.params?.updated_todo) {
      // If an existing todo was updated
      setTodos([...todos.filter((element) => element.id != updated_todo.id), updated_todo])
    }
  }, [route.params?.todo, route.params?.updated_todo]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{margin: 15}}
          onPress={() => navigation.navigate('AddTodo')}>
          <Icon name="plus" size={25} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  // console.log(todos);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          {todos.length > 0 ? (
            <FlatList
              style={styles.todoListStyle}
              data={todos}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => {
                return (
                  <View style={styles.todoListItemStyle}>
                    <TouchableOpacity
                      style={{flex: 1, margin: 10}}
                      onPress={() => navigation.navigate('EditTodo', { existing_todo: item })}>
                      {item.isDone ? (
                        <Text
                          style={{
                            fontSize: 18,
                            textDecorationLine: 'line-through',
                            textDecorationStyle: 'solid',
                          }}>
                          {item.task}
                        </Text>
                      ) : (
                        <Text style={{fontSize: 18}}>{item.task}</Text>
                      )}
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={{margin: 10}}
                        onPress={() => {
                          let updated_item = item;
                          updated_item.isDone = !updated_item.isDone
                          setTodos([...todos.filter((element) => element.id != item.id), updated_item])
                        }}>
                        <Icon style={{color:'#5CB85C'} }name={'check'} size={20} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{margin: 10}}
                        onPress={() => setTodos([...todos.filter((element) => element.id != item.id)])}>
                        <Icon style={{color:'#DC3545'}} name={'times'} size={20} />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          ) : (
            <Text>You have no todos right now..</Text>
          )}
          <TouchableOpacity
            style={styles.FloatingActionButton}
            onPress={() => navigation.navigate('AddTodo')}>
            <Icon name="plus" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 10,
  },
  todoListStyle: {
    flex: 1,
    padding: 5,
  },
  todoListItemStyle: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 3,
    padding: 5,
  },
  FloatingActionButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 30,
    padding: 10,
    elevation: 2,
  },
});

export default HomeScreen;
