import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

import CustomActivityIndicator from "../../components/CustomActivityIndicator";
import CustomMap from "../MapScreen";
import * as colors from "../../constants/colors";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import { hp, wp } from "../../constants/dimensions";
import MultipleBarGraph from "../../components/MultipleBarGraph";
import dashboardApi from "../../api/dashboard";
import useAuth from "../../hooks/useAuth";

const lightBlue = "#8380f9";
const Home = ({ route, navigation }) => {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);

  const { token: userToken } = useAuth();

  const getGraphData = async () => {
    const result = await dashboardApi.getDashBoardData(userToken);
    if (!result.ok) {
      console.log("====================================");
      console.log(result.data);
      console.log("====================================");
      // alert(result.data);
      return;
    }
    console.log(result.data);
    setData({ ...result.data.data });
    setLoaded(true);
  };

  useEffect(() => {
    getGraphData();
  }, []);

  const HeadingComponent = () => {
    return (
      <View>
        <View style={styles.horizontalView}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>DASHBOARD</Text>
          </View>
          <View style={styles.dayBox}>
            <Text style={styles.dayText}>DAY</Text>
          </View>
        </View>
      </View>
    );
  };

  const Box2 = ({ separator, title, count, iconName, f5, f }) => {
    return (
      <View style={styles.horizontalView}>
        <View style={styles.tripsView}>
          {f5 && (
            <FontAwesome5 name={iconName} color={colors.whiteColor} size={20} />
          )}
          {f && (
            <FontAwesome name={iconName} color={colors.whiteColor} size={20} />
          )}
          <Text style={styles.subTitle}>{title}</Text>
        </View>
        <View style={styles.dayNumberBox}>
          <Text style={styles.dayText}>{count}</Text>
        </View>
        {separator && <View style={styles.separator} />}
      </View>
    );
  };

  const Box3 = ({ separator, title, count, heading }) => {
    return (
      <View>
        {heading && (
          <View style={styles.box3}>
            <Text style={[styles.headingText, { marginLeft: wp(3) }]}>
              {title}
            </Text>
          </View>
        )}
        <View style={styles.horizontalView}>
          <View style={styles.box3Content}>
            <Text style={styles.dayText}>{count}</Text>
          </View>
          {separator && <View style={styles.separator} />}
        </View>
      </View>
    );
  };

  return (
    <Screen>
      <ScrollView>
        <View style={{ marginTop: hp(15) }}>
          <AppButton
            title="DELIVERY JOBS"
            onPress={() => navigation.navigate("Map")}
            style={{ width: wp(37), padding: hp(1) }}
            textStyle={{ fontSize: hp(2.3), fontWeight: "700" }}
          />
        </View>
        {loaded ? (
          <View style={styles.dataContainer}>
            <View style={styles.horizontalView}>
              <View>
                <HeadingComponent />
                <Box2
                  separator
                  title="TRIPS"
                  count={data.day[1].y}
                  iconName="route"
                  f5
                />
              </View>
              <View style={styles.horizontalView}>
                <Box3 title="WEEK" count={data.week[1].y} separator heading />
                <Box3 title="MONTH" count={data.month[1].y} heading />
              </View>
            </View>
            <View style={{ marginTop: hp(1), flexDirection: "row" }}>
              <Box2
                title="TOTAL EARNINGS"
                count={data.day[0].y}
                separator
                iconName="money-check-alt"
                f5
              />
              <Box3 count={data.week[0].y} separator />
              <Box3 count={data.month[0].y} />
            </View>
            <View style={{ marginTop: hp(1), flexDirection: "row" }}>
              <Box2
                title="MILES/HR"
                count={data.day[2].y}
                separator
                iconName="tachometer"
                f
              />
              <Box3 count={data.week[2].y} separator />
              <Box3 count={data.month[2].y} />
            </View>
          </View>
        ) : (
          <CustomActivityIndicator visible={!loaded} />
          // <ActivityIndicator animating={!loaded} size={"large"} color="blue" />
        )}
        {loaded ? (
          <MultipleBarGraph graphData={data} />
        ) : (
          <CustomActivityIndicator visible={!loaded} />
          // <ActivityIndicator animating={!loaded} size="large" color="blue" />
        )}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  box3: {
    backgroundColor: lightBlue,
    width: wp(25),
  },
  box3Content: {
    height: hp(8),
    backgroundColor: colors.primaryColor,
    justifyContent: "center",
    width: wp(25),
  },
  dataContainer: {
    alignItems: "center",
    elevation: 5,
    padding: hp(2),
    backgroundColor: colors.whiteColor,
    marginTop: hp(2),
  },
  dayBox: {
    backgroundColor: lightBlue,
    justifyContent: "center",
    width: wp(15),
  },
  dayNumberBox: {
    width: wp(15),
    height: hp(8),
    backgroundColor: colors.primaryColor,
    justifyContent: "center",
  },
  dayText: {
    color: "white",
    marginLeft: wp(3),
    fontWeight: "700",
  },
  headingContainer: {
    backgroundColor: "#1919bf",
    width: wp(25),
    alignItems: "center",
  },
  headingText: {
    fontWeight: "700",
    color: colors.whiteColor,
  },
  horizontalView: {
    flexDirection: "row",
  },
  separator: {
    backgroundColor: lightBlue,
    width: wp(2),
    height: hp(8),
  },
  subTitle: {
    color: colors.whiteColor,
    fontWeight: "700",
    fontSize: hp(1.7),
    width: "60%",
  },
  text: {
    color: "white",
    fontWeight: "700",
  },
  tripsView: {
    width: wp(25),
    height: hp(8),
    backgroundColor: lightBlue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default Home;
{
  /* <CustomMap
        openDrawer={() => navigation.openDrawer()}
        navigation={navigation}
      /> */
}
