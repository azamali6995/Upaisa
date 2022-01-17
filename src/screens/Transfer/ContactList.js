import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Searchbar } from 'react-native-paper';
// import { ScrollView } from 'react-native-gesture-handler';

function ContactList(props) {
   const [cloneArry, setCloneArry] = useState([])
   const [searchQuery, setSearchQuery] = useState('')


   useEffect(() => {
      ContactList()
   }, [])


   const ContactList = () => {
      if (props.route.params.data) {
         console.log("Once", props.route.params.data)
         let cloneArry = []
         cloneArry = props.route.params.data || [];

         cloneArry?.sort((a, b) => {
            let fa = a.displayName.toLowerCase()
            let fb = b.displayName.toLowerCase()
            if (fa < fb) {
               return -1;
            }
            if (fa > fb) {
               return 1;
            }
            return 0;
         });
         setCloneArry(cloneArry);

      }

   }

   const onChangeSearch = query => setSearchQuery(query)

   return (
      <View style={{ flex: 1 }}>

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

         <View>
            <View style={{ height: 40, alignItems: "center", justifyContent: "center", }}>
               <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }} >Select Contact</Text>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center", }}>
               <Searchbar
                  style={{ height: 60, marginBottom: 20, borderRadius: 30, width: "90%", alignItems: "center", justifyContent: "center", }}
                  placeholder="Search"
                  onChangeText={onChangeSearch}
                  value={searchQuery}
               />
            </View>

            <SafeAreaView>
               <ScrollView
                  contentContainerStyle={{
                     alignItems: "center",
                     justifyContent: "center",
                  }}
                  style={{ height: 450, }}>

                  {cloneArry.map(data => {
                     let number = ""
                     if (data.phoneNumbers.length > 0) {
                        number = data.phoneNumbers[0].number
                     }
                     return (
                        <>
                           <TouchableOpacity style={{ height: 80, alignContent: "center", justifyContent: "center", borderBottomWidth: 1, borderColor: "darkgray", width: "100%", flexDirection: "row" }}>
                              <View style={{ width: "20%", borderRadius: 50, margin: 5, alignItems: "center", justifyContent: "center", backgroundColor: "black" }}>
                                 <Text style={{ color: "white", fontSize: 25 }}>
                                    {data.displayName.charAt(0)}
                                 </Text>
                              </View>
                              <View style={{ width: "75%", alignContent: "center", justifyContent: "center", }}>
                                 <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                                    {data.displayName}
                                 </Text>
                                 <Text style={{ fontSize: 15, }}>{number}</Text>
                              </View>


                           </TouchableOpacity>
                        </>
                     )
                  })}
               </ScrollView>
            </SafeAreaView>
         </View>



      </View>
   )
}

export default ContactList
