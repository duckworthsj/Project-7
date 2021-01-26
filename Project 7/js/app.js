const alertBanner = document.getElementById("alert");

const trafficCanvas = document.getElementById("traffic-chart").getContext('2d');

const mobileCanvas = document.getElementById("mobile-chart").getContext('2d');

const user = document.getElementById("userField");

const message = document.getElementById("messageField");

const send = document.getElementById("send");

var ctx = document.getElementById('daily-chart').getContext('2d');


function hideAlert() {
    var x = document.getElementById("alert");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
});

// Traffic Chart
var trafficChart = new Chart(trafficCanvas, {
    type: 'line',
        data: {
            labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
            datasets: [{
                data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1,
            }]
        },
            options: {
                aspectRatio: 2.5,
                animation: {
                duration: 0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                legend : {
                    display: false
                }
            }           
});

// Daily Traffic Chart
var dailyChart = new Chart(ctx, {
    type: 'bar',
        data: {
            labels: ['S', 'M', 'T', 'W', 'Th', 'F', 'Sa'],
            datasets: [{
                label: '# of hits',
                data: [75, 115, 175, 125, 225, 200,100],
                backgroundColor: ['#7377bf', '#7377bf', '#7377bf', '#7377bf', '#7377bf', '#7377bf', '#7377bf'],
                borderColor: ['#7377bf', '#7377bf', '#7377bf', '#7377bf', '#7377bf', '#7377bf', '#7377bf'],
                borderWidth: 1
            }]
        },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
});

// Mobile Users Chart
var mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
        data: {
            labels: ["Desktop", "Tablet", "Phones"],
            datasets: [{
                label: '# of Users',
                data: [2000, 550, 500],
                borderWidth: 0,
                backgroundColor: [
                    '#7477BF',
                    '#78CF82',
                    '#51B6C8'
                ]
            }]
        },
            options: {
                legend: {
                position: 'right',
                    labels: {
                    boxWidth: 20,
                    }
                }
            }
});
