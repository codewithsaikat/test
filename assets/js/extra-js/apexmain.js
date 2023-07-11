// GroupBarChart

function groupBarChart(idName, width, height = "307") {
    var optionRadial = {
        chart: {
            width: width,
            height: height,
            type: 'bar',
            // parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        series: [{
            name: 'Open Rate',
            data: [45, 70, 35, 70, 56, 88, 53]
        }, {
            name: 'Click Rate',
            data: [30, 50, 30, 50, 50, 50, 50]
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30%',
                spacing: 100,
                borderRadius: 2,
                pointWidth: 10,
                barSpacing: '30px'
            },


        },
        colors: ['#BB87FF', '#7FD4FF'],

        grid: {
            borderColor: '#c7d2dd',
            strokeDashArray: 4,
            padding: {
                top: 7,
                right: 15,
                bottom: 5,
                left: 10,
            }
        },

        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },

        xaxis: {
            categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],

            labels: {
                style: {
                    colors: '#8C90A4',
                    fontSize: '14px',
                    fontWeight: 'normal',
                    fontFamily: 'Poppins,sans-serif',
                },
            },
            axisBorder: {

                show: false

            },
            axisTicks: {
                show: false,
            },

        },

        yaxis: {
            min: 0,
            max: 100,
            tickAmount: 4,
            labels: {
                align: 'left',
                style: {
                    colors: '#8C90A4',
                    fontSize: '14px',
                    fontWeight: 'normal',
                    fontFamily: 'Poppins,sans-serif',
                },
                formatter: function (value) {
                    return value.toFixed(0) + "%";
                }
            },
            axisBorder: {
                show: false,
            },
        },

        legend: {
            horizontalAlign: 'center',
            position: 'top',
            fontSize: '16px',
            fontWeight: 400,
            fontFamily: 'Poppins,sans-serif',
            offsetY: 0,
            labels: {
                colors: '#525768',
            },
            markers: {
                width: 7,
                height: 7,
                radius: 15,
                fillColors: ['#7811FF', '#00AAFF'],
                offsetX: -3,
            },
            itemMargin: {
                horizontal: 13,
                vertical: 0
            },
        },



        tooltip: {
            enabled: true,
            style: {
                fontSize: '14px',
                fontFamily: 'Poppins, sans-serif',
            },
            tooltip: {
                custom: function ({
                    series,
                    seriesIndex,
                    dataPointIndex,
                    w
                }) {
                    return (
                        '<div class="arrow_box">' +
                        "<span>" +
                        w.globals.labels[dataPointIndex] +
                        ": " +
                        series[seriesIndex][dataPointIndex] +
                        "</span>" +
                        "</div>"
                    );
                }
            },
            y: {
                formatter: function (val) {
                    return val
                }
            },

        },

    };
    if ($(idName).length > 0) {
        new ApexCharts(document.querySelector(idName), optionRadial).render();
    }
}
groupBarChart('.GroupedBarChart', '100%', 307);


//area chart

function areaChart(idName, width, height = "307") {
    var optionRadial = {
        chart: {
            width: width,
            height: height,
            type: 'line',
            stacked: false,
            toolbar: {
                show: false,
            },
        },
        colors: ['#7811FF', '#00AAFF'],
        dataLabels: {
            enabled: false,
        },

        stroke: {
            curve: 'smooth',
            width: 3,
        },

        legend: {
            horizontalAlign: 'center',
            position: 'top',
            fontSize: '16px',
            fontWeight: 400,
            offsetY: 0,
            labels: {
                colors: '#525768',
            },
            markers: {
                width: 7,
                height: 7,
                radius: 15,
                fillColors: ['#7811FF', '#00AAFF'],
                offsetX: -3,
            },
            itemMargin: {
                horizontal: 13,
                vertical: 0
            },
        },
        tooltip: {
            enabled: true,
            style: {
                fontSize: '14px',
                fontFamily: 'Poppins, sans-serif',
            },
            tooltip: {
                custom: function ({
                    series,
                    seriesIndex,
                    dataPointIndex,
                    w
                }) {
                    return (
                        '<div class="arrow_box">' +
                        "<span>" +
                        w.globals.labels[dataPointIndex] +
                        ": " +
                        series[seriesIndex][dataPointIndex] +
                        "</span>" +
                        "</div>"
                    );
                }
            },
            y: {
                formatter: function (val) {
                    return val
                }
            },

        },

        grid: {
            borderColor: '#c7d2dd',
            strokeDashArray: 4,
            padding: {
                top: 7,
                right: 15,
                bottom: 5,
                left: 10,
            }
        },
        series: [{
                name: 'Subscribes',
                data: [{
                        x: "Jan",
                        y: 100
                    }, {
                        x: "Feb",
                        y: 400
                    }, {
                        x: "Mar",
                        y: 170
                    }, {
                        x: "Apr",
                        y: 400
                    }, {
                        x: "May",
                        y: 250
                    }, {
                        x: "Jun",
                        y: 500
                    }, {
                        x: "Jul",
                        y: 180
                    },
                    {
                        x: "Aug",
                        y: 400
                    },
                    {
                        x: "Sep",
                        y: 210
                    },
                    {
                        x: "Oct",
                        y: 500
                    },
                    {
                        x: "Nov",
                        y: 280
                    },
                    {
                        x: "Dec",
                        y: 800
                    }
                ],
            },
            {
                name: 'Unsubscribes',
                data: [{
                        x: "Jan",
                        y: 700
                    }, {
                        x: "Feb",
                        y: 100
                    }, {
                        x: "Mar",
                        y: 800
                    }, {
                        x: "Apr",
                        y: 300
                    }, {
                        x: "May",
                        y: 400
                    }, {
                        x: "Jun",
                        y: 100
                    }, {
                        x: "Jul",
                        y: 500
                    },
                    {
                        x: "Aug",
                        y: 200
                    },
                    {
                        x: "Sep",
                        y: 700
                    },
                    {
                        x: "Oct",
                        y: 100
                    },
                    {
                        x: "Nov",
                        y: 700
                    },
                    {
                        x: "Dec",
                        y: 300
                    }
                ],

            }
        ],

        xaxis: {
            labels: {
                style: {
                    colors: '#8C90A4',
                    fontSize: '14px',
                    fontWeight: 'normal',
                    fontFamily: 'Poppins,sans-serif',
                },
            },
            axisBorder: {

                show: false

            },
            axisTicks: {
                show: false,
            },

        },

        yaxis: {
            min: 100,
            max: 800,
            tickAmount: 4,
            labels: {
                style: {
                    colors: '#8C90A4',
                    fontSize: '14px',
                    fontWeight: 'normal',
                    fontFamily: 'Poppins,sans-serif',
                },

            },
            axisBorder: {
                show: false,
            },
        },
    };
    if ($(idName).length > 0) {
        new ApexCharts(document.querySelector(idName), optionRadial).render();
    }
}
areaChart('.AreaChartBasic', '100%', 307);

//area chart-2
function areaRationChart(idName, width, height = "307") {
    var optionRadial = {
        chart: {
            width: width,
            height: height,
            type: 'line',
            stacked: false,
            toolbar: {
                show: false,
            },
        },
        colors: ['#7811FF', '#00AAFF'],
        dataLabels: {
            enabled: false,
        },

        stroke: {
            curve: 'smooth',
            width: 3,
        },

        legend: {
            horizontalAlign: 'center',
            position: 'top',
            fontSize: '16px',
            fontWeight: 400,
            offsetY: 0,
            labels: {
                colors: '#525768',
            },
            markers: {
                width: 7,
                height: 7,
                radius: 15,
                fillColors: ['#7811FF', '#00AAFF'],
                offsetX: -3,
            },
            itemMargin: {
                horizontal: 13,
                vertical: 0
            },
        },
        tooltip: {
            enabled: true,
            style: {
                fontSize: '14px',
                fontFamily: 'Poppins, sans-serif',
            },
            tooltip: {
                custom: function ({
                    series,
                    seriesIndex,
                    dataPointIndex,
                    w
                }) {
                    return (
                        '<div class="arrow_box">' +
                        "<span>" +
                        w.globals.labels[dataPointIndex] +
                        ": " +
                        series[seriesIndex][dataPointIndex] +
                        "</span>" +
                        "</div>"
                    );
                }
            },
            y: {
                formatter: function (val) {
                    return val
                }
            },

        },

        grid: {
            borderColor: '#c7d2dd',
            strokeDashArray: 4,
            padding: {
                top: 7,
                right: 15,
                bottom: 5,
                left: 10,
            }
        },
        series: [{
                name: 'Bounce Rate',
                data: [{
                        x: "Jan",
                        y: 0
                    }, {
                        x: "Feb",
                        y: 70
                    }, {
                        x: "Mar",
                        y: 30
                    }, {
                        x: "Apr",
                        y: 10
                    }, {
                        x: "May",
                        y: 80
                    }, {
                        x: "Jun",
                        y: 55
                    }, {
                        x: "Jul",
                        y: 10
                    },
                    {
                        x: "Aug",
                        y: 60
                    },
                    {
                        x: "Sep",
                        y: 21
                    },
                    {
                        x: "Oct",
                        y: 70
                    },
                    {
                        x: "Nov",
                        y: 20
                    },
                    {
                        x: "Dec",
                        y: 0
                    }
                ],
            },
            {
                name: 'Unsubscribes',
                data: [{
                        x: "Jan",
                        y: 45
                    }, {
                        x: "Feb",
                        y: 20
                    }, {
                        x: "Mar",
                        y: 50
                    }, {
                        x: "Apr",
                        y: 30
                    }, {
                        x: "May",
                        y: 10
                    }, {
                        x: "Jun",
                        y: 75
                    }, {
                        x: "Jul",
                        y: 30
                    },
                    {
                        x: "Aug",
                        y: 10
                    },
                    {
                        x: "Sep",
                        y: 70
                    },
                    {
                        x: "Oct",
                        y: 20
                    },
                    {
                        x: "Nov",
                        y: 60
                    },
                    {
                        x: "Dec",
                        y: 55
                    }
                ],

            }
        ],

        xaxis: {
            labels: {
                align: 'right',
                style: {
                    colors: '#8C90A4',
                    fontSize: '14px',
                    fontWeight: 'normal',
                    fontFamily: 'Poppins,sans-serif',
                },
            },
            axisBorder: {

                show: false

            },
            axisTicks: {
                show: false,
            },

        },

        yaxis: {
            min: 0,
            max: 100,
            tickAmount: 4,
            labels: {
                style: {
                    colors: '#8C90A4',
                    fontSize: '14px',
                    fontWeight: 'normal',
                    fontFamily: 'Poppins,sans-serif',
                },
                formatter: function (value) {
                    return value.toFixed(0) + "%";
                }

            },
            axisBorder: {
                show: false,
            },
        },
    };
    if ($(idName).length > 0) {
        new ApexCharts(document.querySelector(idName), optionRadial).render();
    }
}
areaRationChart('.AreaRationChartBasic', '100%', 307);



// <!-- radial-bar-chart -->

function radialBarChart(idName, width, height = "307") {
    var optionRadial = {
        chart: {
            width: width,
            height: height,
            type: 'radialBar',
            toolbar: {
                show: false,
            },
        },
        series: [72],
        colors: ['#7811FF', '#EBDBFF'],
        plotOptions: {
            radialBar: {
                offsetY: 0,

                hollow: {
                    margin: 0,
                    size: "65%",
                },

                track: {
                    background: '#EBDBFF',
                },

                dataLabels: {
                    name: {
                        offsetY: -13,
                        color: "#090E30",
                        fontSize: "16px",
                        fontWeight: "500",
                        fontFamily: 'Poppins,sans-serif',

                    },
                    value: {
                        offsetY: 15,
                        color: "#090E30",
                        fontSize: "30px",
                        fontWeight: "600",
                        fontFamily: 'Poppins,sans-serif',
                        show: true,
                        formatter: function (val) {
                            return '$' + (val * 170);
                        }
                    },
                },

            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ['Revenue', 'orders'],
        legend: {
            show: true,
            floating: true,
            fontSize: '14px',
            position: 'bottom',
            fontFamily: 'Poppins,sans-serif',
            offsetX: 0,
            offsetY: -12,
            labels: {
                useSeriesColors: false,

            },
            onItemClick: {
                toggleDataSeries: false // Prevent toggling of data series on legend click
            },

            markers: {
                width: 7,
                height: 7,
                radius: 15,
                fillColors: ['#7811FF', '#EBDBFF'],
                offsetX: -3,
            },
            itemMargin: {
                horizontal: 15,
                vertical: 0
            },

        },
        grid: {
            padding: {
                top: -7,
                right: 0,
                bottom: 30,
                left: 0
            },
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    show: false
                }
            }
        }]
    }


    if ($(idName).length > 0) {
        new ApexCharts(document.querySelector(idName), optionRadial).render();
    }
}
radialBarChart('.RadialBarChart', '100%', 307);

/* Pie Chart */
function pieChart(idName, series, width, height = "270") {
    var optionsPie = {
        series: series,
        labels: ['Facebook', 'Twitter', 'Google'],
        colors: ['#8231D3', '#00AAFF', '#5840FF'],
        chart: {
            type: 'pie',
            group: 'social',
            width: width,
            height: 270,
        },
        legend: {
            show: false,
            position: 'bottom',
            horizontalAlign: 'center',
            floating: false,
            fontSize: '15px',
            fontFamily: 'Jost, sans-serif',
            fontWeight: 400,
            labels: {
                colors: '#525768',
            },
            markers: {
                width: 7,
                height: 7,
                radius: 20,
                offsetX: -4,
            },
            itemMargin: {
                horizontal: 10,
                vertical: 10,
            },
            onItemClick: {
                toggleDataSeries: true
            },
            onItemHover: {
                highlightDataSeries: true
            },
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    minAngleToShowLabel: undefined
                },
            }
        },
        responsive: [{
            breakpoint: 1399,
            options: {
                chart: {
                    width: "100%"
                },

            }
        }]
    };
    if ($(idName).length > 0) {
        new ApexCharts(document.querySelector(idName), optionsPie).render();
    }
}

pieChart('.apexPieTodayBasic', [20, 20, 60], '100%', 270);



/* Apex Page */
storage('.storage2', [90], 310);

/* Static Chart */
function storage(idName, series, height) {
    var storage = {
        chart: {
            height: height,
            type: "radialBar"
        },

        series: series,

        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: "70%",
                },

                dataLabels: {
                    showOn: "always",
                    style: {
                        fontFamily: 'Jost, sans-serif',
                    },
                    name: {
                        show: false,
                    },
                    value: {
                        color: "currentColor",
                        fontSize: "45px",
                        fontWeight: "600",
                        offsetY: 20,
                        show: true,
                        formatter: function (val) {
                            return val + '%'
                        }
                    },
                    track: {
                        background: "rgba(130,49,211, .10)",
                    },
                }
            }
        },

        colors: ["currentColor"],
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "horizontal",
                gradientToColors: ["currentColor"],
                stops: [0, 100]
            }
        },

        grid: {
            padding: {
                top: -23,
                bottom: -16,
            }
        },

        stroke: {
            lineCap: "round",
        },
    };
    if ($(idName).length > 0) {
        new ApexCharts(document.querySelector(idName), storage).render();
    }
}
storage('.storage', [90], 271);

//basics bar
function barChart(idName, width, height = "270") {
    var optionRadial = {
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        colors: ['#8231D3'],
        chart: {
            width: width,
            height: height,
            type: 'bar',
        },
        legend: {
            show: false
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ["Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
            ],
        }

    };
    if ($(idName).length > 0) {
        new ApexCharts(document.querySelector(idName), optionRadial).render();
    }
}
barChart('.barChart', '100%', 270);



//group bar
function groupBarChartBasic(idName, width, height = "270") {
    var optionRadial = {
        series: [{
            data: [44, 55, 41, 64, 22, 43, 21]
        }, {
            data: [53, 32, 33, 52, 13, 44, 32]
        }],
        colors: ['#8231D3', '#00AAFF'],
        chart: {
            width: width,
            height: height,
            type: 'bar',
        },
        legend: {
            show: false
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
        },

    };
    if ($(idName).length > 0) {
        new ApexCharts(document.querySelector(idName), optionRadial).render();
    }
}
groupBarChartBasic('.GroupedBarChartBasic', '100%', 270);