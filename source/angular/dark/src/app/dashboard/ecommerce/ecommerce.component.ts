import { Component, OnInit } from '@angular/core';

declare const $: any;
declare const Morris: any;

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(function() {
      initCharts();
      initLineChart();
      initKnobChart();
  });

  function initKnobChart(){
    $('.knob').knob({
      draw: function () {
          // "tron" case
          if (this.$.data('skin') == 'tron') {

              var a = this.angle(this.cv)  // Angle
                  , sa = this.startAngle          // Previous start angle
                  , sat = this.startAngle         // Start angle
                  , ea                            // Previous end angle
                  , eat = sat + a                 // End angle
                  , r = true;

              this.g.lineWidth = this.lineWidth;

              this.o.cursor
                  && (sat = eat - 0.3)
                  && (eat = eat + 0.3);

              if (this.o.displayPrevious) {
                  ea = this.startAngle + this.angle(this.value);
                  this.o.cursor
                      && (sa = ea - 0.3)
                      && (ea = ea + 0.3);
                  this.g.beginPath();
                  this.g.strokeStyle = this.previousColor;
                  this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                  this.g.stroke();
              }

              this.g.beginPath();
              this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
              this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
              this.g.stroke();

              this.g.lineWidth = 2;
              this.g.beginPath();
              this.g.strokeStyle = this.o.fgColor;
              this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
              this.g.stroke();

              return false;
          }
      }
  });

  }

  function initCharts() {
    //Chart Bar
    $('.chart.chart-bar').sparkline(undefined, {
        type: 'bar',
        barColor: '#fff',
        negBarColor: '#fff',
        barWidth: '4px',
        height: '45px'
    });
    $('.chart.chart-bar2').sparkline(undefined, {
        type: 'bar',
        barColor: '#fff',
        negBarColor: '#000',
        barWidth: '4px',
        height: '65px'
    });

    //Chart Pie
    $('.chart.chart-pie').sparkline(undefined, {
        type: 'pie',
        height: '45px',
        sliceColors: ['rgba(255,255,255,0.70)', 'rgba(255,255,255,0.85)', 'rgba(255,255,255,0.95)', 'rgba(255,255,255,1)']
    });

    //Chart Line
    $('.chart.chart-line').sparkline(undefined, {
        type: 'line',
        width: '60px',
        height: '45px',
        lineColor: '#fff',
        lineWidth: 1.3,
        fillColor: 'rgba(0,0,0,0)',
        spotColor: 'rgba(255,255,255,0.40)',
        maxSpotColor: 'rgba(255,255,255,0.40)',
        minSpotColor: 'rgba(255,255,255,0.40)',
        spotRadius: 3,
        highlightSpotColor: '#fff'
    });
}

function initLineChart(){

	Morris.Line({
        element: 'line_chart',
        data: [{
            period: '2008',
            iphone: 35,
            ipad: 67,
            itouch: 15
        },{
            period: '2009',
            iphone: 140,
            ipad: 189,
            itouch: 67
        },{
            period: '2010',
            iphone: 50,
            ipad: 80,
            itouch: 22
        },{
            period: '2011',
            iphone: 180,
            ipad: 220,
            itouch: 76
        }, {
            period: '2012',
            iphone: 130,
            ipad: 110,
            itouch: 82
        }, {
            period: '2013',
            iphone: 80,
            ipad: 60,
            itouch: 85
        }, {
            period: '2014',
            iphone: 78,
            ipad: 205,
            itouch: 135
        }, {
            period: '2015',
            iphone: 180,
            ipad: 124,
            itouch: 140
        }, {
            period: '2016',
            iphone: 105,
            ipad: 100,
            itouch: 85
        },
        {
            period: '2017',
            iphone: 210,
            ipad: 180,
            itouch: 120
        }
    ],
    xkey: 'period',
    ykeys: ['iphone', 'ipad', 'itouch'],
    labels: ['iPhone', 'iPad', 'iPod Touch'],
    pointSize: 3,
    fillOpacity: 0,
    pointStrokeColors: ['#222222', '#cccccc', '#f96332'],
    behaveLikeLine: true,
    gridLineColor: '#e0e0e0',
    lineWidth: 2,
    hideHover: 'auto',
    lineColors: ['#222222', '#20B2AA', '#f96332'],
    resize: true
    });
}

  }

  

}
