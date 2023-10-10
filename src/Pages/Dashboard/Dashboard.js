import React, { useState } from 'react';
import './Dashboard.css';
import Chart from "react-apexcharts";

function Dashboard() {
  const [activities, setActivities] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["week1","week2","week3","week4"]
      },
      plotOptions: {
        bar: { 
          columnWidth: '50%', // Adjust the width as needed to add space between bars
        }
      },
    },
    series: [
      {
        name: "User",
        data: [500, 200, 300, 400],
        color: '#98D89E',
      },
      {
        name: "Guest",
        data: [400, 150, 250, 350],
        color: '#EE8484',
      }
    ]
  });
  
  return (
  
    <div>
      <Chart
              options={activities.options}
              series={activities.series}
              type="bar"
              width="500"
            />
    </div>
  )
}

export default Dashboard
