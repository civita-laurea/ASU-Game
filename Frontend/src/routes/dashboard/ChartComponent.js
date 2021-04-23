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

function calcUseful(upvoteRate) {
  return upvoteRate;
}

function calcEngagement(absentRate) {
  return (100 - absentRate);
}

function calcStudentFollowed(lateHomework) {
  return (100 - lateHomework);
}

function calcClarity(upvoteRate, absentRate) {
  return (upvoteRate / 100 * (100 - absentRate));
}

function calcDifficulty(quiz, homework, exam) {
  return ((100 - (quiz + homework + exam) / 3) * 2);
}

function calcAverage(val1, val2, val3) {
  var num = (val1 + val2 + val3) / 3; 
  return (Math.round(num * 100) / 100).toFixed(2);
}

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
            categories: ['Effectiveness', 'Engagement', 'No. of students following the courses', 'Completeness (content covered)', 'Clarity', 'Variety of level-dificulties']
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
          data: [calcAverage(calcUseful(DashboardData[0].upvoteRate), calcUseful(DashboardData[1].upvoteRate), calcUseful(DashboardData[2].upvoteRate)), 
          calcAverage(calcEngagement(DashboardData[0].absentRate), calcEngagement(DashboardData[1].absentRate), calcEngagement(DashboardData[2].absentRate)), 
          calcAverage(calcStudentFollowed(DashboardData[0].lateHomework), calcStudentFollowed(DashboardData[1].lateHomework), calcStudentFollowed(DashboardData[2].lateHomework)), 
          calcAverage(35, 50, 20), calcAverage(calcClarity(DashboardData[0].upvoteRate, DashboardData[0].absentRate), calcClarity(DashboardData[1].upvoteRate, DashboardData[1].absentRate), calcClarity(DashboardData[2].upvoteRate, DashboardData[2].absentRate)), 
          calcAverage(calcDifficulty(DashboardData[0].quiz, DashboardData[0].homework, DashboardData[0].exam), calcDifficulty(DashboardData[1].quiz, DashboardData[1].homework, DashboardData[1].exam), calcDifficulty(DashboardData[2].quiz, DashboardData[2].homework, DashboardData[2].exam))]
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
          size: 4
        },
        plotOptions: {
          radar: {
            size: 180,
          }
        },
        xaxis: {
          categories: ['Effectiveness', 'Engagement', 'No. of students following the courses', 'Completeness (content covered)', 'Clarity', 'Variety of level-dificulties']
        }
      },
      seriesMultiSeries: [
        {
          name: DashboardData[0].name,
          data: [calcUseful(DashboardData[0].upvoteRate), calcEngagement(DashboardData[0].absentRate), calcStudentFollowed(DashboardData[0].lateHomework), 35, 
          calcClarity(DashboardData[0].upvoteRate, DashboardData[0].absentRate), 
          calcDifficulty(DashboardData[0].quiz, DashboardData[0].homework, DashboardData[0].exam)],
        }, 
        {
          name: DashboardData[1].name,
          data: [calcUseful(DashboardData[1].upvoteRate), calcEngagement(DashboardData[1].absentRate), calcStudentFollowed(DashboardData[1].lateHomework), 50, 
          calcClarity(DashboardData[1].upvoteRate, DashboardData[1].absentRate), 
          calcDifficulty(DashboardData[1].quiz, DashboardData[1].homework, DashboardData[1].exam)],
        }, 
        {
          name: DashboardData[2].name,
          data: [calcUseful(DashboardData[2].upvoteRate), calcEngagement(DashboardData[2].absentRate), calcStudentFollowed(DashboardData[2].lateHomework), 20, 
          calcClarity(DashboardData[2].upvoteRate, DashboardData[2].absentRate), 
          calcDifficulty(DashboardData[2].quiz, DashboardData[2].homework, DashboardData[2].exam)],
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
