import React, { useEffect, useState, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import 'chartjs-adapter-moment'; // Import the necessary adapter for time-based scales
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify/lib-esm';
import { Button, Grid } from '@mui/material';
import '../styles/Home.css';

import { API, graphqlOperation } from 'aws-amplify';
import * as subscriptions from '../graphql/subscriptions';
import * as queries from '../graphql/queries';

function Home({ signOut }) {
  const [username, setUsername] = useState('');
  const [items, setItems] = useState([]);
  const [charts, setCharts] = useState([]);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const subscription = useRef(null);
 

  useEffect(() => {
    async function fetchItems() {
      try {
        const itemData = await API.graphql(graphqlOperation(queries.listItems));
        const items = itemData.data.listItems.items;
  
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
  
        const itemCharts = items.map((item, index) => {
          const chartCanvas = document.createElement('canvas');
          chartCanvas.width = 100; 
          chartCanvas.height = 100;
  
          const remainingQuantity = 20 - item.quantity;
  
          const chart = new Chart(chartCanvas, {
            type: 'doughnut',
            data: {
              labels: ['Quantity', 'Remaining'],
              datasets: [
                {
                  data: [item.quantity, remainingQuantity],
                  backgroundColor: ['blue', 'lightgray'],
                },
              ],
            },
          });
  
          return chart;
        });
  
        setItems(items);
        setCharts(itemCharts);
      } catch (err) {
        console.log('error fetching items', err);
      }
    }
  
    fetchItems();
  }, []);
    

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUsername(user.username);
      })
      .catch((err) => {
        console.error('Error fetching user:', err);
      });
  }, []);

  useEffect(() => {
    // Register the necessary chart controller
    // Chart.register(Chart.controllers.LineController);

    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current, {
        type: 'line',
        data: {
          datasets: [
            {
              label: 'Blood Glucose Data',
              data: [], // Your data will be pushed here
              fill: false,
              pointRadius: 0,
              borderColor: 'rgba(255, 99, 132, 1)',
            },
          ],
        },
        options: {
          // Your chart options
        },
      });

      // Load initial data from Sugar data model
      // loadInitialData();
    }

    // Subscribe to Sugar data
    subscribeToSugarData();
  }, []);

  // const loadInitialData = async () => {
  //   try {
  //     const initialData = await API.graphql(graphqlOperation(queries.listSugars));
  //     if (initialData && initialData.data && initialData.data.listSugars && initialData.data.listSugars.items) {
  //       const sugarData = initialData.data.listSugars.items;
  //       sugarData.forEach((data) => {
  //         chartInstance.current.data.datasets[0].data.push({
  //           x: data.timestamp, // Update with the correct field names
  //           y: data.sugar, // Update with the correct field names
  //         });
  //       });
  //       chartInstance.current.update();
  //     } else {
  //       console.warn('No initial data found in the response.');
  //     }
  //   } catch (error) {
  //     console.error('Error loading initial data:', error);
  //   }
  // };

  const subscribeToSugarData = async () => {
    const subscriptionQuery = graphqlOperation(subscriptions.onCreateSugar, {
      owner: username, // If you need to filter by owner
    });

    subscription.current = API.graphql(subscriptionQuery).subscribe({
      next: (response) => {
        console.log('Received Sugar data:', response);
        const newData = response.value.data.onCreateSugar;
        chartInstance.current.data.datasets[0].data.push({
          x: newData.timestamp, // Update with the correct field names
          y: newData.sugar, // Update with the correct field names
        });
        chartInstance.current.update();
      },
      error: (error) => {
        console.error('Subscription error:', error);
      },
    });
  };

  useEffect(() => {
    return () => {
      if (subscription.current) {
        subscription.current.unsubscribe();
      }
    };
  }, []);

  return (
    <div className="background-container">
      <div className="user-greeting">Welcome back, {username}!</div>
      <Grid container>
        <Grid item xs={6}>
          <div className="chart-container">
            <canvas ref={chartRef} />
          </div>
        </Grid>
        <Grid item xs={6}>
        {
          items.map((item, index) => (
            <div key={item.id ? item.id : index} className="item">
              <p>Name: {item.name}, Unit: {item.unit}, Quantity: {item.quantity}</p>
              {charts[index] && <div className="chart-container">{charts[index].toBase64Image()}</div>}
            </div>
          ))
        }

        </Grid>
      </Grid>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
}

export default withAuthenticator(Home);
