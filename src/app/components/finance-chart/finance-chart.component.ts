import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexLegend,
  ApexFill,
  ApexYAxis,
  ApexMarkers,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  fill: ApexFill;
  markers: ApexMarkers;
};

@Component({
  selector: 'app-finance-chart',
  templateUrl: './finance-chart.component.html',
  styleUrls: ['./finance-chart.component.scss']
})
export class FinanceChartComponent {
  public chartOptions: ChartOptions;
  categories: Array<string> = [
    "2018-09-01T00:00:00.000Z",
    "2018-09-05T00:00:00.000Z",
    "2018-09-10T00:00:00.000Z",
    "2018-09-15T00:00:00.000Z",
    "2018-09-20T00:00:00.000Z",
    "2018-09-25T00:00:00.000Z",
    "2018-09-30T00:00:00.000Z",
  ]
  constructor(private datePipe: DatePipe) {
    this.chartOptions = {
      series: [
        {
          name: "Income",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Outcome",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 200,
        type: "area",
        toolbar: {
          show: false
        },
      },
      markers: {
        colors: ['#E0B1AE', '#2947AA'],
        strokeColors: ['#E0B1AE', '#2947AA'],
      },
      fill: {
        colors: ['#E0B1AE', '#2947AA'],
      },
      legend: {
        position: 'bottom',
        markers: {
          fillColors: ['#E0B1AE', '#2947AA'],
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: ['#E0B1AE', '#2947AA']
      },
      xaxis: {
        type: "datetime",
        categories: this.categories,
        labels: {
          formatter: (value) => {
            return this.datePipe.transform(new Date(value), 'dd') + '';
          },
        }
      },
      yaxis: {
        labels: {
          formatter: (value) => { return value + 'k' },
        },
      },
      tooltip: {
        x: {
          formatter: (value) => {
            return this.datePipe.transform(new Date(value), 'dd-MM-yyyy') + '';
          },
        },
        marker: {
          fillColors: ['#E0B1AE', '#2947AA'],
          show: true
        }
      }
    };
  }

}