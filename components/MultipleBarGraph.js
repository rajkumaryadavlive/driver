import React from 'react';
import {View} from 'react-native';

import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryLegend,
  VictoryAxis,
} from 'victory-native';
import {wp} from '../constants/dimensions';

const dayColor = '#c3f4f0';
const weekColor = '#17fff9';
const monthColor = '#09d8ce';

const MultipleBarGraph = props => {
  const {graphData} = props;

  console.log(graphData);

  // const data = {
  //   day: [
  //     { x: "Total Earning", y: 69 },
  //     { x: "Total Trips", y: 20 },
  //     { x: "Miles per Hour", y: 70 },
  //   ],
  //   week: [
  //     { x: "Total Earning", y: 40 },
  //     { x: "Total Trips", y: 10 },
  //     { x: "Miles per Hour", y: 80 },
  //   ],
  //   month: [
  //     { x: "Total Earning", y: 50 },
  //     { x: "Total Trips", y: 30 },
  //     { x: "Miles per Hour", y: 60 },
  //   ],
  // };
  const animation = {duration: 2000, onLoad: {duration: 1000}};

  return (
    <View>
      <VictoryChart>
        {/* <VictoryAxis label="Week" />
        <VictoryAxis
          dependentAxis
          label="Hours"
          style={{
            axisLabel: {
              padding: 30,
            },
          }}
        /> */}
        <VictoryGroup offset={20.3}>
          <VictoryBar
            labels={graphData.day.map(val => val.y)}
            barWidth={20}
            data={graphData.day}
            animate={animation}
            style={{data: {fill: dayColor}}}
          />

          <VictoryBar
            barWidth={20}
            labels={graphData.week.map(val => val.y)}
            data={graphData.week}
            style={{data: {fill: weekColor}}}
            animate={animation}
          />
          <VictoryBar
            barWidth={20}
            labels={graphData.month.map(val => val.y)}
            data={graphData.month}
            animate={animation}
            style={{data: {fill: monthColor}}}
          />
        </VictoryGroup>
        <VictoryLegend
          x={wp(25)}
          orientation="horizontal"
          data={[
            {
              name: 'Day',
              symbol: {
                fill: dayColor,
              },
            },
            {
              name: 'Week',
              symbol: {
                fill: weekColor,
              },
            },
            {
              name: 'Month',
              symbol: {
                fill: monthColor,
              },
            },
          ]}
        />
      </VictoryChart>
    </View>
  );
};

export default MultipleBarGraph;
