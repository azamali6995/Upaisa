import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Modal } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';


function PaymentPuspose(props) {
    const [reasons, setReasons] = useState([])

    const handlPress = () => {
        alert("helo")
    }

    return (

        <Modal
            animationType={'slide'}
            transparent={true}
        // visible={showModal}
        >
            <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "gray" }}>
                <View style={{ height: "90%", width: "90%", backgroundColor: "white" }}>
                    <View style={{ height: "10%", flexDirection: "row", }}>

                        <View style={{ marginLeft: 10, width: "85%", justifyContent: "center" }} >
                            <Text style={{ color: "orange", fontSize: 15 }}>Select Purpose of Payment</Text>
                        </View>
                        <View style={{ width: "10%", justifyContent: "center" }}>
                            <AntDesign name="up" size={25} style={{ color: "orange" }} />
                        </View>
                    </View>

                    <TouchableOpacity onPress={handlPress}>
                        <View style={{ marginLeft: 10, marginTop: 25, width: "90%", justifyContent: "center" }} >
                            <Text style={{ fontSize: 16, color: "black" }}>Family Support</Text>
                        </View>
                        <View style={{ marginLeft: 10, marginTop: 25, width: "90%", justifyContent: "center" }} >
                            <Text style={{ fontSize: 16, color: "black" }}>Transport Payment</Text>
                        </View>
                        <View style={{ marginLeft: 10, marginTop: 25, width: "90%", justifyContent: "center" }} >
                            <Text style={{ fontSize: 16, color: "black" }}>Loan payment</Text>
                        </View>
                        <View style={{ marginLeft: 10, marginTop: 25, width: "90%", justifyContent: "center" }} >
                            <Text style={{ fontSize: 16, color: "black" }}>Utility Bill Payment</Text>
                        </View>
                        <View style={{ marginLeft: 10, marginTop: 25, width: "90%", justifyContent: "center" }} >
                            <Text style={{ fontSize: 16, color: "black" }}>Donation -charity</Text>
                        </View>
                        <View style={{ marginLeft: 10, marginTop: 25, width: "90%", justifyContent: "center" }} >
                            <Text style={{ fontSize: 16, color: "black" }}>Educational Payments</Text>
                        </View>
                        <View style={{ marginLeft: 10, marginTop: 25, width: "90%", justifyContent: "center" }} >
                            <Text style={{ fontSize: 16, color: "black" }}>Miscellaneous Payment</Text>
                        </View>
                        <View style={{ marginLeft: 10, marginTop: 25, width: "90%", justifyContent: "center" }} >
                            <Text style={{ fontSize: 16, color: "black" }}>Credit Card payment</Text>
                        </View>
                        <View style={{ marginLeft: 10, marginTop: 25, width: "90%", justifyContent: "center" }} >
                            <Text style={{ fontSize: 16, color: "black" }}>Saralry Payment</Text>
                        </View>
                        <View style={{ marginLeft: 10, marginTop: 25, width: "90%", justifyContent: "center" }} >
                            <Text style={{ fontSize: 16, color: "black" }}>Government Payment (tax etc)</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>

    )
}

export default PaymentPuspose;
