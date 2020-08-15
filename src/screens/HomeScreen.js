import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({route, navigation}) => {
  const [windowWidth, setWindowWidth] = useState(100);

  const [todoID, setTodoID] = useState(0);
  const [todos, setTodos] = useState([
    {id: 1, task: 'Some task 1', isTaskDone: false}
  ]);

  useEffect(() => {
    Dimensions.addEventListener('change', () =>
      setWindowWidth(Dimensions.get('window').width),
    );
    setWindowWidth(Dimensions.get('window').width);
    // if (route.params?.new_todo) {
    //   setTodos([...todos, route.params.new_todo])
    // }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ margin: 15}}
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
              style={{
                flex: 1,
                padding: 10,
                width: windowWidth,
              }}
              data={todos}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      style={{margin: 10}}
                      onPress={() => navigation.navigate('EditTodo')}>
                      <Text>{item.task}</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={{margin: 10}}
                        onPress={() => console.log('Mark as done')}>
                        <Icon name={'check'} size={20} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{margin: 10}}
                        onPress={() => console.log('Delete')}>
                        <Icon name={'times'} size={20} />
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
    alignItems: 'center',
    padding: 10,
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
