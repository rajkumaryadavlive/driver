import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./style";

const AddCreditScreen = (props) => {
  const CompanyCard = ({
    QRcode,
    companyImg,
    accountName = "GOGO & Co Booking",
    accountNumber = "40000",
    onPress,
  }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: QRcode }} style={styles.image} />
            </View>
            <View style={styles.secondContainer}>
              <View style={styles.companyImage}>
                <Image source={{ uri: companyImg }} style={styles.image} />
              </View>
              <Text numberOfLines={1} style={styles.accountNameNumber}>
                Account Name: {accountName}
              </Text>
              <Text style={styles.accountNameNumber}>
                Account Number: {accountNumber}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Please transfer cash to GOGO EAT account via below company
      </Text>
      <CompanyCard
        QRcode="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
        companyImg="https://im0-tub-ru.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d&n=27&h=480&w=480"
        onPress={() => console.log("This is from add credit screen")}
      />
      <CompanyCard
        QRcode="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
        companyImg="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
      />
      <CompanyCard
        QRcode="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
        companyImg="https://cdn.ceoworld.biz/wp-content/uploads/2019/06/Apple.jpg"
      />
    </View>
  );
};

export default AddCreditScreen;
