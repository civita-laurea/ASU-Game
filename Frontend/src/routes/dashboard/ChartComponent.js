import React, { Component } from "react";
import Chart from "react-apexcharts";

class ChartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "radar-chart"
        },
        xaxis: {
            categories: ['Engagement', '% students following the courses??', 'complete(content covered)', 'Clarity', 'variety of level-dificulities', 'useful']
        }
      },
      title: {
        text: 'Radar Chart'
      },
      series: [
        {
          name: "series-1",
          data: [80, 50, 30, 40, 100, 80]
        }
      ]
    };
  }

  render() {
    return (
      <div className="ChartComponent">
        <div className="row">
          <div className="radar-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radar"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChartComponent;
