import React, { Component, useState } from "react";
import RadarChart from "react-apexcharts";
import { Row } from "simple-flexbox";
import { createUseStyles } from 'react-jss';
import DashboardData from './DashboardData';

const useStyles = createUseStyles({
  lastRow: {
      marginTop: 30
  },
  leftChart: {
    marginRight: 30,
    '@media (max-width: 1024px)': {
        marginRight: 0
    }
  },
  rightChart: {
    marginLeft: 0,
    '@media (max-width: 1024px)': {
        marginTop: 30
    }
  }
});


class ChartComponent extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      optionsRadar: {
        chart: {
          id: "radar"
        },
        title: {
          text: 'Radar with Polygon Fill'
        },
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          radar: {
            size: 180,
            polygons: {
              strokeColors: '#e9e9e9',
              fill: {
                colors: ['#f8f8f8', '#fff']
              }
            }
          }
        },
        colors: ['#FF4560'],
        markers: {
          size: 4,
          colors: ['#fff'],
          strokeColor: '#FF4560',
          strokeWidth: 2,
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val
            }
          }
        },
        xaxis: {
            categories: ['Useful', 'Engagement', '% students following the courses ??', 'Complete (content covered)', 'Clarity', 'Variety of level-dificulties']
        },
        yaxis: {
          tickAmount: 6,
          labels: {
            formatter: function(val, i) {
              if (i % 2 === 0) {
                return val
              } else {
                return ''
              }
            }
          }
        }
      },
      seriesRadar: [
        {
          name: "Average",
          data: [73.33, 36.67, 60, 36.67, 53.33, 70]
        }
      ],
      optionsMultiSeries: {
        chart: {
          id: 'multi-series',
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        title: {
          text: 'Radar Chart - Multi Series'
        },
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.1
        },
        markers: {
          size: 0
        },
        plotOptions: {
          radar: {
            size: 180,
          }
        },
        xaxis: {
          categories: ['Useful', 'Engagement', '% students following the courses ??', 'Complete (content covered)', 'Clarity', 'Variety of level-difficulties']
        }
      },
      seriesMultiSeries: [
        {
          name: DashboardData[0].name,
          data: [DashboardData[0].useful, DashboardData[0].engagement, DashboardData[0].studentFollowed, DashboardData[0].complete, DashboardData[0].clarity, DashboardData[0].difficulty],
        }, 
        {
          name: DashboardData[1].name,
          data: [DashboardData[1].useful, DashboardData[1].engagement, DashboardData[1].studentFollowed, DashboardData[1].complete, DashboardData[1].clarity, DashboardData[1].difficulty],
        }, 
        {
          name: DashboardData[2].name,
          data: [DashboardData[2].useful, DashboardData[2].engagement, DashboardData[2].studentFollowed, DashboardData[2].complete, DashboardData[2].clarity, DashboardData[2].difficulty],
        }  
      ]
    };
  }

  render() {
    return (
      <div className="ChartComponent">
        <div className="row">
          <Row
            horizontal='space-between'
            className={useStyles.lastRow}
            breakpoints={{ 1024: 'column' }}
          >
            <div className="radar">
              <RadarChart
                options={this.state.optionsRadar}
                series={this.state.seriesRadar}
                type="radar"
                width="700"
                containerStyles={useStyles.leftChart}
              />
            </div>
            <div className="multi-series">
              <RadarChart
                options={this.state.optionsMultiSeries}
                series={this.state.seriesMultiSeries}
                type="radar"
                width="700"
                containerStyles={useStyles.rightChart}
              />
            </div>
          </Row>
          
        </div>
      </div>
    );
  }
}

export default ChartComponent;
