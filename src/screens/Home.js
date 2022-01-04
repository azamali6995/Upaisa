import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Modal from './Modal'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Swiper from 'react-native-swiper'
import EvilIcons from 'react-native-vector-icons/EvilIcons';




function Home() {
   
  return (
    <View style={{flex:1, alignItems:"center", backgroundColor:"halfwhite"}} >
      <Modal />
      <View style= {{flexDirection:"row", height:60,}}>
        <TouchableOpacity style={{justifyContent:"center", marginTop:10,}}>
          <Entypo name ="menu" size={30} />
        </TouchableOpacity>
        <View style={{marginLeft:70, justifyContent:"center",}}>
          <Image style={{height: 40, resizeMode: 'contain' }} source={require('../Images/Logo.png')} />
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


      <View style={{height:180, backgroundColor:"gray" }}>
       <Swiper autoplay={true} autoplayTimeout = {5} loop={true} > 
          <View >
            <Image style= {styles.AllImage} 
            source={require('../Images/add1.png')} />
          </View>
          <View>
            <Image style= {styles.AllImage}
            source={require('../Images/add2.png')} />
          </View>
          <View>
            <Image style= {styles.AllImage}
            source={require('../Images/add3.png')} />
          </View>
          <View>
            <Image style= {styles.AllImage}
            source={require('../Images/add4.png')} />
          </View>
       </Swiper>   
      </View>

     <View style={styles.Transaction} > 
      <TouchableOpacity style= {{flex:1,  alignItems: "flex-start", marginLeft:20, borderRightWidth:.5 }}>
      <Text style={{fontSize:15 }}>
        Balance 
      </Text>
      <Text style={{fontWeight:"bold" }}>
        RS.
      </Text>
      </TouchableOpacity>
      <TouchableOpacity style= {{flex:1,  alignItems: "flex-end", marginRight:5, }}>
      <Text style={{fontSize:15 }}>
        Transaction
      </Text>
      <Text style={{fontSize:17, marginLeft: 22  }}>
         History
      </Text>
      </TouchableOpacity> 
      
      <TouchableOpacity style= {{flex:.2 }}>
         <AntDesign name ="right" size={20} color = "orange" />
      </TouchableOpacity>
      
      
     </View> 

    <View style={{height:260,  marginTop: 50, alignItems:"center",}}>
      <View style={{flexDirection:"row", }} >
      <TouchableOpacity style ={styles.small}>
        <Image style={{resizeMode:"contain", height:35}} source={require("../Images/MoneyTransfer.png")} />
         <Text>Money</Text> 
         <Text>Transfer</Text>
       </TouchableOpacity>
       <TouchableOpacity style ={styles.small}>
       <Image style={{resizeMode:"contain", height:35}} source={require("../Images/Billpayment.png")} />
       <Text>Bill</Text> 
         <Text>Payment</Text> 
       </TouchableOpacity>
       <TouchableOpacity style ={styles.small}>
       <Image style={{resizeMode:"contain", height:35}} source={require("../Images/Loadand.png")} />
         <Text>Load and</Text> 
         <Text>Bundles</Text>  
       </TouchableOpacity>
       </View>

       <View style={{flexDirection:"row",marginTop:10,  }} >
      <TouchableOpacity style ={styles.small}>
      <Image style={{resizeMode:"contain", height:30}} source={require("../Images/supercard.png")} />
         <Text>Super Card</Text> 
         <Text>Family</Text>
       </TouchableOpacity>
       <TouchableOpacity style ={styles.small}>
       <Image style={{resizeMode:"contain", height:35}} source={require("../Images/debitcard.png")} />
         <Text>Debit Card</Text> 
       </TouchableOpacity>
       <TouchableOpacity style ={styles.small}>
       <Image style={{resizeMode:"contain", height:40}} source={require("../Images/payment.png")} />
         <Text>Payment</Text>
       </TouchableOpacity>
       </View>

    </View>

    <View style={{height:60, elevation:1, width:"100%", borderTopLeftRadius:25, borderTopRightRadius:25, marginTop:10}}> 
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center" }}>  
       
      <View style={styles.tabbar}>
        <AntDesign name ="mail" size={25} />
          <Text>Invite</Text>
        </View>

        <View style={styles.tabbar}>
        <EvilIcons name ="star" size={30} />
          <Text>Invite</Text>
        </View>

        <View style={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"black", borderTopLeftRadius:15, borderTopRightRadius:15}}>
        <AntDesign name ="qrcode" size={30} color={"white"} />
          <Text style={{color:"white"}}>Scan</Text>
        </View>

        <View style={styles.tabbar}>
        <EvilIcons name ="location" size={30} />
          <Text>Locate us</Text>
        </View>

        <View style={styles.tabbar}>
        <AntDesign name ="search1" size={25} />
          <Text>Search</Text>
        </View>
        
      </View>
    </View>


    </View>
  );
}

const styles = StyleSheet.create ({
  AllImage : {width: null, height: 180, resizeMode: 'cover', borderBottomLeftRadius:15, borderBottomRightRadius:15},
  Transaction: {elevation: 2, backgroundColor:"white",  height:70, width:335, alignItems:"center", justifyContent:"center", borderRadius:35, flexDirection:"row", position:"absolute", top:204 },
  small : {height:100, width:100, elevation: 1, margin:8, borderRadius:15, alignItems:"center", justifyContent:"center" },
  tabbar : {flex:1,  alignItems:"center", justifyContent:"center",marginTop:10, }

})


export default Home;
