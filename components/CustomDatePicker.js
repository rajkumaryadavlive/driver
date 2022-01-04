import React, { useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

const CustomDatePicker = (props) => {
  const { onChange, notTouchedValue, touchedValue, date, containerStyle } =
    props;

  const [date, setDate] = useState(new Date());
  const [touched, setTouched] = useState(false);
  const [show, setShow] = useState(false);
  const [dobError, setDobError] = useState(false);

  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0");
  let yyyy = date.getFullYear();

  let newDate = yyyy + "-" + mm + "-" + dd;
  console.log(newDate);

  let today = new Date().getFullYear();
  let age = today - yyyy;
  console.log(age);

  const showMode = () => {
    setShow(true);
    setTouched(true);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={showMode}>
        <View style={styles.textInput}>
          {show ? (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              onChange={onChange}
              maximumDate={new Date()}
              minimumDate={new Date(2054)}
            />
          ) : !touched ? (
            <Text style={{ color: "#ccc" }}>YYYY-MM-DD</Text>
          ) : (
            <Text style={{ color: "black" }}>{newDate}</Text>
          )}
        </View>
        {age < 18 && (
          <ErrorMessage
            error="Date Invalid - Age should be more than 18."
            visible={dobError}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomDatePicker;
