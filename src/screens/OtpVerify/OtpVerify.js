import React from "react";
import styles from "./style";
import * as fonts from "../../constants/fonts";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    DeviceEventEmitter
  } from "react-native";

const OtpVerify=()=>{


   const onBackPress=()=> {
        this.props.navigation.goBack();
      }

  const onFinishCheckingCode=(code)=>{

  }


    return (
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
            flexDirection: "column"
          }}
          style={{ backgroundColor: "white" }}
        >
          <SafeAreaView style={{ backgroundColor: "#fff" }}>
            <View style={{ width: "100%", height: "100%" }}>
              <View style={styles.container}>
                <TouchableOpacity
                  style={styles.backArrowStyle}
                  onPress={onBackPress}
                >
                  <Image
                    style={styles.backArrowStyle}
                    source={{ uri: "keyboard_backspace" }}
                  />
                </TouchableOpacity>
                {/* <Text style={styles.verificationCodeStyle}>
                  {titles.TITLE_VERIFICATION_CODE}
                </Text> */}
                <View style={styles.logoContainer}>
                  <Image style={styles.logoStyle} source={{ uri: "logo" }} />
                </View>
                <Text style={styles.enterCodeTextStyle}>
                Please enter the verification code to your phone number
                </Text>
                <ConfirmCodeInput
                  ref="refCodeInput"
                  keyboardType="numeric"
                  activeColor={colors.primaryColor}
                  inactiveColor={colors.primaryColor}
                  autoFocus={false}
                  ignoreCase={true}
                  inputPosition="center"
                  codeLength={6}
                  onFulfill={code =>onFinishCheckingCode(code)}
                  containerStyle={{
                    height: 30,
                    width: "100%"
                  }}
                  codeInputStyle={{
                    height: 45,
                    fontFamily: fonts.FONT_GOOGLE_SANS_MEDIUM,
                    fontSize: 20,
                    color: "#000",
                    borderWidth: 0,
                    borderBottomWidth: 1
                  }}
                />
                <View style={{ width: "100%", height: 20 }} />
                <View
                  style={{
                    width: "100%",
                    flex: 3,
                    alignItems: "center",
                    padding:30
                  }}
                >
                  <Button
                    moreContainerStyle={{
                      borderRadius: 30,
                      backgroundColor: colors.primaryColor,
                    }}
                    moreTextStyle={{
                      fontSize : 18,
                      fontFamily : 'SegoeUI',
                    
  
                    }}
                    buttonTitle={titles.TITLE_VERIFY}
                    onButtonClick={() => {
                      this.onOTPSubmit();
                    }}
                  />
                  {/* <TouchableOpacity
                    style={{ width: "100%", height: 40 }}
                    onPress={() => {
                      this.sendOTP();
                    }}
                  > */}
                    <View style={{flexDirection:'row', marginTop: 50}}>
                    <Text style={{fontSize: 18, color: 'black'}}>
                      Didn't get code? 
                    </Text>
                    <TouchableOpacity
                     onPress={() => {
                       if(!this.state.isDisabledResend) {
                         this.sendOTP();
                       } return {}
                    }}
                     style={{justifyContent:'center'}}>
                  <Text style={{color:this.state.isDisabledResend ? '#797b8a' : '#ffa500', fontSize: 18}}>{'\b'}Resend in</Text>
                    </TouchableOpacity>
                  <Text style={{fontSize: 18, color:'black'}}>{'\b'}00:{this.state.seconds_Counter < 10 ? 0 : null}{this.state.seconds_Counter}s</Text>
                  </View>
                  {/* </TouchableOpacity> */}
                </View>
              </View>
              {this.state.loading ? (
                /* ||
                this.props.loading ||
                this.props.createUserLoading */
                <LoadingView />
              ) : null}
            </View>
          </SafeAreaView>
        </KeyboardAwareScrollView>
      );
}
export default OtpVerify;