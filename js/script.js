$(document).ready(function () {
    $(".dropdown").click(function () {
        $(this).next(".dropdown-menu").slideToggle("fast");
        $(this).addClass("active");
        $(this).parent("li").siblings("li").children(".dropdown-menu").slideUp("fast");
        $(this).parent("li").siblings("li").children(".dropdown").removeClass("active")
    })
    $(".form-control").click(function () {
        $(this).addClass("outline");
    })
    $("#menubar").click(function () {
        console.log("hello");
        $("body").toggleClass("close");
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