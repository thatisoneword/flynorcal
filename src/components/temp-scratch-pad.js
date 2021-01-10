makeHighchart(stationId) {
      var container = $('#chart-content-inner');

      var data = {
        title: stations[stationId].title,
        desc: stations[stationId].description,
        dir: [],
        gust: [],
        wind: []
      }

      const history = this.props.stationHistory[this.props.stationId];

      history.map(function(item) {
        data.dir.push([item.epoch*1000, item.winddirAvg]);
        data.gust.push([item.epoch*1000, item.imperial.windgustAvg]);
        data.wind.push([item.epoch*1000, item.imperial.windspeedAvg]);
      });

      //fake json data
      var json = {};
      json.data = data;

      Highcharts.setOptions({
          lang: {
              thousandsSep: '',
              rangeSelectorZoom: ''
          },
          time: {
              /**
               * Use moment-timezone.js to return the timezone offset for individual
               * timestamps, used in the X axis labels and the tooltip header.
               */
               getTimezoneOffset: () => 480
              // getTimezoneOffset: function (timestamp) {
              //     var zone = 'America/Los_Angeles',
              //         timezoneOffset = -moment.tz(timestamp, zone).utcOffset();
              //
              //     return timezoneOffset;
              // }
          }
      });

      /**
       * Synchronize zooming through the setExtremes event handler.
       */
      function syncExtremes(e) {
          var thisChart = this.chart;

          if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
              Highcharts.each(Highcharts.charts, function (chart) {
                  if (chart !== thisChart) {
                      if (chart.xAxis[0].setExtremes) { // It is null while updating
                          chart.xAxis[0].setExtremes(
                              e.min,
                              e.max,
                              undefined,
                              false,
                              {trigger: 'syncExtremes'}
                          );
                      }
                  }
              });
          }
      }

      var xaxis = {
          type: 'datetime',
          tickInterval: 3600 * 1000,
          dateTimeLabelFormats: {
              day: ' ',
              hour: '%l %p'
          },
          gridLineWidth: 1,
          startOnTick: false,
          ordinal: false,
          crosshair: true,
          events: {
              setExtremes: syncExtremes
          }
      };

      var rangeselector = {
          verticalAlign: 'top',
          // buttonPosition: {
              // align: 'right',
              // x: -20
              // y: 30
          // },
          buttons: [{
              type: 'hour',
              count: 1,
              text: '1h'
          }, {
              type: 'hour',
              count: 3,
              text: '3h'
          }, {
              type: 'hour',
              count: 6,
              text: '6h'
          }, {
              type: 'all',
              text: 'All'
          }],
          inputEnabled: false,
          selected: 1
      };

      var rangeselectorHidden = {
          buttonTheme: { // styles for the buttons
              style: {
                  display: 'none'
              }
          },
          labelStyle: {
              display: 'none'
          },
          buttons: [{
              type: 'hour',
              count: 1,
              text: '1h'
          }, {
              type: 'hour',
              count: 3,
              text: '3h'
          }, {
              type: 'hour',
              count: 6,
              text: '6h'
          }, {
              type: 'all',
              text: 'All'
          }],
          inputEnabled: false,
          selected: 1
      };

      var legend = {
          enabled: false,
          layout: 'horizontal',
          // floating: true,
          align: 'left',
          verticalAlign: 'top',
          // borderWidth: 0,
          // y: -5
      };


      if ((json.data.wind !== undefined) && (json.data.gust !== undefined) && (json.data.dir !== undefined)) {
          $('<div class="windspd-chart">').prependTo(container)
              .highcharts('stockChart', {
                  chart: {
                      resetZoomButton: {
                          theme: {
                              display: 'none'
                          }
                      }
                  },
                  legend: this.legend,
                  title: {
                      text: json.data.title
                  },
                  subtitle: {
                      text: json.data.desc
                  },
                  credits: {
                      enabled: false
                  },
                  xAxis: xaxis,
                  yAxis: [{
                      height: '60%',
                      opposite: false,
                      title: {
                          text: ''
                      },
                      allowDecimals: false,
                      tickInterval: 5,
                      labels: {
                          x: -3,
                          y: 3
                      },
                      min: 0,
                      showLastLabel: true,
                      plotLines: [{
                          value: 0,
                          width: 1,
                          color: '#808080'
                      }]
                  },
                  {
                      top: '65%',
                      height: '35%',
                      opposite: false,
                      title: {
                          text: ''
                      },
                      tickInterval: 45,
                      labels: {
                          formatter: function () {
                              var map = {0: "N", 90: "E", 180: "S", 270: "W", 360: "N"}
                              if (this.value in map) {
                                  return map[this.value];
                              }
                              return '';
                          },
                          x: 14,
                          y: 3
                      },
                      min: 0,
                      max: 360,
                      showLastLabel: true,
                      plotLines: [{
                          value: 0,
                          width: 1,
                          color: '#808080'
                      }]
                  }],
                  tooltip: {
                      xDateFormat: '%m/%d/%Y %I:%M %p',
                      shared: true,
                      split: false,
                      positioner: function() {
                          return {
                              x: this.chart.plotSizeX - 100,
                              // x: 30,
                              // y: this.chart.plotTop - 45
                              y: this.chart.plotTop - 70
                          };
                      },
                      // headerFormat: '{p',
                      // pointFormat: '{series.name}: <b>{point.y}</b><br/>',
                      valueDecimals: 2,
                      shadow: false,
                      borderWidth: 1,
                      backgroundColor: 'rgba(255,255,255,0.8)'
                  },
                  // rangeSelector: rangeselector,
                  navigator: {
                      enabled: false
                  },
                  scrollbar: {
                      enabled: false
                  },
                  series: [{
                      name: 'Gust',
                      data: this.data.gust,
                      lineWidth: 0,
                      tooltip: {
                          valueSuffix: ' mph'
                      },
                      marker: {
                          enabled: true,
                          radius: 2
                      },
                      states: {
                          hover: {
                              lineWidthPlus: 0
                          }
                      }
                  },
                  {
                      name: 'Speed',
                      data: this.data.wind,
                      type: 'spline',
                      tooltip: {
                          valueSuffix: ' mph'
                      },
                      marker: {
                          enabled: false
                      }
                  },
                  {
                      name: 'Direction',
                      data: this.data.dir,
                      yAxis: 1,
                      lineWidth: 0,
                      tooltip: {
                          valueSuffix: '°'
                      },
                      marker: {
                          enabled: true,
                          radius: 2
                      },
                      states: {
                          hover: {
                              lineWidthPlus: 0
                          }
                      }
                  }]
              });
      }

  }
