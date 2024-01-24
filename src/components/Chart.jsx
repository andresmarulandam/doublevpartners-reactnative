import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map((user) => user.login),
    datasets: [
      {
        data: data.map((user) => user.followers || 0),
      },
    ],
  };

  return (
    <View>
      <BarChart
        data={chartData}
        width={Dimensions.get('window').width - 10}
        height={400}
        yAxisLabel=""
        yAxisSuffix=""
        verticalLabelRotation={90}
        showValuesOnTopOfBars={true}
        yLabelsOffset={32}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFromOpacity: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          barPercentage: 0.8,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Chart;
