import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const Piechart = ({count}) => {

  const { Ah, Um, Er, Well, So, Like, But, Repeats } = count;
  const pieChartData = {
    labels: ['Ah', 'Um', 'Er',' Well','So', 'Like', 'But', 'Repeats' ],
    datasets: [
      {
        label: 'ToastMaster Ah Counter',
        data: [Ah, Um, Er, Well, So, Like, But, Repeats],
        backgroundColor: [
          'rgba(255, 173, 173,0.8)',
          'rgba(253, 255, 182,0.8)',
          'rgba(202, 255, 191,0.8)',
          'rgba(255, 173, 173,0.8)',
          'rgba(155, 246, 255,0.8)',
          'rgba(160, 196, 255,0.8)',
          'rgba(189, 178, 255,0.8)',
          'rgba(255, 198, 255,0.8)',
        ],
        borderColor: [
          'rgba(255, 173, 173,1)',
          'rgba(253, 255, 182,1)',
          'rgba(202, 255, 191,1)',
          'rgba(255, 173, 173,1)',
          'rgba(155, 246, 255,1)',
          'rgba(160, 196, 255,1)',
          'rgba(189, 178, 255,1)',
          'rgba(255, 198, 255,1)',
        ],
        borderWidth: 1,
      },
    ]
  };

  const options = {
    maintainAspectRatio: false,
    // responsive: true,
    plugins:{
      legend: {
        layout: {
          margin:{
              // top:10,
              // right:50
          }
        },
        position: 'left',
        labels: {
          // fontSize: 35,
          padding: 15,
        }
      },
    }
  };


  return (
    <div className='piechart'>
        <div style={{ padding:'10px', width:'100%', height:'40vh' } }>
            <Pie data={pieChartData} options={options}/>
        </div>
    </div>
  )
}

export default Piechart