import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from 'react-native';
function Login(props) {
  const [Acc, setAcc] = useState({});
  const [Pin, setPin] = useState('');
  const [Loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeAcc = val => {
    setAcc(val);
  };
  const handleChangePin = val => {
    setPin(val);
  };
  const handlePress = () => {
    setLoading(true);
    setModalVisible(true);
    props.navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.Image}
        source={require('../Images/Backimg.png')}>
        <SafeAreaView>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../Images/Logo.png')} />
          </View>
          {Acc.length > 0 ? (
            <View style={styles.views1}>
              <TextInput
                style={styles.input}
                placeholder="Enter Acc"
                keyboardType="numeric"
                maxLength={11}
                value={Acc}
                onChangeText={handleChangeAcc}
              />
            </View>
          ) : (
            <View style={styles.views}>
              <TextInput
                style={styles.input}
                placeholder="Enter Acc"
                keyboardType="numeric"
                maxLength={11}
                value={Acc}
                onChangeText={handleChangeAcc}
              />
            </View>
          )}
          <View style={styles.views}>
            <TextInput
              style={styles.input}
              placeholder="Enter MPIN"
              keyboardType="numeric"
              secureTextEntry={true}
              maxLength={4}
              value={Pin}
              onChangeText={handleChangePin}
            />
          </View>
          <View>
            {Pin.length == 4 ? (
              <TouchableOpacity style={styles.button1} onPress={handlePress}>
                <Text style={styles.text}>Sign in </Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.button2}>
                <Text style={styles.text}>Sign in </Text>
              </View>
            )}
          </View>
          <TouchableOpacity style={styles.text2}>
            <Text style={styles.text3}>Forget MPIN</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.View2}>
          <Image
            source={require('../Images/ufone4g.png')}
            style={styles.Images3}
          />
          <Image
            source={require('../Images/ubank.png')}
            style={styles.Images4}
          />
        </View>
      </ImageBackground>
      <Modal visible={modalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            {Loading ? <ActivityIndicator style={styles.ActivityIndi} /> : null}
            <View style={styles.TextView1}>
              <Text>Processing...</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  views: {
    height: 38,
    width: 160,
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
    textAlign: 'center',
    borderColor: 'rgb(189,189,189)',
  },
  views1: {
    height: 38,
    width: 160,
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
    textAlign: 'center',
    borderColor: 'rgb(189,189,189)',
    backgroundColor: 'rgb(198,198,198)',
  },
  input: {
    marginLeft: 10,
  },
  button1: {
    height: 38,
    width: 160,
    borderWidth: 1,
    marginTop: 20,
    margin: 10,
    borderRadius: 20,
    backgroundColor: 'rgb(51,51,51)',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgb(51,51,51)',
  },
  button2: {
    height: 38,
    width: 160,
    borderWidth: 1,
    marginTop: 20,
    margin: 10,
    borderRadius: 20,
    backgroundColor: 'rgb(189,189,189)',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgb(189,189,189)',
  },
  text: {
    color: 'white',
  },
  text2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  text3: {
    color: 'rgb(237,129,32)',
    textDecorationLine: 'underline',
  },
  View2: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    // backgroundColor: 'yellow',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  Images3: {
    resizeMode: 'contain',
    height: 30,
    width: 70,
    margin: 5,
  },
  Images4: {
    resizeMode: 'contain',
    height: 30,
    width: 50,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 100,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    width: 130,
    height: 100,
    backgroundColor: 'white',
  },
  ActivityIndi: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextView1: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default Login;
