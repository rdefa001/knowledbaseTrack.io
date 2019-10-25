// Chart Option
const options = {
    chart: {
        height: 600,
        width: '100%',
        type: 'bar',
        background: ' rgba(49, 24, 131, 0.9)',
        foreColor: '#f4f4f4'
    },

    series: [{
            name: 'Email',
            data: [
            41,
                159,
                1590,
                558,
                81,
                185,
                93,
                2000,
                97,
                1294,
                574,
                1187,
                852,
                313,
                1444,
                555,
                71,
                90,
                982,
                881,
                356,
                2818,
                729,
                244,
                283,
                138,
                1478
              ]
            },
             {
            name: 'Phone',
            data: [
                63,
                279,
                3413,
                573,
                224,
                304,
                227,
                6911,
                227,
                4106,
                403,
                495,
                691,
                187,
                714,
                990,
                171,
                237,
                851,
                1349,
                256,
                2888,
                1155,
                573,
                556,
                120,
                1954,
              ]
            },
              {
            name: 'White Mail',
            data: [
            8,
            8,
            24,
            20,
            4,
            63,
            3,
            13,
            0,
            15,
            13,
            83,
            42,
            29,
            85,
            7,
            12,
            0,
            31,
            17,
            17,
            30,
            8,
            9,
            17,
            7,
            27,
              ]
            }
         ],

    xaxis: {
        categories: [
            'Avios Claims',
            'Avios Queries',
            'Baggage',
            'Baggage (Damage & Delays)',
            'Car Hire',
            'Careers & Recruitment',
            'Cargo & Pets',
            'Changes to Bookings',
            'Charters',
            'Check-In',
            'Complaints',
            'Complaints (After Your Flight)',
            'Compliments & Feedback',
            'Expense Requests',
            'Flight Delays & Cancellations',
            'Flight Disruption',
            'Flybe Credit Card - Creation FS Ltd',
            'Group Bookings (9+ Passengers)',
            'Receipt Request',
            'Refunds (Unused Tickets)',
            'Refunds (Used Tickets)',
            'Reservations',
            'Schedule Changes',
            'Special Assistance',
            'Spend&Fly',
            'Travel Insurance',
            'Website Support'
        ]
    },
    plotOptions:{
        bar:{
            horizontal: false
        }
    },
//    fill:{
//        colors: ['#f44336']
//    },
    dataLabels:{
        enabled: false
    },
    title:{
        text: 'Departments Contacted',
        align: 'center',
        margin: 20,
        offsetY: 20,
        style: {
            fontSize: '25px'
      }
    }
}
// Init Chart
const chart = new ApexCharts(document.querySelector("#chart"), options);



// Render chart
chart.render();

//Event Method Example
document.querySelector('button').addEventListener('click', () => chart.updateOptions({
     plotOptions:{
        bar:{
            horizontal: true
        }
    },
  })
)






















