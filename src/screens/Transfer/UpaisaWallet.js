import React, { useState } from 'react'
import { View, Text, Modal, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';


function UpaisaWallet(props) {
  console.log("Begore##", props)

  console.log("after##", props)


  const [contacts, setContects] = useState([])
  const [cloneArry, setCloneArry] = useState([])

  const handleContact = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.',
        'buttonPositive': 'Please accept bare mortal'
      }
    )
      .then(Contacts.getAll()
        .then((contacts) => {
          setContects(contacts)
        })
        .catch((e) => {
          console.log(e)
        }))

    if (contacts.length > 0) {
      contacts.map((data) => {
        setCloneArry(data)
        handleArrayContect(data)
      })
      //  setModalVisible(true)
    }
  }

  const handleArrayContect = (data) => {
    props.navigation.navigate('ContactList', { data: contacts });
    console.log("onceUp##", data)
  }


  const handleSelctOption = () => {
    props.navigation.navigate('PaymentPuspose');
    // console.log("onceUp##", data)
  }


  return (
    <View style={StyleS.container}>
      {console.log("lhel$$", contacts)}
      <View style={{ flexDirection: "row", height: 60, backgroundColor: "white", marginBottom: 10 }}>
        <TouchableOpacity style={{ justifyContent: "center", marginTop: 10, }}>
          <AntDesign name="left" size={30} />
        </TouchableOpacity>
        <View style={{ marginLeft: 70, justifyContent: "center", }}>
          <Image style={{ height: 40, resizeMode: 'contain' }} source={require('../../Images/Logo.png')} />
        </View>
        <View>
          <TouchableOpacity style={{ marginLeft: 30, justifyContent: "center", marginTop: 10, }}>
            <Ionicons name="home-outline" size={30} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{ marginLeft: 15, justifyContent: "center", marginTop: 10, }}>
            <Feather name="help-circle" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      {/* 
          <Modal visible = {modalVisible}>
            <View style ={{height:"90%", flexWrap:"wrap", backgroundColor:"yellow" }}>
              <Text>Hello World</Text>
            </View>
          </Modal> */}

      <View style={{ alignItems: "center" }}>
        <View style={{ height: 40 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>Upaisa Wallet</Text>
        </View>
        <View>
          <Image style={{ resizeMode: "contain", height: 80, borderRadius: 15 }} source={require('../../Images/walletimg.png')} />
        </View>


        <View style={StyleS.intput1}>
          {props.route && props.route.params && props.route.params.newContact ?
            <View style={{ width: 230 }} >
              <TextInput keyboardType="numeric"
                style={{ marginLeft: 10 }}
                placeholder='Enter Receiver A/C No'
                value={props.route.params.newContact}
              //  onChangeText={this.handle}
              />
            </View> : <View style={{ width: 230 }} >
              <TextInput keyboardType="numeric"
                style={{ marginLeft: 10 }}
                placeholder='Enter Receiver A/C No'
              // value = {props.route.params.newContact}
              //  onChangeText={this.handle}
              />
            </View>}



          <TouchableOpacity onPress={handleContact} style={{ justifyContent: "flex-end", width: 40 }}>
            <AntDesign name="user" color="orange" size={20} />
          </TouchableOpacity>
        </View>

        <View style={{ width: 270, marginLeft: 25, alignItems: "flex-start" }} >
          <Text>03xxxxxxxxx</Text>
        </View>

        {/* <View style={{width:270, marginLeft:25, alignItems:"flex-start" }} >
          <Text>Invalid Account number</Text></View> */}

        <View style={StyleS.input2}>
          <View style={{ width: 230 }} >
            <TextInput keyboardType="numeric" style={{ marginLeft: 10 }} placeholder='Enter Amount' />
          </View>
        </View>

        <View style={StyleS.input3}>
          <TouchableOpacity style={{ width: 230 }} >
            <TextInput style={{ marginLeft: 10 }} placeholder='Select the purpose of payment ' />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSelctOption} style={{ justifyContent: "flex-end", width: 40 }}>
            <AntDesign name="down" color="orange" size={20} />
          </TouchableOpacity>
        </View>

        <View style={StyleS.input4}>
          <TouchableOpacity style={{ width: 230, alignItems: "center" }} >
            <Text>Sutmit</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const StyleS = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", backgroundColor: "rgb(231,231,231)" },
  intput1: { height: 40, backgroundColor: "white", borderWidth: 1, borderColor: "gray", width: 280, alignItems: "center", elevation: 1, marginTop: 50, borderRadius: 25, flexDirection: "row" },
  input2: { height: 40, backgroundColor: "white", borderWidth: 1, borderColor: "gray", width: 280, alignItems: "center", elevation: 1, marginTop: 10, margin: 15, borderRadius: 25, flexDirection: "row" },
  input3: { height: 40, backgroundColor: "white", borderWidth: 1, borderColor: "gray", width: 280, alignItems: "center", elevation: 1, marginTop: 10, borderRadius: 25, flexDirection: "row" },
  input4: { height: 40, backgroundColor: "white", borderWidth: 1, borderColor: "gray", width: 200, justifyContent: "center", elevation: 1, alignItems: "center", marginTop: 30, borderRadius: 25, flexDirection: "row" }
})

export default UpaisaWallet
