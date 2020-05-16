import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  const lineChart = (
      dailyData[0]
      ?(
          <Line 
          data ={{
              labels:dailyData.map(({date}) => date),
              datasets: [{
                  data:dailyData.map(({confirmed}) => confirmed),
                  label: 'Infected',
                  borderColor: '#ffff00',
                  backgroundColor: 'rgba(255, 255, 0, 0.5)',
                  fill: true, 
              }, {
                data:dailyData.map(({deaths}) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true, 
              }]
          }}
          />
      ):null
  );

  const barChart =(
    confirmed
    ? (
      <Bar data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [{
          lablel:'People',
          backgroundColor: [ 'rgba(255, 255, 0, 1)', 'rgba(0, 255, 0, 1)', 'rgba(255, 0, 0, 1)'],
          data: [confirmed.value, recovered.value, deaths.value]
        }]
      }} options={{
        legend: {display: false},
        // eslint-disable-next-line no-template-curly-in-string
        title: {display: true, text:'Current State in ' + country},
      }}
      />
    ): null
  )
return (
    <div className={styles.container}>
        {country ? barChart : lineChart}
    </div>
)
}
export default Chart;
