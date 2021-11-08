import React ,{useState} from 'react';
import { Image, StyleSheet, Text,
   View,TextInput,
   TouchableOpacity, Button} from 'react-native';
import styles from "./style";

const Login=()=>{
  const [phoneNumber,setPhoneNumber]=useState();
  const [openCountry,setOpenCountry]=useState();
  const [selectedCountry,setSelectedCountry]=useState();

  const toggleCountry = (openCountry) => {
    setOpenCountry(openCountry);
  };

   return(
     
    <View style={styles.phoneNumberContainer}>
      <View style={styles.logoContainer}>
        <Image
               style={{ width: 30, height: 30, marginRight: 5, top:0 }}
             source={require('../../assets/images/user.png')}
           />
      </View>
    <Text style={styles.enterMonoTextStyle_1}>Enter phone number</Text>
    
    <View style={styles.phoneCodeContainer}>
      <View style={styles.countryCodeContainer}>
        <TextInput
          editable={false}
          keyboardType="number-pad"
          style={styles.countryCodeTextInput}
          value={91}
        />
        <Image
          style={styles.dropDownImageStyle}
          source={{
            uri: "expand_more",
            isStatic: true
          }}
        />

        <TouchableOpacity >
          <View
            style={{ flex: 1, flexDirection: "row", alignItems: "center"}}
          >
          
              
            <Text style={styles.phoneTextStyle}>
              {selectedCountry !== null ? selectedCountry : "91"}
            </Text>
          </View>
        </TouchableOpacity>

       
      </View>
      <TextInput
        placeholder="Phone Number"
        keyboardType="number-pad"
        returnKeyType={"done"}
        value={phoneNumber}
        style={styles.phoneNumberInputStyle}
        maxLength={14}
        onChangeText={text =>
            setPhoneNumber()
        }
      />
     
     <View style={styles.nextButtonContainer}>
       <Button style={styles.nextButtonText} title ="Next"/>
     </View>
    </View>
    
  </View>
  )
}
export default Login;