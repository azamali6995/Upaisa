import React from 'react'
import {View , Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign';


function Transfer() {
    return (
        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            <View style={{marginBottom:"10%"}}>
              <Text style={{fontWeight:"bold", fontSize:25 }}>Money Transfer</Text>
            </View>

            <View style={{height:60, width:"90%", flexDirection:"row", alignItems:"center", elevation:2, backgroundColor:"yellow", borderRadius:20}}>
             <TouchableOpacity style={{width:80, alignItems:"center", justifyContent:"center", }}>
                <AntDesign name ="wallet" size={40} />  
             </TouchableOpacity>
             <TouchableOpacity style={{flex:5, alignItems:"center", justifyContent:"center", borderLeftWidth:.5, borderHeight: 30   }}>
                    <Text>Upaisa wallet </Text>
             </TouchableOpacity>

            </View>


        </View>
    )
}

export default Transfer
