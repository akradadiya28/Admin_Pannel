$(document).ready(function () {
    $(".dropdown").click(function () {
        $(this).next(".dropdown-menu").slideToggle("fast");
        // $(this).addClass("active");
        $(this).parent("li").siblings("li").children(".dropdown-menu").slideUp("fast");
        // $(this).parent("li").siblings("li").children(".dropdown").removeClass("active")
    })
    $(".form-control").click(function () {
        $(this).addClass("outline");
    })
    $("#menubar").click(function () {
        $("body").toggleClass("close");
        $("#jend").toggleClass("justify-end");
    })
})
// chart bar
const ctx = document.getElementById('salesChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'USA',
            data: [15, 30, 55, 65, 60, 80, 95],
            backgroundColor: '#a91617',
        },
        {
            label: 'UK',
            data: [8, 35, 40, 60, 70, 55, 75],
            backgroundColor: '#832122'
        },
        {
            label: 'AU',
            data: [12, 25, 45, 55, 65, 70, 60],
            backgroundColor: '#5a2023'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx1 = document.getElementById('revChart');

new Chart(ctx1, {

    type: 'line',
    data: {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Sales',
            data: [15, 30, 55, 45, 70, 65, 85],
            fill: true,
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: '#a91617',
            tension: 0.1
        },
        {
            label: 'Revenue',
            data: [99, 135, 170, 130, 190, 180, 270],
            fill: true,
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: 'rgba(169, 22, 23, 0.6)',
            tension: 0.1
        },
        ]
    },

});
// calander
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
    });
    calendar.render();
});
