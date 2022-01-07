import React from 'react'
import {View , Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';




function Transfer(props) {
   console.log("prosp%%%", props)

   const handleBack =() =>{
      props.navigation.navigate("Home");
   }

   const handleToHome =()=>{
      props.navigation.navigate("Home");
   }   

   return (
    

        <View style={{ alignItems:"center", justifyContent:"center", backgroundColor:"rgb(231,231,231)"}}>
          <View style= {{flexDirection:"row", height:60, backgroundColor:"white", marginBottom:10 }}>
            <TouchableOpacity onPress={handleBack} style={{justifyContent:"center", marginTop:10,}}>
               <AntDesign name ="left" size={30} />
            </TouchableOpacity>
            <View style={{marginLeft:70, justifyContent:"center",}}>
               <Image style={{height: 40, resizeMode: 'contain' }} source={require('../../Images/Logo.png')} />
            </View>
            <View>
            <TouchableOpacity onPress={handleToHome} style={{marginLeft:30, justifyContent:"center", marginTop:10,}}>
               <Ionicons name ="home-outline" size={30} />
            </TouchableOpacity>   
            </View>
            <View>
            <TouchableOpacity style={{marginLeft:15, justifyContent:"center", marginTop:10,}}>
               <Feather name ="help-circle" size={30} />
            </TouchableOpacity>   
            </View>
          </View>

            <View style={{marginBottom:"10%"}}>
              <Text style={{fontWeight:"bold", fontSize:25, color:"black" }}>Money Transfer</Text>
            </View>

            <View style={styles.card}>
             <TouchableOpacity style={styles.cardInner}>
                <AntDesign name ="wallet" size={40} />  
             </TouchableOpacity>
             <TouchableOpacity style={styles.cardInner2}>
                    <Text style={{marginLeft:15, fontWeight :"bold"}}>Upaisa wallet </Text>
             </TouchableOpacity>

            </View>

            <View style={styles.card}>
             <TouchableOpacity style={styles.cardInner}>
                <MaterialCommunityIcons name ="bank" size={40} />  
             </TouchableOpacity>
             <TouchableOpacity style={styles.cardInner2}>
                    <Text style={{marginLeft:15, fontWeight :"bold"}}>Bank Account </Text>
             </TouchableOpacity>

            </View>

            <View style={styles.card}>
             <TouchableOpacity style={styles.cardInner}>
                <AntDesign name ="idcard" size={40} />  
             </TouchableOpacity>
             <TouchableOpacity style={styles.cardInner2}>
                    <Text style={{marginLeft:15, fontWeight :"bold"}}>CNIC Transfer </Text>
             </TouchableOpacity>

            </View>

            <View style={styles.card}>
             <TouchableOpacity style={styles.cardInner}>
                <AntDesign name ="wallet" size={40} />  
             </TouchableOpacity>
             <TouchableOpacity style={styles.cardInner2}>
                    <Text style={{marginLeft:15, fontWeight :"bold"}}>Other Wallet </Text>
             </TouchableOpacity>

            </View>

            <View style={styles.card}>
             <TouchableOpacity style={styles.cardInner}>
                <AntDesign name ="creditcard" size={40} />  
             </TouchableOpacity>
             <TouchableOpacity style={styles.cardInner2}>
                    <Text style={{marginLeft:15, fontWeight :"bold"}}>Transfer In/Out</Text>
             </TouchableOpacity>
            </View>

        </View>
        
   )
}

const styles = StyleSheet.create ({
   card : {backgroundColor:"white", height:60, width:"90%", flexDirection:"row", alignItems:"center", elevation:2, marginTop:10, borderRadius:20,},
   cardInner : {width:80, alignItems:"center", justifyContent:"center", },
   cardInner2 : {flex:5, margin:10, alignItems:"flex-start", justifyContent:"center", borderLeftWidth:.5,}
})

export default Transfer



