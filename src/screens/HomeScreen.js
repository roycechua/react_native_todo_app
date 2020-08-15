import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
  TextInput,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [windowWidth, setWindowWidth] = useState(100)

  useEffect(() => {
    Dimensions.addEventListener('change', () => setWindowWidth(Dimensions.get('window').width))
    setWindowWidth(Dimensions.get('window').width)
  }, [])

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.textHeader}>TODO App</Text>
          <TouchableHighlight
            style={styles.FloatingActionButton}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Icon name="plus" size={25} color="white" />
          </TouchableHighlight>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{...styles.modalWindow, width: windowWidth,}}>
            <View style={styles.modalView}>
              <TextInput
                style={styles.textInputStyle}
                autoCapitalize={'sentences'}
                autoCorrect={false}
              />
              <TouchableHighlight
                style={{
                  margin: 10,
                  borderRadius: 10,
                  padding: 10,
                  backgroundColor: '#2196F3',
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Icon name="plus" size={20} color="white" />
              </TouchableHighlight>
              <TouchableHighlight
                style={{
                  borderRadius: 10,
                  padding: 10,
                  backgroundColor: 'red',
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Icon name="times" size={20} color="white" />
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
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
  textHeader: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  modalWindow: {
    flex: 1,
    bottom: 0,
    left: 0,
    position: 'absolute',
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textInputStyle: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
    margin: 10,
  },
});

export default HomeScreen;
