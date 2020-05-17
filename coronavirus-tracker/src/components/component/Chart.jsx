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
                  borderColor: 'rgba(255, 173, 51, 1)',
                  backgroundColor: 'rgba(255, 173, 51, 0.5)',
                  fill: true, 
              }, {
                data:dailyData.map(({deaths}) => deaths),
                label: 'Deceased',
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
          backgroundColor: [ 'rgba(255, 163, 26, 0.8)', 'rgba(153, 187, 255, 0.8)', 'rgba(255, 0, 0, 0.8)'],
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
