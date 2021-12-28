import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { RadioButton, Divider } from "react-native-paper";

import styles from "./style";
import { primaryColor } from "../../constants/colors";
import AppButton from "../../components/AppButton";

const ChangeLanguageScreen = (props) => {
  const [checked, setChecked] = useState("English");

  const RadioComponent = ({ title, flagUrl, value }) => {
    return (
      <View style={styles.nameAndRadio}>
        <View style={styles.flagAndName}>
          <View style={styles.flagContainer}>
            <Image source={{ uri: flagUrl }} style={styles.image} />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>

        <RadioButton
          value={value}
          status={checked === value ? "checked" : "unchecked"}
          onPress={() => setChecked(value)}
          color={primaryColor}
          uncheckedColor={primaryColor}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <RadioComponent
        title="ភាសាខ្មែរ"
        value="Khmer"
        flagUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1200px-Flag_of_Cambodia.svg.png"
      />
      <Divider style={styles.divider} />
      <RadioComponent
        title="English"
        value="English"
        flagUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png"
      />
      <Divider style={styles.divider} />
      <RadioComponent
        title="中国"
        value="China"
        flagUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png"
      />
      <AppButton
        title="CHANGE"
        onPress={() => console.log(checked)}
        style={styles.button}
      />
    </View>
  );
};

export default ChangeLanguageScreen;
