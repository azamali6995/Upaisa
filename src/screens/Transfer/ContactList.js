import React, {useEffect, useState} from 'react'
import {View, Text, ScrollView, Modal, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Searchbar } from 'react-native-paper';
// import { ScrollView } from 'react-native-gesture-handler';

function ContactList(props) {
    const [cloneArry, setCloneArry] = useState([])
    const [searchQuery, setSearchQuery] = React.useState('')
    useEffect(()=>{
        if(props.route.params.data) {
            console.log("Once", props.route.params.data)
            setCloneArry(props.route.params.data)
        } 
    }, [])

    
    const onChangeSearch = query => setSearchQuery(query)

    return (
        <View style={{ flex: 1  }}>
        {console.log("cloneArry", cloneArry)}
         <View style= {{ flexDirection:"row", height:60, backgroundColor:"white", marginBottom:10 }}>
            <TouchableOpacity style={{justifyContent:"center", marginTop:10,}}>
               <AntDesign name ="left" size={30} />
            </TouchableOpacity>
            <View style={{marginLeft:70, justifyContent:"center",}}>
               <Image style={{height: 40, resizeMode: 'contain' }} source={require('../../Images/Logo.png')} />
            </View>
            <View>
            <TouchableOpacity style={{marginLeft:30, justifyContent:"center", marginTop:10,}}>
               <Ionicons name ="home-outline" size={30} />
            </TouchableOpacity>   
            </View>
            <View>
            <TouchableOpacity style={{marginLeft:15, justifyContent:"center", marginTop:10,}}>
               <Feather name ="help-circle" size={30} />
            </TouchableOpacity>   
            </View>
          </View>

        <View>
           <View style={{alignItems:"center", justifyContent:"center",}}>
               <Text style={{color:"black", fontSize:20, fontWeight:"bold"}} >Select Contact</Text> 
           </View> 
           
           <View>
             <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                />
           </View> 

           <View style={{alignItems:"center", justifyContent:"center", backgroundColor:"yellow"}}>
           
           {cloneArry.map(data => {
             return (  <View style={{alignItems:"center", justifyContent:"center", backgroundColor:"yellow"}}>
                 <Text> {data.displayName} </Text>
                </View>
             )
             
           })} 
           </View> 
        </View>



        </View>
      )
}

export default ContactList
