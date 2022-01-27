import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';


function PaymentPuspose() {
    const [reasons, setReasons] = useState([])

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity style={{ height: "93%", width: "90%", backgroundColor: "white" }}>
                <View style={{ height: "10%", flexDirection: "row", }}>
                    <View style={{ marginLeft: 10, width: "85%", justifyContent: "center" }} >
                        <Text style={{ color: "orange", fontSize: 15 }}>Select Purpose of Payment</Text>
                    </View>
                    <View style={{ width: "10%", justifyContent: "center" }}>
                        <AntDesign name="up" size={25} style={{ color: "orange" }} />
                    </View>
                </View>
                <View style={{ marginLeft: 10, marginTop: 25, width: "90%", justifyContent: "center" }} >
                    <Text style={{ fontSize: 15, color: "black" }}>Family Support</Text>
                </View>
                <View style={{ marginLeft: 10, marginTop: 23, width: "90%", justifyContent: "center" }} >
                    <Text style={{ fontSize: 15, color: "black" }}>Transport Payment</Text>
                </View>
                <View style={{ marginLeft: 10, marginTop: 23, width: "90%", justifyContent: "center" }} >
                    <Text style={{ fontSize: 15, color: "black" }}>Loan payment</Text>
                </View>
                <View style={{ marginLeft: 10, marginTop: 23, width: "90%", justifyContent: "center" }} >
                    <Text style={{ fontSize: 15, color: "black" }}>Utility Bill Payment</Text>
                </View>
                <View style={{ marginLeft: 10, marginTop: 23, width: "90%", justifyContent: "center" }} >
                    <Text style={{ fontSize: 15, color: "black" }}>Donation -charity</Text>
                </View>
                <View style={{ marginLeft: 10, marginTop: 23, width: "90%", justifyContent: "center" }} >
                    <Text style={{ fontSize: 15, color: "black" }}>Educational Payments</Text>
                </View>
                <View style={{ marginLeft: 10, marginTop: 23, width: "90%", justifyContent: "center" }} >
                    <Text style={{ fontSize: 15, color: "black" }}>Miscellaneous Payment</Text>
                </View>
                <View style={{ marginLeft: 10, marginTop: 23, width: "90%", justifyContent: "center" }} >
                    <Text style={{ fontSize: 15, color: "black" }}>Credit Card payment</Text>
                </View>
                <View style={{ marginLeft: 10, marginTop: 23, width: "90%", justifyContent: "center" }} >
                    <Text style={{ fontSize: 15, color: "black" }}>Saralry Payment</Text>
                </View>
                <View style={{ marginLeft: 10, marginTop: 23, width: "90%", justifyContent: "center" }} >
                    <Text style={{ fontSize: 15, color: "black" }}>Government Payment (tax etc)</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}

export default PaymentPuspose;
