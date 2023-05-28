import { Component } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexLegend,
  ApexDataLabels,
  ApexTooltip,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  colors: string[];
};

@Component({
  selector: 'app-expense-chart',
  templateUrl: './expense-chart.component.html',
  styleUrls: ['./expense-chart.component.scss']
})
export class ExpenseChartComponent {
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [30, 35, 20, 30],
      chart: {
        type: "donut",
        height: 162,
      },
      labels: ["Shopping", "Workspace", "Food", "Entertainments"],
      legend: {
        position: 'right',
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#2D4284", '#425EBD', '#8E9ED6', '#C6CFEB'],
      tooltip: {
        y: {
          formatter: (value) => {
            return value + 'k';
          },
        },
        fillSeriesColor: true,
        onDatasetHover: {
          highlightDataSeries: false
        }
      },
      responsive: [
        {
          breakpoint: 850,
          options: {
            legend: {
              show: false
            }
          }
        }
      ],

    };
  }
}
