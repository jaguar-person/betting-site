import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps = []; //dataPoints.
var xVal = 0;
var yVal = 1;
var updateInterval = 10;

class Graph extends Component {
  constructor() {
    super();
    this.updateChart = this.updateChart.bind(this);
    this.timer = null;
    this.state = { yValue: 1 };
  }
  componentDidMount() {
    if (this.timer == null)
      this.timer = setTimeout(this.updateChart, updateInterval);
  }
  updateChart() {
    if (this.chart) {
      yVal = yVal + 0.001;
      this.setState({ yValue: Math.round(yVal * 100) / 100 });
      dps.push({
        x: 10 * xVal,
        y: 1 + xVal * xVal,
        lineColor: "black",
        markerColor: "transparent",
      });
      xVal += 0.001;

      this.chart.render();
      setTimeout(this.updateChart, updateInterval);
    }
  }
  render() {
    const options = {
      axisX: {
        lineThickness: 2,
        labelFontColor: "black",
        lineColor: "black",
        gridColor: "transparent",
      },
      axisY: {
        lineThickness: 2,
        lineColor: "black",
        gridColor: "transparent",
        labelFontColor: "black",
        suffix: "x",
        minimum: 1,
      },
      animationEnabled: true,
      theme: "light2",
      backgroundColor: "#555",
      data: [
        {
          type: "spline",
          dataPoints: dps,
        },
      ],
    };

    return (
      <div>
        <p className="text-right text-gray-400">Max profit: B13.16</p>
        <div className="relative">
          <div className="absolute top-20 w-full z-10 text-8xl text-center">
            {this.state.yValue}x
          </div>
          <CanvasJSChart
            options={options}
            containerProps={{ width: "100%", height: "200px" }}
            onRef={(ref) => (this.chart = ref)}
          />
        </div>
        <div className="flex">
          {Array(6)
            .fill(null)
            .map((val, index) => {
              return (
                <div className="mx-auto text-green-400" key={index}>
                  4.52x
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Graph;
