import React from 'react'
import { View } from 'react-native';
import { Text } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { colors } from '../utils/colors';

export default function Chart() {
  const ptData = [
    { value: 22, date: '1 Apr 2022' },
    { value: 24, date: '2 Apr 2022', label: '30', labelTextStyle: { color: 'lightgray', width: 60 }, },
    { value: 25, date: '3 Apr 2022' },
    { value: 35, date: '4 Apr 2022' },
    { value: 25, date: '5 Apr 2022' },
    { value: 5, date: '6 Apr 2022' },
    { value: 35, date: '7 Apr 2022' },
    { value: 45, date: '8 Apr 2022', label: '30', labelTextStyle: { color: 'lightgray', width: 60 }, },

    { value: 45, date: '9 Apr 2022' },
    {
      value: 45,
      date: '10 Apr 2022',
      label: '10',
      labelTextStyle: { color: 'lightgray', width: 60 },
    },
    { value: 54, date: '11 Apr 2022' },
    { value: 54, date: '12 Apr 2022' },
    { value: 65, date: '13 Apr 2022' },
    { value: 44, date: '14 Apr 2022' },
    { value: 25, date: '15 Apr 2022' },
    { value: 35, date: '16 Apr 2022', label: '30', labelTextStyle: { color: 'lightgray', width: 60 }, },

    { value: 15, date: '17 Apr 2022' },
    { value: 48, date: '18 Apr 2022' },
    { value: 45, date: '19 Apr 2022' },
    {
      value: 15,
      date: '20 Apr 2022',
      label: '20',
      labelTextStyle: { color: 'lightgray', width: 60 },
    },
    { value: 55, date: '21 Apr 2022' },
    { value: 33, date: '22 Apr 2022' },
    { value: 41, date: '23 Apr 2022' },
    { value: 55, date: '24 Apr 2022', label: '30', labelTextStyle: { color: 'lightgray', width: 60 }, },

    { value: 48, date: '25 Apr 2022' },
    { value: 46, date: '26 Apr 2022' },
    { value: 48, date: '27 Apr 2022' },
    { value: 47, date: '28 Apr 2022' },
    { value: 14, date: '29 Apr 2022', label: '30', labelTextStyle: { color: 'lightgray', width: 60 }, },
    {
      value: 10,
      date: '30 Apr 2022',
      label: '30',
      labelTextStyle: { color: 'lightgray', width: 60 },
    },
    { value: 19, date: '1 May 2022' },
    { value: 20, date: '2 May 2022' },
    { value: 10, date: '3 May 2022' },
    { value: 50, date: '4 May 2022' },
    { value: 30, date: '5 May 2022', label: '30', labelTextStyle: { color: 'lightgray', width: 60 }, },
  ];
  return (
    <View
      style={{
        paddingVertical: 20,
        backgroundColor: colors.bg
      }}>
      <LineChart
        areaChart
        data={ptData}
        width={350}
        hideDataPoints
        spacing={10}
        color={colors.error}
        thickness={2}
        hideRules
        startFillColor={colors.error}
        endFillColor={colors.error}
        startOpacity={0.9}
        endOpacity={0.2}
        initialSpacing={0}
        noOfSections={6}
        maxValue={70}
        yAxisColor="white"
        yAxisThickness={0}
        rulesType="solid"
        rulesColor="gray"
        yAxisTextStyle={{ color: 'gray' }}
        pointerConfig={{
          pointerStripHeight: 160,
          pointerStripColor: 'lightgray',
          pointerStripWidth: 2,
          pointerColor: 'lightgray',
          radius: 6,
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          activatePointersOnLongPress: true,
          autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: (items: any) => {
            return (
              <View
                style={{
                  height: 90,
                  width: 100,
                  justifyContent: 'center',
                }}>
                <Text style={{ color: 'white', fontSize: 14, marginBottom: 6, textAlign: 'center' }}>
                  {items[0].date}
                </Text>

                <View style={{ paddingHorizontal: 14, paddingVertical: 6, borderRadius: 16, backgroundColor: 'white' }}>
                  <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    {'$' + items[0].value + '.0'}
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
    </View>
  )
}
