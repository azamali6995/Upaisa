import React, { useEffect, useState } from 'react';

import { View, Text, Image, Modal, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function ModalContainer() {
  const [vasibility, setVasibility] = useState(true);

  const handlePress = () => {
    setVasibility(false)
  }
  return (
    <Modal transparent
      animationType='fade'
      visible={vasibility}
    >
      <View style={styles.container}>
        <View style={styles.component}>
          <View style={styles.cross} >
            <TouchableOpacity onPress={handlePress} style={{ alignItems: "flex-end", marginTop: 10, marginRight: 15 }}>
              <AntDesign name="closecircleo" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <Image style={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}
            source={require('../Images/madal2.png')} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", },
  component: { height: 500, width: 298, borderRadius: 15, alignItems: "flex-end", justifyContent: "flex-end", },
  cross: { height: 43, width: 298, backgroundColor: "rgb(63,63,63)", borderTopRightRadius: 15, borderTopLeftRadius: 15 },

})

export default ModalContainer;
